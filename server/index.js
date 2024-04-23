import express from "express";
import { CONSTANTS, ENVIRONMENT, coorelation, logger } from "utilities";
import { routeLogs } from "utilities";
import sequelize from "database";

const app = express();

app.use(coorelation);
app.use(routeLogs);
app.use((err, req, res, next) => {
  if (err) {
    logger.error(err);
    if (ENVIRONMENT.NODE_ENV !== CONSTANTS.ENVIRONMENT.DEVELOPMENT) {
      delete err?.error;
    }
    res.status(500).send({ status: 0, message: "Getting some issue", err });
  } else {
    next(err);
  }
});

// app.use(express.static(path.join(__dirname, "../public")));
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public", "index.html"));
// });

app.listen(ENVIRONMENT.PORT, ENVIRONMENT.HOST, () =>
  logger.info(
    `APPLICATION STARTED ON PORT http://${ENVIRONMENT.HOST}:${ENVIRONMENT.PORT}`,
  ),
);
