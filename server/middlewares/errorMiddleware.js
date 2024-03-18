const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  const defaultErrors = {
    statusCode: 500,
    message: err || "something went wrong",
  };
  // if (err.name === "ValidationError" && Object.keys(err.keyValue) ===role) {
  //   (defaultErrors.statusCode = 400),
  //     (defaultErrors.message = "please select role" );
  // }
  if (err.name === "ValidationError") {
    (defaultErrors.statusCode = 400),
      (defaultErrors.message = Object.values(err.errors)
        .map((item) => item.message)
        .join(","));
  }

  if (err.code || err.code === 11000) {
    (defaultErrors.statusCode = 400),
      (defaultErrors.message = `user has already registered`);
      //${Object.keys(err.keyValue)} 
  }
  res.status(defaultErrors.statusCode).json({
    message: defaultErrors.message,
  });
};

module.exports = errorMiddleware;
