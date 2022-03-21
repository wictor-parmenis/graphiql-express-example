// Update with your config settings.
const { password } = require("../.env");
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "postgres",
      user: "postgres",
      password: password,
    },
  },
};
