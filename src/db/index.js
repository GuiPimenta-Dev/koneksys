const { Client } = require("pg");
const client = new Client({
  // user: process.env.USER,
  // host: process.env.HOST,
  // database: process.env.DATABASE,
  // password: process.env.PASSWORD,
  // port: process.env.PORT,
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "gui",
  port: 5432,
});
client.connect();
module.exports = client;
