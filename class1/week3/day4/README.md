# API Authorization & Authentication

## Concept Recap

### Authentication vs. Authorization

- **Authentication** is the process by which an entity proves its identity (Who are you?).
- **Authorization** is determining whether an entity is allowed to perform an action or access resources (What are you allowed to do?).

### Token-Based Authentication

- Involves issuing a token (like a digital pass) upon authenticating a user.
- This token must be presented for most actions requiring identification.
- It expires after some time, necessitating re-authentication for security.

### JSON Web Tokens (JWT)

- JWTs act as secure keys for authenticating API requests.
- Encoded with user data and a secret passphrase, they validate user identity.
- They must be included in request headers as `Authorization: Bearer <token>`.

## Installation

To get started with the project, clone the repository and then install the necessary dependencies using npm:

```bash
npm install
```

### Key Packages

- `tsx` and `typescript`: To use TypeScript.
- `express`: Framework for Node.js to manage HTTP requests and setup middleware.
- `@prisma/client`: ORM for TypeScript/JavaScript to work with our database.
- `jsonwebtoken`: To create and verify JWTs.
- `@types/jsonwebtoken`: Type definitions for TypeScript.
- `@types/express`: Type definitions for TypeScript.

## How to Use

Start the server with:

```bash
npm start
```

Your API will be available at `http://localhost:3001`.

### Endpoints

- `POST /register`: Register a new user.
- `POST /login`: Authenticate a user and receive a JWT.
- `POST /tweet`: Create a tweet as a user (insecure endpoint).
- `POST /secure-tweet`: Create a tweet as a user, requires JWT (secure endpoint).
- `GET /users`: Fetch all users, requires JWT.

Make sure to use `authMiddleware` on any endpoints that should be protected.

## Understanding the Code

### `server.ts`

- Sets up an Express server and routes for user registration, authentication, and actions like tweeting.

### `auth/jwt.ts`

- Contains `toToken` for generating JWTs, and `toData` for verifying and decoding JWTs.

### `auth/middleware.ts`

- `authMiddleware`: Express middleware to protect routes by validating JWTs.

## Practice

Try securing different parts of the API by using the `authMiddleware`. Add new routes or expand on the user model, and see how JWTs and middleware control access.
