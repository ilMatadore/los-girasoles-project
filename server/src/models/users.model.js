require('dotenv').config();

const knex = require("knex");

const db = knex({
    client: "pg",
    connection: 
    {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      uri: process.env.POSTGRES_URI,

    },
})

module.exports = db