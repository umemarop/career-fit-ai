import swaggerJSDoc from "swagger-jsdoc";
import { env } from "../config/env.js";

import { components } from "./components.js";
import { authPaths } from "./auth.paths.js";
import { profilePaths } from "./profile.paths.js";
import { jobAnalysisPaths } from "./jobAnalysis.paths.js";
import { applicationPaths } from "./application.paths.js";

const serverUrl =
  env.NODE_ENV === "production"
    ? "https://career-fit-ai.onrender.com/api/v1"
    : `http://localhost:${env.PORT}/api/v1`;

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "CareerFit AI API",
      version: "1.0.0",
      description:
        "A RESTful API for AI-powered job analysis and job application tracking.",
      contact: {
        name: "Sanghun Han",
        email: "umemarop@gmail.com",
      },
    },

    servers: [
      {
        url: serverUrl,
        description:
          env.NODE_ENV === "production" ? "Production server" : "Local server",
      },
    ],

    tags: [
      {
        name: "Auth",
        description: "Authentication endpoints",
      },
      {
        name: "Profile",
        description: "User profile endpoints",
      },
      {
        name: "Job Analysis",
        description: "AI job analysis endpoints",
      },
      {
        name: "Applications",
        description: "Job application tracking endpoints",
      },
    ],

    components,

    paths: {
      ...authPaths,
      ...profilePaths,
      ...jobAnalysisPaths,
      ...applicationPaths,
    },
  },

  apis: [],
};

export const swaggerSpec = swaggerJSDoc(options);
