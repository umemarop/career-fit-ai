export const applicationPaths = {
  "/applications": {
    post: {
      tags: ["Applications"],
      summary: "Create a job application",
      description:
        "Create a new job application manually or from an existing job analysis.",
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
              required: ["jobTitle"],
              properties: {
                jobTitle: {
                  type: "string",
                  example: "Backend Developer",
                },
                companyName: {
                  type: "string",
                  example: "Example Company",
                },
                location: {
                  type: "string",
                  example: "Brisbane, Australia",
                },
                jobUrl: {
                  type: "string",
                  example: "https://example.com/jobs/backend-developer",
                },
                notes: {
                  type: "string",
                  example: "Applied through LinkedIn.",
                },
                jobAnalysisId: {
                  type: "string",
                  format: "uuid",
                  nullable: true,
                  example: "550e8400-e29b-41d4-a716-446655440000",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Application created successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  application: {
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    userId: "550e8400-e29b-41d4-a716-446655440000",
                    jobAnalysisId: "550e8400-e29b-41d4-a716-446655440000",
                    jobTitle: "Backend Developer",
                    companyName: "Example Company",
                    location: "Brisbane, Australia",
                    jobUrl: "https://example.com/jobs/backend-developer",
                    status: "SAVED",
                    notes: "Applied through LinkedIn.",
                    appliedAt: null,
                    createdAt: "2026-05-12T06:00:00.000Z",
                    updatedAt: "2026-05-12T06:00:00.000Z",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Validation error or duplicate application",
          content: {
            "application/json": {
              schema: {
                oneOf: [
                  {
                    $ref: "#/components/schemas/ValidationErrorResponse",
                  },
                  {
                    $ref: "#/components/schemas/ErrorResponse",
                  },
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
      tags: ["Applications"],
      summary: "Get my applications",
      description:
        "Retrieve job applications for the authenticated user with pagination.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "page",
          in: "query",
          schema: {
            type: "integer",
            example: 1,
          },
          description: "Page number",
        },
        {
          name: "limit",
          in: "query",
          schema: {
            type: "integer",
            example: 10,
          },
          description: "Number of items per page",
        },
      ],
      responses: {
        200: {
          description: "Applications retrieved successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                results: 1,
                meta: {
                  page: 1,
                  limit: 10,
                  totalItems: 1,
                  totalPages: 1,
                },
                data: {
                  applications: [
                    {
                      id: "550e8400-e29b-41d4-a716-446655440000",
                      userId: "550e8400-e29b-41d4-a716-446655440000",
                      jobTitle: "Backend Developer",
                      companyName: "Example Company",
                      location: "Brisbane, Australia",
                      jobUrl: "https://example.com/jobs/backend-developer",
                      status: "SAVED",
                      notes: "Applied through LinkedIn.",
                      appliedAt: null,
                      createdAt: "2026-05-12T06:00:00.000Z",
                      updatedAt: "2026-05-12T06:00:00.000Z",
                    },
                  ],
                },
              },
            },
          },
        },
        400: {
          description: "Invalid query parameters",
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
      },
    },
  },

  "/applications/{id}": {
    get: {
      tags: ["Applications"],
      summary: "Get application by ID",
      description:
        "Retrieve a single application owned by the authenticated user.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          $ref: "#/components/parameters/IdParam",
        },
      ],
      responses: {
        200: {
          description: "Application retrieved successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  application: {
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    userId: "550e8400-e29b-41d4-a716-446655440000",
                    jobTitle: "Backend Developer",
                    companyName: "Example Company",
                    location: "Brisbane, Australia",
                    jobUrl: "https://example.com/jobs/backend-developer",
                    status: "SAVED",
                    notes: "Applied through LinkedIn.",
                    appliedAt: null,
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
          description: "Application not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
              example: {
                status: "fail",
                message: "Application not found",
              },
            },
          },
        },
      },
    },

    patch: {
      tags: ["Applications"],
      summary: "Update application",
      description: "Update a job application owned by the authenticated user.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          $ref: "#/components/parameters/IdParam",
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                jobTitle: {
                  type: "string",
                  example: "Senior Backend Developer",
                },
                companyName: {
                  type: "string",
                  example: "Updated Company",
                },
                location: {
                  type: "string",
                  example: "Remote",
                },
                jobUrl: {
                  type: "string",
                  example: "https://example.com/jobs/senior-backend",
                },
                notes: {
                  type: "string",
                  example: "Updated notes.",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Application updated successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  application: {
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    jobTitle: "Senior Backend Developer",
                    companyName: "Updated Company",
                    location: "Remote",
                    status: "SAVED",
                    updatedAt: "2026-05-12T06:10:00.000Z",
                  },
                },
              },
            },
          },
        },
      },
    },

    delete: {
      tags: ["Applications"],
      summary: "Delete application",
      description:
        "Soft delete a job application owned by the authenticated user.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          $ref: "#/components/parameters/IdParam",
        },
      ],
      responses: {
        204: {
          description: "Application deleted successfully",
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
          description: "Application not found",
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
  },

  "/applications/{id}/status": {
    patch: {
      tags: ["Applications"],
      summary: "Update application status",
      description:
        "Update the status of a job application owned by the authenticated user.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          $ref: "#/components/parameters/IdParam",
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["status"],
              properties: {
                status: {
                  type: "string",
                  enum: ["SAVED", "APPLIED", "INTERVIEW", "OFFER", "REJECTED"],
                  example: "APPLIED",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Application status updated successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  application: {
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    status: "APPLIED",
                    updatedAt: "2026-05-12T06:10:00.000Z",
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
