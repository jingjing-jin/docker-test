const express = require("express");

const { ping } = require("./controller/ping");

const app = express();


//middlewares
app.use(express.json({ type: "application/json" }));

//routes
app.get("/ping", ping);

module.exports = {
  app
};