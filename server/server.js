//INITIALIZING THE SERVER OBJECTS

///////////////////////////
// Environmental Variables
///////////////////////////
require("../envfunc")();
const {
  PORT = 3000,
  SECRET = "secret",
  NODE_ENV = "development",
} = process.env;

//Bringing in Express and Socket.io
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

module.exports = {app, http, io}



