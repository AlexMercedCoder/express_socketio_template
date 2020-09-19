const { app, http, io } = require("./routers/socket");
const {PORT} = process.env

//LISTENER

http.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
