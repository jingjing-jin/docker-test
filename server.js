const { app } = require("./app");

const port = parseInt(process.env.PORT || "3001");
app.listen(port);