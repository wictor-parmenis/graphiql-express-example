const resolvers = require("./resolvers");

const { makeExecutableSchema } = require("graphql-tools");
const productAtribs = `
    id: ID
    name: String
    description: String
    price: Float
`;

const typeDefs = `
    type Product {
        ${productAtribs}
    }

    type Query {
        getProduct(id: ID!): Product
        getProducts: [Product]
    }

    input productInput {
        ${productAtribs}	
    }

    type Mutation {
        createProduct(input: productInput): Product
    }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
