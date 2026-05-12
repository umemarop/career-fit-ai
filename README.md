# 🚀 CareerFit AI API

## 📖 Overview

CareerFit AI API is a production-ready RESTful backend API built with **Node.js**, **Express**, and **TypeScript**.

It provides:

- AI-powered job analysis using Gemini API
- Job application tracking system
- JWT-based authentication
- Profile management
- Swagger OpenAPI documentation
- Integration testing with Jest & Supertest

> A scalable backend architecture designed with maintainability, testing, and production deployment in mind.

---

## 🌐 Live Demo

API Base URL:  
https://career-fit-ai.onrender.com

Swagger Docs:  
https://career-fit-ai.onrender.com/api-docs

> ⚠️ Note:
> This API is hosted on Render free tier.
> The server may take up to 30–50 seconds to respond on the first request due to cold start.

---

## ✨ Features

## 🔐 Authentication

- User registration
- User login
- JWT authentication
- Protected routes
- Current authenticated user endpoint (`/me`)

---

## 👤 Profile Management

- Create profile
- Get current profile
- Update profile
- Ownership validation

---

## 🤖 AI Job Analysis

- Guest job analysis
- Authenticated job analysis
- Gemini API integration
- AI response schema validation using Zod
- Save analysis history
- Pagination support

---

## 📋 Job Application Tracking

- Create manual applications
- Create applications from job analysis
- Update application details
- Update application status
- Soft delete applications
- Duplicate prevention
- Pagination & metadata support

---

## 🧪 Testing

Comprehensive integration testing implemented with:

- Jest
- Supertest
- PostgreSQL test database
- Gemini API mocking

### Tested Features

- Authentication flow
- Authorization
- Validation
- Ownership checks
- Prisma/PostgreSQL integration
- AI response validation
- Soft delete flow
- Pagination/meta responses

> 33+ integration tests passing successfully.

---

## 🛡 Core Architecture

### Backend Structure

- Controller / Service architecture
- Global error handling system
- AppError custom error class
- catchAsync wrapper
- Zod validation middleware
- Environment validation with Zod
- Graceful shutdown handling
- uncaughtException / unhandledRejection handling

---

## 📚 API Documentation

Swagger OpenAPI documentation implemented using:

- swagger-jsdoc
- swagger-ui-express

Available at:

https://career-fit-ai.onrender.com/api-docs

---

## 🛠 Tech Stack

### Backend

- Node.js
- Express
- TypeScript

### Database

- PostgreSQL
- Prisma ORM

### Validation & Auth

- Zod
- JWT
- bcryptjs

### AI Integration

- Gemini API

### Testing

- Jest
- Supertest

### Deployment

- Render

---

## 📂 Project Structure

```txt
src/
├── config/
├── docs/
├── generated/
├── middlewares/
├── modules/
│   ├── auth/
│   ├── profile/
│   ├── jobAnalysis/
│   └── application/
├── prisma/
├── services/
├── tests/
│   ├── fixtures/
│   ├── helpers/
│   ├── integration/
│   └── setup.ts
├── types/
├── utils/
├── app.ts
└── server.ts
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/umemarop/career-fit-ai.git

cd career-fit-ai
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development

PORT=3000

DATABASE_URL=your_database_url

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

GEMINI_API_KEY=your_gemini_api_key
```

---

### 4. Run Prisma migrations

```bash
npm run migrate
```

---

### 5. Start development server

```bash
npm run dev
```

---

## 🧪 Running Tests

### Run integration tests

```bash
npm test
```

### Watch mode

```bash
npm run test:watch
```

### Coverage

```bash
npm run test:coverage
```

---

## 📡 API Endpoints

### Auth

- POST `/api/v1/auth/register`
- POST `/api/v1/auth/login`
- GET `/api/v1/auth/me`

### Profile

- POST `/api/v1/profile`
- GET `/api/v1/profile`
- PATCH `/api/v1/profile`

### Job Analysis

- POST `/api/v1/job-analysis/guest`
- POST `/api/v1/job-analysis`
- GET `/api/v1/job-analysis`
- GET `/api/v1/job-analysis/:id`

### Applications

- POST `/api/v1/applications`
- GET `/api/v1/applications`
- GET `/api/v1/applications/:id`
- PATCH `/api/v1/applications/:id`
- PATCH `/api/v1/applications/:id/status`
- DELETE `/api/v1/applications/:id`

---

## ⚠️ Important Notes

- Swagger UI is available in both development and production.
- AI job analysis uses the Gemini API.
- Application deletion uses soft delete strategy.
- Render free tier may cause cold starts.

---

## 📌 Example Response

```json
{
  "status": "success",
  "data": {
    "id": "uuid",
    "email": "test@example.com"
  }
}
```

---

## 📌 Example Error Response

```json
{
  "status": "fail",
  "message": "Validation failed"
}
```

---

## 🚀 Production Deployment

Production deployment includes:

- Render Web Service
- Render PostgreSQL
- Prisma migrations
- Environment variable management
- Swagger production configuration
- Automatic GitHub deploys

---

## 🔮 Future Improvements (V2)

Planned features:

- CI/CD pipeline
- Docker support
- AWS deployment
- Role-based authorization
- Resume upload & parsing
- AI resume analysis
- Interview preparation module
- Frontend integration
- Monitoring & logging

---

## 👨‍💻 Author

**Sanghun Han**

Backend Developer focused on:

- Node.js
- Express
- TypeScript
- REST API Architecture
- Backend System Design
