import type { ValidatedRequestData } from "./validated.js";

declare global {
  namespace Express {
    interface Request {
      validated?: ValidatedRequestData;
    }
  }
}

export {};
