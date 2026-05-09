import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.string().transform(Number),

  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string(),
  GEMINI_API_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
