# Today:

- Data validation (Zod)

  - We want to make sure our data is in the right shape
  - Because then our code does not crash
  - We want to validate data when we don't control the source
    - User input!
    - Data from APIs
    - files we import
  - Build-time (before compiling ts -> js) Types
  - Run-time (after compiling ts -> js) No Types

- Better forms (React Hook Forms)
  - We use forms to get data from users
    - Collect on the front end (validate with Zod, a nice user experience (UX))
    - Send it to the back end (validate with Zod, data security)
    - Save it to the db or check it or whatever (validate by prisma)
