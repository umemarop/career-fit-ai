import type { Request, Response, NextFunction } from "express";

import { registerUser } from "./auth.service.js";
import { catchAsync } from "../../utils/catchAsync.js";

export const register = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await registerUser(req.body);

    res.status(201).json({
      status: "success",
      data: { user },
    });
  },
);
