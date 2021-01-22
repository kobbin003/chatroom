const express = require("express");
const path = require("path");
const http = require("http");
const socket = require("socket.io");
const app = express();
/** webpack */
// const webpack = require("webpack");
// const webpackDevMiddleware = require("webpack-dev-middleware");
// const config = require("./webpack.config");
// const compiler = webpack(config);
/** creating server by using http */
const server = http.createServer(app);
const folderToServe = path.join(__dirname, "dist");
const port = process.env.PORT || 3000;
const io = socket(server);
io.on("connection", (socket) => {
  // console.log("new ws connection");
  // socket.on("chat message", (msg) => {
  //   console.log("message:" + msg);
  // });
  socket.emit("message", "Welcome to chatcord!");
  /** Broadcast when a user connects */
  socket.broadcast.emit("message", "A user has joined the chat");
  /** Runs when client disconnects */
  socket.on("disconnect", (msg) => {
    io.emit("message", "A user has left the chat");
  });
  /** emit the message received */
  socket.on("chatmessage", (message) => {
    io.emit("chatmessage", `${message}`);
  });
});
// app.get("/", (req, res) => {
//   res.sendFile(path.join(folderToServe, "_html_css"));
//   console.log("file is served");
// });
/** serving static file instead of routing */
app.use(express.static(folderToServe));
/** serving the file produced from webpack */
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );
// app.use(require("webpack-hot-middleware")(compiler));
server.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`app is listening on port:${port}!`);
  }
});
