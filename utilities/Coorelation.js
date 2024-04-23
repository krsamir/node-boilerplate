import { CONSTANTS } from "./Constants.js";
import correlationId from "correlation-id";
import logger from "./logger.js";

const coorelation = (req, res, next) => {
  const correlator = () => {
    const corId = correlationId.getId();
    logger.info(`[${CONSTANTS.HEADERS.COORELATION_ID} : ${corId}]`);
    req.headers[CONSTANTS.HEADERS.COORELATION_ID] = corId;
    res.set(CONSTANTS.HEADERS.COORELATION_ID, corId);
  };
  const id = req?.get(CONSTANTS.HEADERS.COORELATION_ID);
  if (id) {
    correlationId.withId(id, correlator);
  } else {
    correlationId.withId(correlator);
  }
  next();
};

export default coorelation;
