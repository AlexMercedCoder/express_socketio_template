///////////////////////////
// Environmental Variables
///////////////////////////
require("./envfunc")();
const {
  PORT = 3000,
  SECRET = "secret",
  NODE_ENV = "development",
} = process.env;
const { log } = require("mercedlogger");
const { app, http, io } = require("./routers/socket");

//LISTENER

http.listen(PORT, () => {
  log.green("Server Start", `Your are listening on port ${PORT}`);
});
