const database = require("../config/database");

module.exports = {
  Query: {
    async getProduct(_, { id }) {
      return await database("product").where({ id }).first();
    },
    async getProducts() {
      return await database("product");
    },
  },
  Mutation: {
    async createProduct(_, { input }) {
      const result = await database("product").insert({
        name: input.name,
        description: input.description,
        price: input.price,
      });

      console.log(JSON.stringify(result), "result");

      return database("product").where({ name: input.name }).first();
    },
  },
};
