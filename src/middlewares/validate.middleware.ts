import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { AppError } from "../utils/appError.js";

export const validate =
  (schema: z.ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path.join(".");
        if (issue.code === "invalid_type") {
          errors[field] = `${field} is required`;
        } else {
          errors[field] = issue.message;
        }
      });

      return next(new AppError("Validation failed", 400, errors));
    }
    req.body = result.data;
    next();
  };
