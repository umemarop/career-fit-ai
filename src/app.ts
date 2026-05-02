import express from "express";
import morgan from "morgan";
import { errorController } from "./middlewares/error.middleware.js";
import { AppError } from "./utils/appError.js";
export const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "CareerFit API is running 🚀",
    version: "v1",
    endpoints: {
      auth: "/api/v1/auth",
      profile: "/api/v1/profile",
      jobAnalysis: "/api/v1/job-analysis",
      application: "/api/v1/application",
    },
  });
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorController);
