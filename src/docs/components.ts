export const components = {
  securitySchemes: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
    },
  },

  parameters: {
    IdParam: {
      name: "id",
      in: "path",
      required: true,
      description: "Resource UUID",
      schema: {
        type: "string",
        format: "uuid",
        example: "550e8400-e29b-41d4-a716-446655440000",
      },
    },
  },

  schemas: {
    ErrorResponse: {
      type: "object",
      properties: {
        status: {
          type: "string",
          example: "fail",
        },
        message: {
          type: "string",
          example: "Invalid input data",
        },
      },
    },

    ValidationErrorResponse: {
      type: "object",
      properties: {
        status: {
          type: "string",
          example: "fail",
        },
        message: {
          type: "string",
          example: "Validation failed",
        },
        errors: {
          type: "array",
          items: {
            type: "object",
            properties: {
              path: {
                type: "string",
                example: "email",
              },
              message: {
                type: "string",
                example: "Invalid email format",
              },
            },
          },
        },
      },
    },

    User: {
      type: "object",
      properties: {
        id: {
          type: "string",
          format: "uuid",
          example: "550e8400-e29b-41d4-a716-446655440000",
        },
        email: {
          type: "string",
          format: "email",
          example: "test@example.com",
        },
        createdAt: {
          type: "string",
          format: "date-time",
          example: "2026-05-12T06:00:00.000Z",
        },
        updatedAt: {
          type: "string",
          format: "date-time",
          example: "2026-05-12T06:10:00.000Z",
        },
      },
    },

    PaginationMeta: {
      type: "object",
      properties: {
        page: {
          type: "integer",
          example: 1,
        },
        limit: {
          type: "integer",
          example: 10,
        },
        totalItems: {
          type: "integer",
          example: 25,
        },
        totalPages: {
          type: "integer",
          example: 3,
        },
      },
    },

    Profile: {
      type: "object",
      properties: {
        id: {
          type: "string",
          format: "uuid",
          example: "550e8400-e29b-41d4-a716-446655440000",
        },
        userId: {
          type: "string",
          format: "uuid",
          example: "550e8400-e29b-41d4-a716-446655440000",
        },
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
        createdAt: {
          type: "string",
          format: "date-time",
          example: "2026-05-12T06:00:00.000Z",
        },
        updatedAt: {
          type: "string",
          format: "date-time",
          example: "2026-05-12T06:10:00.000Z",
        },
      },
    },

    JobAnalysis: {
      type: "object",
      properties: {
        id: {
          type: "string",
          format: "uuid",
          example: "550e8400-e29b-41d4-a716-446655440000",
        },
        userId: {
          type: "string",
          format: "uuid",
          nullable: true,
          example: "550e8400-e29b-41d4-a716-446655440000",
        },
        jobTitle: {
          type: "string",
          example: "Backend Developer",
        },
        companyName: {
          type: "string",
          nullable: true,
          example: "Example Company",
        },
        location: {
          type: "string",
          nullable: true,
          example: "Brisbane, Australia",
        },
        jobDescription: {
          type: "string",
          example: "We are looking for a backend developer...",
        },
        summary: {
          type: "string",
          example: "This role focuses on backend API development.",
        },
        requiredSkills: {
          type: "array",
          items: {
            type: "string",
          },
          example: ["Node.js", "TypeScript", "PostgreSQL"],
        },
        preferredSkills: {
          type: "array",
          items: {
            type: "string",
          },
          example: ["AWS", "Docker"],
        },
        responsibilities: {
          type: "array",
          items: {
            type: "string",
          },
          example: ["Build REST APIs", "Maintain database models"],
        },
        matchScore: {
          type: "integer",
          example: 82,
        },
        createdAt: {
          type: "string",
          format: "date-time",
          example: "2026-05-12T06:00:00.000Z",
        },
        updatedAt: {
          type: "string",
          format: "date-time",
          example: "2026-05-12T06:10:00.000Z",
        },
      },
    },

    ApplicationStatus: {
      type: "string",
      enum: ["SAVED", "APPLIED", "INTERVIEW", "OFFER", "REJECTED"],
      example: "SAVED",
    },

    Application: {
      type: "object",
      properties: {
        id: {
          type: "string",
          format: "uuid",
          example: "550e8400-e29b-41d4-a716-446655440000",
        },
        userId: {
          type: "string",
          format: "uuid",
          example: "550e8400-e29b-41d4-a716-446655440000",
        },
        jobAnalysisId: {
          type: "string",
          format: "uuid",
          nullable: true,
          example: "550e8400-e29b-41d4-a716-446655440000",
        },
        jobTitle: {
          type: "string",
          example: "Backend Developer",
        },
        companyName: {
          type: "string",
          nullable: true,
          example: "Example Company",
        },
        location: {
          type: "string",
          nullable: true,
          example: "Brisbane, Australia",
        },
        jobUrl: {
          type: "string",
          nullable: true,
          example: "https://example.com/jobs/backend-developer",
        },
        status: {
          $ref: "#/components/schemas/ApplicationStatus",
        },
        notes: {
          type: "string",
          nullable: true,
          example: "Applied through company website.",
        },
        appliedAt: {
          type: "string",
          format: "date-time",
          nullable: true,
          example: "2026-05-12T06:00:00.000Z",
        },
        createdAt: {
          type: "string",
          format: "date-time",
          example: "2026-05-12T06:00:00.000Z",
        },
        updatedAt: {
          type: "string",
          format: "date-time",
          example: "2026-05-12T06:10:00.000Z",
        },
      },
    },
  },
};
