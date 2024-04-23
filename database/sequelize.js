import { Sequelize } from "sequelize";
import { ENVIRONMENT, logger } from "utilities";

const sequelize = new Sequelize(
  ENVIRONMENT.SCHEMA_NAME,
  ENVIRONMENT.DATABASE_USER,
  ENVIRONMENT.DATABASE_PASSWORD,
  {
    host: ENVIRONMENT.DATABASE_HOST,
    dialect: "mysql",
    logging: false,
    port: ENVIRONMENT.DATABASE_PORT,
  },
);

try {
  await sequelize.authenticate();
  logger.info(`CONNECTED TO MYSQL DATABASE`);
} catch (error) {
  logger.error("UNABLE TO CONNECT TO THE DATABASE:", error);
  logger.error(error);
}
export default sequelize;
