const {app, http, io} = require("./routes")


////////////////////////
//SOCKET.io
////////////////////////

io.on("connection", (socket) => {
    console.log("a user connected");
  
    //ON DICONNECT
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  
    //ON CHAT
    socket.on("chat", (value) => {
      console.log(value);
      io.emit("response", "got it");
    });
  });

  module.exports = {
      app,
      http,
      io
  }