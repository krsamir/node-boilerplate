import { CONSTANTS } from "./Constants.js";
import ENVIRONMENT from "./environment.js";
import logger from "./logger.js";

const routeLogs = (req, res, next) => {
  const { url, method, body } = req;
  if (url.match("/api")) {
    console.log(
      "----------------------------------------------------------------------",
    );
    logger.info(`(METHOD: ${method}  ROUTE: ${url} )`);
    ENVIRONMENT.NODE_ENV === CONSTANTS.ENVIRONMENT.DEVELOPMENT &&
      method !== "GET" &&
      logger.info("PAYLOAD: ", body);
  }
  next();
};

export default routeLogs;
