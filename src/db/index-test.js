const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "test",
  port: 5433,
});
client.connect();

module.exports = client;
