//INITIALIZING THE SERVER OBJECTS

///////////////////////////
// Environmental Variables
///////////////////////////
if (process.env.NODE_ENV === "development") {
  // env.yaml only used in development, npm run dev
  // will error if file does not exist
  const yenv = require("yenv");
  const env = yenv("env.yaml", { env: process.env.NODE_ENV });
  process.env = { ...process.env, ...env };
}
const {
  PORT = 3000,
  SECRET = "secret",
  NODE_ENV = "development",
} = process.env;
console.log(PORT);

//Bringing in Express and Socket.io
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

module.exports = {app, http, io}



