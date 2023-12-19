# Wishlist backend

This is the back end for my wishlist application. It does x, y and z.

## Stack

- Express
- Prisma
- jsonwebtoken
- CORS
- SQLite

## How to run the code

- Clone this repository
- Install dependencies (`npm install`)
- Create an environment variable names `DATABASE_URL` that points to a local SQLite database.
- Initialize the database (`npx prisma db push`)
- Seed the database (`npx tsx prisma/seed.ts`)
- Run the server (`npx tsx server.ts`)

## Project structure

The main endpoints for this server are defined in the file `server.ts`. We tried to make the endpoints follow REST principles.
