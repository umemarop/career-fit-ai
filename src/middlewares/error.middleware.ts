import type { Request, Response, NextFunction } from "express";

type ErrorWithStatus = Error & {
  statusCode?: number;
  status?: string;
  errors?: Record<string, string>;
};

export const errorController = (
  err: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  res.status(statusCode).json({
    status,
    message: err.message || "Something went wrong",
    ...(err.errors && { errors: err.errors }),
  });
};
