const asyncHandler = function (requestHandler) {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res, next);
      //next() we dont do that .
    } catch (error) {
      next(error);
    }
  };
};

export default asyncHandler;