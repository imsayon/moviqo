export function notFoundHandler(_request, _response, next) {
  const error = new Error("Route not found.");
  error.statusCode = 404;
  next(error);
}

export function errorHandler(error, _request, response, _next) {
  const statusCode = error.statusCode || 500;

  response.status(statusCode).json({
    error: {
      message: error.message || "Unexpected server error."
    }
  });
}

