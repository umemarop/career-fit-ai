export const jobAnalysisPaths = {
  "/job-analysis/guest": {
    post: {
      tags: ["Job Analysis"],
      summary: "Analyze job description as guest",
      description:
        "Analyze a job description using AI without authentication. The result is not saved to the database.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["jobDescription"],
              properties: {
                jobDescription: {
                  type: "string",
                  example:
                    "We are hiring a Backend Developer with experience in Node.js, TypeScript, PostgreSQL, and REST API development.",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Job description analyzed successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  analysis: {
                    jobTitle: "Backend Developer",
                    companyName: null,
                    location: null,
                    summary:
                      "This role focuses on backend API development using Node.js and TypeScript.",
                    requiredSkills: ["Node.js", "TypeScript", "PostgreSQL"],
                    preferredSkills: ["Docker", "AWS"],
                    responsibilities: [
                      "Build and maintain REST APIs",
                      "Design database models",
                      "Collaborate with frontend developers",
                    ],
                    matchScore: 82,
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Validation error or invalid AI response",
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
        500: {
          description: "AI service or internal server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
              example: {
                status: "error",
                message: "Something went wrong!",
              },
            },
          },
        },
      },
    },
  },

  "/job-analysis": {
    post: {
      tags: ["Job Analysis"],
      summary: "Analyze and save job description",
      description:
        "Analyze a job description using AI and save the result for the authenticated user.",
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
              required: ["jobDescription"],
              properties: {
                jobDescription: {
                  type: "string",
                  example:
                    "We are hiring a Full Stack Developer to build web applications using React, Node.js, TypeScript, and PostgreSQL.",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Job analysis created successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  analysis: {
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    userId: "550e8400-e29b-41d4-a716-446655440000",
                    jobTitle: "Full Stack Developer",
                    companyName: null,
                    location: null,
                    jobDescription:
                      "We are hiring a Full Stack Developer to build web applications using React, Node.js, TypeScript, and PostgreSQL.",
                    summary:
                      "This role requires full-stack development across frontend and backend systems.",
                    requiredSkills: [
                      "React",
                      "Node.js",
                      "TypeScript",
                      "PostgreSQL",
                    ],
                    preferredSkills: ["Docker", "AWS"],
                    responsibilities: [
                      "Build frontend features",
                      "Develop backend APIs",
                      "Work with relational databases",
                    ],
                    matchScore: 85,
                    createdAt: "2026-05-12T06:00:00.000Z",
                    updatedAt: "2026-05-12T06:00:00.000Z",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Validation error or invalid AI response",
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
      tags: ["Job Analysis"],
      summary: "Get my job analyses",
      description:
        "Retrieve saved job analyses for the authenticated user with pagination.",
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
          description: "Job analyses retrieved successfully",
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
                  analyses: [
                    {
                      id: "550e8400-e29b-41d4-a716-446655440000",
                      userId: "550e8400-e29b-41d4-a716-446655440000",
                      jobTitle: "Full Stack Developer",
                      companyName: null,
                      location: null,
                      jobDescription: "We are hiring a Full Stack Developer...",
                      summary:
                        "This role requires full-stack development across frontend and backend systems.",
                      requiredSkills: ["React", "Node.js", "TypeScript"],
                      preferredSkills: ["Docker", "AWS"],
                      responsibilities: [
                        "Build frontend features",
                        "Develop backend APIs",
                      ],
                      matchScore: 85,
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

  "/job-analysis/{id}": {
    get: {
      tags: ["Job Analysis"],
      summary: "Get job analysis by ID",
      description:
        "Retrieve a single saved job analysis owned by the authenticated user.",
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
          description: "Job analysis retrieved successfully",
          content: {
            "application/json": {
              example: {
                status: "success",
                data: {
                  analysis: {
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    userId: "550e8400-e29b-41d4-a716-446655440000",
                    jobTitle: "Full Stack Developer",
                    companyName: null,
                    location: null,
                    jobDescription:
                      "We are hiring a Full Stack Developer to build web applications using React, Node.js, TypeScript, and PostgreSQL.",
                    summary:
                      "This role requires full-stack development across frontend and backend systems.",
                    requiredSkills: [
                      "React",
                      "Node.js",
                      "TypeScript",
                      "PostgreSQL",
                    ],
                    preferredSkills: ["Docker", "AWS"],
                    responsibilities: [
                      "Build frontend features",
                      "Develop backend APIs",
                      "Work with relational databases",
                    ],
                    matchScore: 85,
                    createdAt: "2026-05-12T06:00:00.000Z",
                    updatedAt: "2026-05-12T06:00:00.000Z",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Invalid ID",
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
          description: "Job analysis not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
              example: {
                status: "fail",
                message: "Job analysis not found",
              },
            },
          },
        },
      },
    },
  },
};
