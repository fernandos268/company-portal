const express = require("express");
const cors = require("cors");
const jwt = require("express-jwt");

const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./data/schema");

require("dotenv").config();

const port = process.env.PORT || 3080;

const path = "/graphql";

const app = express();

// const addUser = async req => {
//   const token = req.headers.authorization;
//   try {
//     const { user } = await jwt.verify(token, process.env.JWT_SECRET);
//     req.user = user;
//   } catch (err) {
//     console.log(err);
//   }
//   req.next();
// };

const chechUser = async (req, res) => {
  const token = req.headers["Authorization"];
  try {
    const { user } = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } catch (err) {
    console.log(err);
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    authUser: req.user
  })
});

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => {
//     // get the user token from the headers
//     const token = req.headers.authorization || "";

//     // try to retrieve a user with the token
//     const user = getUser(token);

//     // optionally block the user
//     // we could also check user roles/permissions here
//     // if (!user) throw new AuthorizationError("you must be logged in");

//     // add the user to the context
//     return { user };
//   }
// });

app.use("*", cors({ origin: "http://localhost:3001" }));

// app.use(path, addUser);

//Mount a jwt or other authentication middleware that is run before the GraphQL execution
app.use(
  path,
  jwt({
    secret: process.env.JWT_SECRET,
    credentialsRequired: false
  })
);

server.applyMiddleware({ app, path });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}${path}`);
});
