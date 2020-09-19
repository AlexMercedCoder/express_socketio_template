const express = require('express')
const {app, http, io} = require("./server")

//////////////////////////////////
// Express Middleware
//////////////////////////////////

//CORS
const cors = require("cors");
const corsOptions = require("../configs/cors.js");

//OTHER IMPORTS
const session = require("express-session");
const morgan = require("morgan");

////////////
//MIDDLEWARE
////////////
process.env.NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("tiny")); //logging

module.exports = {
    app,
    http,
    io
}