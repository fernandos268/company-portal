// // server.js
// "use strict";

// const express = require("express");
// const bodyParser = require("body-parser");
// const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
// const schema = require("./data/schema");
// const jwt = require("express-jwt");
// require("dotenv").config();

// const PORT = 8000;

// // Create our express app
// const app = express();

// // Graphql endpoint
// app.use(
//   "/api",
//   bodyParser.json(),
//   jwt({
//     secret: process.env.JWT_SECRET,
//     credentialsRequired: false
//   }),
//   graphqlExpress(req => ({
//     schema,
//     context: {
//       authUser: req.user
//     }
//   }))
// );

// // Graphiql for testing the API out
// app.use("/graphiql", graphiqlExpress({ endpointURL: "api" }));

// app.listen(PORT, () => {
//   console.log(`GraphiQL is running on http://localhost:${PORT}/graphiql`);
// });

//------------------------------------------------------------------------
// const express = require("express");
// const cors = require("cors");
// const schema = require("./data/schema");
// const jwt = require("express-jwt");
// const { ApolloServer } = require("apollo-server-express");
// require("dotenv").config();

// const PORT = 3080;
// const app = express();
// const path = "/graphql";

// const server = new ApolloServer({
//   schema: schema,
//   context: ({ req, res }) => ({
//     authUser: req.user
//   }),
//   graphiql: true
// });

// app.use("*", cors({ origin: "http://localhost:3001" }));

// //Mount a jwt or other authentication middleware that is run before the GraphQL execution
// app.use(
//   path,
//   jwt({
//     secret: process.env.JWT_SECRET,
//     credentialsRequired: false
//   })
// );

// server.applyMiddleware({ app, path });

// app.listen(PORT, () => {
//   console.log(`GraphiQL is running on http://localhost:${PORT}/graphiql`);
// });

//------------------------------------------------------------------------
const express = require("express");
const cors = require("cors");
// const typeDefs = require("./data/typeDefs");
// const resolvers = require("./data/resolvers");

const { typeDefs, resolvers } = require("./data/schema");
const jwt = require("express-jwt");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();

const PORT = 3080;
const app = express();
const path = "/graphql";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    authUser: req.user
  })
});

app.use("*", cors({ origin: "http://localhost:3001" }));

//Mount a jwt or other authentication middleware that is run before the GraphQL execution
app.use(
  path,
  jwt({
    secret: process.env.JWT_SECRET,
    credentialsRequired: false
  })
);

server.applyMiddleware({ app, path });

app.listen(PORT, () => {
  console.log(`GraphiQL is running on http://localhost:${PORT}/graphiql`);
});
