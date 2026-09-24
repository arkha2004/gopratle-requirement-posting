import { apiError } from "./apiError.js";

const errorHandler = (err, req, res, next) => {
    

    if (!(err instanceof apiError)) {
        const statusCode = err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        

        return res.status(statusCode).json(
            new apiError(statusCode, message, err?.errors || [], err.stack) 
        );
    }


    return res.status(err.statusCode).json(err); 
    
};

export {errorHandler} 