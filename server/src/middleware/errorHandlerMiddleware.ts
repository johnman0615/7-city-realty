
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Log the error stack trace for debugging

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Default to 500 if no status code is set
  res.status(statusCode).json({
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }), // Include stack trace in development
  });
};