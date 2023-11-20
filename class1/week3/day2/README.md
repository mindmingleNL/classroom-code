# Lecture

## Setup the Project

- We created a new folder
- Initialise npm with `npm init -y`
- Install typescript and prisma packages with `npm install typescript tsx prisma`
- Initialise TypeScript with `npx tsc --init`
- Initialise Prisma with `npx prisma init`
- Change the `DATABASE_URL` in the `.env` file to `file:./dev.db`
- Change the database provider in `prisma/schema.prisma` to `sqlite`:

```
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

## Resources

- [Prisma Documentation on relations](https://www.prisma.io/docs/concepts/components/prisma-schema/relations)
- [Prisma Documentation on making queries with relations](https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries)
