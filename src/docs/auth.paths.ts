export const authPaths = {
  "/auth/register": {
    post: {
      tags: ["Auth"],
      summary: "Register a new user",
      description: "Create a new user account and return a JWT token.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "password", "confirmPassword"],
              properties: {
                email: {
                  type: "string",
                  format: "email",
                  example: "test@example.com",
                },
                password: {
                  type: "string",
                  example: "Password123",
                },
                confirmPassword: {
                  type: "string",
                  example: "Password123",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "User registered successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                token: "jwt-token",
                data: {
                  user: {
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    email: "test@example.com",
                    createdAt: "2026-05-12T06:00:00.000Z",
                    updatedAt: "2026-05-12T06:00:00.000Z",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Validation error or duplicate email",
          content: {
            "application/json": {
              schema: {
                oneOf: [
                  { $ref: "#/components/schemas/ValidationErrorResponse" },
                  { $ref: "#/components/schemas/ErrorResponse" },
                ],
              },
              examples: {
                validationError: {
                  summary: "Validation failed",
                  value: {
                    status: "fail",
                    message: "Validation failed",
                    errors: [
                      {
                        path: "email",
                        message: "Invalid email format",
                      },
                    ],
                  },
                },
                duplicateEmail: {
                  summary: "Duplicate email",
                  value: {
                    status: "fail",
                    message: "Email already exists",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  "/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "Login user",
      description: "Authenticate a user and return a JWT token.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "password"],
              properties: {
                email: {
                  type: "string",
                  format: "email",
                  example: "test@example.com",
                },
                password: {
                  type: "string",
                  example: "Password123",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "User logged in successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                token: "jwt-token",
                data: {
                  user: {
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    email: "test@example.com",
                    createdAt: "2026-05-12T06:00:00.000Z",
                    updatedAt: "2026-05-12T06:00:00.000Z",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Validation error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ValidationErrorResponse",
              },
            },
          },
        },
        401: {
          description: "Invalid email or password",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
              example: {
                status: "fail",
                message: "Invalid email or password",
              },
            },
          },
        },
      },
    },
  },

  "/auth/me": {
    get: {
      tags: ["Auth"],
      summary: "Get current user",
      description: "Return the currently authenticated user.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Current user retrieved successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  user: {
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    email: "test@example.com",
                    createdAt: "2026-05-12T06:00:00.000Z",
                    updatedAt: "2026-05-12T06:00:00.000Z",
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
              examples: {
                missingToken: {
                  summary: "Missing token",
                  value: {
                    status: "fail",
                    message:
                      "You are not logged in. Please log in to get access.",
                  },
                },
                invalidToken: {
                  summary: "Invalid token",
                  value: {
                    status: "fail",
                    message: "Invalid token. Please log in again.",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
