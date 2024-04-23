import winston, { format } from "winston";
import ENVIRONMENT from "./environment.js";
import { CONSTANTS } from "./Constants.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { combine, timestamp, prettyPrint, colorize, simple, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `[${level}] [${timestamp}]  [${message}]`;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(
    timestamp({ format: "YYYY-MM-DD hh:mm:ss a" }),
    prettyPrint(),
    colorize(),
    simple(),
    customFormat,
  ),
  transports: [new winston.transports.Console()],
});
if (ENVIRONMENT.NODE_ENV === CONSTANTS.ENVIRONMENT.PRODUCTION) {
  logger.add(
    new winston.transports.File({
      filename: path.join(__dirname, "../Logs/error.log"),
      level: "error",
    }),
  );
} else {
  logger.add(
    new winston.transports.File({
      filename: path.join(__dirname, "../Logs/logs.log"),
    }),
  );
}

export default logger;
