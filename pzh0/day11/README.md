# Morning Lecture

- What will we be learning today?

  - We will create an API!
    - We start with two .json files
    - animals.json
    - farms.json
  - We use Express.js for the endpoints
  - We use Prisma for the database

- We will:
  - Setup a new project
  - Define our models
  - Seed our database with animals.json and farms.json
  - Create our endpoints

## Setting up a project with Prisma and Express

### Setup NPM and install packages

- Setup NPM so we can install packages
  `npm init -y`

- Install all the packages
  `npm i typescript express @types/express prisma @prisma/client tsx`

### Initialise TypeScript and Prisma

- Initialise TypeScript
  `tsc --init`

- Initialise Prisma
  `npx prisma init`

### Configure our Database

- Change the database Provider in our schema file (`prisma/schema.prisma`):

```ts
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

- Change the database URL in the `.env` file
  - `file:./dev.db`

## Next Steps

- Add your JSON files so you can seed
  - Add them to your `prisma` folder inside a folder called `data`
- Define your Schema
- Seed your database with the data from our JSON file(s)
  - Create a `seed.ts` file in the `prisma` folder
- Create the server
  - Create a `server.ts` inside your main folder
