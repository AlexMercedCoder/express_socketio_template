///////////////
//Routes and Routers
//////////////
const { app, http, io } = require("../server/middleware");

//AUTH
const jwt = require("jsonwebtoken");
const { auth } = require("../configs/auth.js");

app.get("/", (req, res) => {
  res.json({ hello: "Hello World!" });
});

//These routes are to generate a test JWT and test out your auth function from auth.js
const {SECRET} = process.env

app.get("/testauth", auth(SECRET), (req, res) => {
  res.json(req.payload);
});

app.get("/testjwt", (req, res) => {
  const token = jwt.sign({ hello: "world" }, SECRET);
  res.json({ token });
});

module.exports = { http, app, io };

