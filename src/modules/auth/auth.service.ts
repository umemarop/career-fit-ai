import bcrypt from "bcryptjs";

import { prisma } from "../../prisma/client.js";
import { AppError } from "../../utils/appError.js";
import type { RegisterInput } from "./auth.validation.js";

export const registerUser = async (input: RegisterInput) => {
  const { email, password } = input;

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new AppError("User with this email already exists", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};
