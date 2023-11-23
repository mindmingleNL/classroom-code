////////////////////////////////////////
// 🗺️ Route to register a user

// app.post("/register", async (req, res) => {
//   const requestBody = req.body;
//   if (
//     "age" in requestBody &&
//     "username" in requestBody &&
//     "password" in requestBody
//   ) {
//     try {
//       await prisma.user.create({
//         data: requestBody
//       });
//       res.status(201).send({ message: "User created!" });
//     } catch (error) {
//       // If we get an error, send back HTTP 500 (Server Error)
//       res.status(500).send({ message: "Something went wrong!" });
//     }
//   } else {
//     // If we are missing fields, send back a HTTP 400
//     res
//       .status(400)
//       .send({ message: "'username', 'password' and 'age' are required!" });
//   }
// });

////////////////////////////////////////
// 🔒 Login

// app.post("/login", async (req, res) => {
//   const requestBody = req.body;
//   if ("username" in requestBody && "password" in requestBody) {
//     try {
//       // First find the user
//       const userToLogin = await prisma.user.findUnique({
//         where: {
//           username: requestBody.username
//         }
//       });
//       if (userToLogin && userToLogin.password === requestBody.password) {
//         res.status(200).send({ message: "User logged in!" }); // Here we should actually send back the Keycard
//         return;
//       }
//       // If we didn't find the user or the password doesn't match, send back an error message
//       res.status(400).send({ message: "Login failed" });
//     } catch (error) {
//       // If we get an error, send back HTTP 500 (Server Error)
//       res.status(500).send({ message: "Something went wrong!" });
//     }
//   } else {
//     // If we are missing fields, send back a HTTP 400
//     res
//       .status(400)
//       .send({ message: "'username' and 'password' are required!" });
//   }
// });

////////////////////////////////////////
// ⚡️ JSON Web Token for LOGIN

// const token = toToken({ userId: userToLogin.id });
// res.status(200).send({ token: token });

////////////////////////////////////////
// 🔑 Check Token Header for /users endpoint

// app.get("/users", async (req, res) => {
//   // Extract the 'authorization' header from the request. This typically contains the JWT token.
//   const headers = req.headers;

//   // Check if the 'authorization' header is present and formatted as 'Bearer <token>'.
//   if (
//     headers["authorization"] && // Verify the presence of the 'authorization' header.
//     headers["authorization"].startsWith("Bearer ") && // Ensure it starts with 'Bearer '.
//     headers["authorization"].split(" ")[1] // Check if the token part exists after 'Bearer '.
//   ) {
//     // Extract the token from the 'authorization' header.
//     const token = headers["authorization"].split(" ")[1];
//     try {
//       // Attempt to verify and decode the token using the secret key.
//       const data = toData(token);
//       // Token verification successful; proceed with user retrieval.
//     } catch (e) {
//       // Token verification failed; respond with an unauthorized error message.
//       res.status(401).send({ message: "Invalid Token" });
//       return;
//     }
//   } else {
//     // Authorization header is missing or improperly formatted; respond accordingly.
//     res.status(401).send({ message: "Token missing or invalid" });
//     return;
//   }

//   // Assuming verification was successful, retrieve all users from the database.
//   // Select only specific fields (id, username, age) to send in the response.
//   const allUsers = await prisma.user.findMany({
//     select: {
//       id: true,
//       username: true,
//       age: true
//     }
//   });

//   // Send the list of users as the response.
//   res.send(allUsers);
// });
