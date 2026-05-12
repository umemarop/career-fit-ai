export const profilePaths = {
  "/profile": {
    post: {
      tags: ["Profile"],
      summary: "Create user profile",
      description: "Create a profile for the currently authenticated user.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["targetRole", "experienceLevel", "skills"],
              properties: {
                targetRole: {
                  type: "string",
                  example: "Full Stack Developer",
                },
                experienceLevel: {
                  type: "string",
                  enum: ["ENTRY", "JUNIOR", "MID", "SENIOR"],
                  example: "JUNIOR",
                },
                skills: {
                  type: "array",
                  items: {
                    type: "string",
                  },
                  example: ["TypeScript", "Node.js", "React", "PostgreSQL"],
                },
                location: {
                  type: "string",
                  nullable: true,
                  example: "Brisbane, Australia",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Profile created successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  profile: {
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    userId: "550e8400-e29b-41d4-a716-446655440000",
                    targetRole: "Full Stack Developer",
                    experienceLevel: "JUNIOR",
                    skills: ["TypeScript", "Node.js", "React", "PostgreSQL"],
                    location: "Brisbane, Australia",
                    createdAt: "2026-05-12T06:00:00.000Z",
                    updatedAt: "2026-05-12T06:00:00.000Z",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Validation error or profile already exists",
          content: {
            "application/json": {
              schema: {
                oneOf: [
                  { $ref: "#/components/schemas/ValidationErrorResponse" },
                  { $ref: "#/components/schemas/ErrorResponse" },
                ],
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
            },
          },
        },
      },
    },

    get: {
      tags: ["Profile"],
      summary: "Get my profile",
      description: "Retrieve the profile of the currently authenticated user.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Profile retrieved successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  profile: {
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    userId: "550e8400-e29b-41d4-a716-446655440000",
                    targetRole: "Full Stack Developer",
                    experienceLevel: "JUNIOR",
                    skills: ["TypeScript", "Node.js", "React", "PostgreSQL"],
                    location: "Brisbane, Australia",
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
            },
          },
        },
        404: {
          description: "Profile not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
              example: {
                status: "fail",
                message: "Profile not found",
              },
            },
          },
        },
      },
    },

    patch: {
      tags: ["Profile"],
      summary: "Update my profile",
      description: "Update the profile of the currently authenticated user.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                targetRole: {
                  type: "string",
                  example: "Backend Developer",
                },
                experienceLevel: {
                  type: "string",
                  enum: ["ENTRY", "JUNIOR", "MID", "SENIOR"],
                  example: "MID",
                },
                skills: {
                  type: "array",
                  items: {
                    type: "string",
                  },
                  example: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
                },
                location: {
                  type: "string",
                  nullable: true,
                  example: "Remote",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Profile updated successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  profile: {
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    userId: "550e8400-e29b-41d4-a716-446655440000",
                    targetRole: "Backend Developer",
                    experienceLevel: "MID",
                    skills: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
                    location: "Remote",
                    createdAt: "2026-05-12T06:00:00.000Z",
                    updatedAt: "2026-05-12T06:10:00.000Z",
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
          description: "Unauthorized",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
        404: {
          description: "Profile not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
              example: {
                status: "fail",
                message: "Profile not found",
              },
            },
          },
        },
      },
    },
  },
};
