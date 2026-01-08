

## Backend Framework Setup

A **Spring Boot** backend application was added to the project.

- Java 21
- Spring Boot
- REST-based architecture

The backend runs as a standalone service and exposes HTTP endpoints that the frontend can consume.

---

## Backend API for Bear Data


I implemented a REST API endpoint in the Spring Boot backend that acts as an intermediary between the frontend and the Wikipedia API. see WikipediaController

## CORS Configuration

CORS was configured in the Spring Boot backend to **only allow requests from the frontend application**.

## Frontend API Refactor

I only changed the Request-URL. Parsing still done in the frontend. 

## Dockerization (Multi-Stage Builds)
### Frontend Dockerfile

A **multi-stage Dockerfile** was created for the frontend.

Stages:
1. **Development stage**
   - Runs the Vite development server
   - Enables hot reload
2. **Build stage**
   - Builds optimized production assets
3. **Production stage**
   - Serves static files using **Nginx**

This ensures fast development and a lightweight production image.

### Backend Dockerfile

A **multi-stage Dockerfile** was created for the backend.

Stages:
1. **Development stage**
   - Runs the backend using `spring-boot:run`
2. **Build stage**
   - Builds the application JAR using Maven
3. **Production stage**
   - Runs the compiled JAR using a minimal JRE image

## Docker Compose 
File: `docker-compose.yml`

Development mode provides:
- Vite dev server for the frontend
- Spring Boot backend with hot reload
- Defined service dependencies
- Environment variable configuration

Start command:
docker-compose -f docker-compose.yml up --build

File: docker-compose.prod.yml

Production mode provides:
- Frontend served via Nginx
- Backend running as a compiled JAR
- Optimized images without dev tooling
- Internal Docker networking

Start command:
docker-compose -f docker-compose.prod.yml up --build

Frontend: http://localhost
Backend API: http://localhost:8080/api/ursids
