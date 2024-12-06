const express = require("express");

const { ping } = require("./controller/ping");

const app = express();


//middlewares
app.use(express.json({ type: "application/json" }));

//server website
//create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.static function, specify a mount path for the directory
app.use('/virtual/path', express.static('/public'))

//routes
app.get("/ping", ping);

module.exports = {
  app
};