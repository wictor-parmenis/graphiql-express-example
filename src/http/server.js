const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const schema = require("../api/schema");
const { PORT } = process.env;
const app = express();

app.use(
  "/api/v1/",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3030, () => console.log(`Server running on port ${PORT || 3030}`));
