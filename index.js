const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config({ quiet: true });
const database = require("./src/config/database");

async function start() {
  await database();

  app.use(express.json());
  app.use(cors());
  app.use("/api", require("./router"));

  app.listen(5000, (err) => {
    if (err) console.log(err);
    console.log("HTTP server is running");
  });
}

start();
