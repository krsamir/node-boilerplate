const CONSTANTS = Object.freeze({
  CREATE_TIMESTAMP: "YYYY-MM-DD HH:mm:ss",
  HEADERS: {
    COORELATION_ID: "x-correlation-id",
  },
  ENVIRONMENT: {
    DEVELOPMENT: "development",
    PRODUCTION: "production",
  },
});

const RESPONSE_STATUS = Object.freeze({
  OK_200: 200,
  CREATED_201: 201,
  BAD_REQUEST_400: 400,
  UNAUTHORIZED_401: 401,
  FORBIDDEN_403: 403,
  NOT_FOUND_404: 404,
  INTERNAL_SERVER_ERROR_500: 500,
});
export { CONSTANTS, RESPONSE_STATUS };
