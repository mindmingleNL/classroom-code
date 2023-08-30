# Portfolio lecture

- Hashing X
- Env vars
- Postgres

## Hashing

A hash function (h) is a function that given an input produces an output. BUT we can't calculate the input given the output.

Example of a 'reversible' function:
`x * 2`

Hash function by definition is not reversible

`h("monkey") === "odih3983rofugefdyigoih!"`

A hash function is ALWAYS deterministic. Given the same input, it always produces the same output.
There is no correlation between input and output.

`h("monkey") === "odih3983rofugefdyigoih!"`
`h("monkay") === "cnchf12313!"`

### Using a hash function to protect passwords

Given the hash function h. When we register a user (create a user):

- We hash their password using h, and store the result in the database

When the user wants to login:

- We hash the given password and we compare the result to the hash we have in the database

h(password_from_request) === h(password_in_db)
