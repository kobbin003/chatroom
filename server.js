const express = require("express");
const path = require("path");
const http = require("http");
const socket = require("socket.io");
const formatMessage = require("./src/utils/formatmessage");
const {
  joinRoom,
  findUser,
  deleteUserFromList,
  usersList,
} = require("./src/utils/functions");
const app = express();

/** creating server by using http */
const server = http.createServer(app);
const folderToServe = path.join(__dirname, "dist");
const port = process.env.PORT || 3000;
const io = socket(server);
const botname = "chatboks bot";
io.on("connection", (socket) => {
  // console.log(socket.id);
  /** on joining room */

  socket.on("join-room", ({ username, room }) => {
    const user = joinRoom(socket.id, username, room);
    // console.log("user-list-server", usersList);
    socket.join(user.room);
    socket.emit("message", formatMessage(botname, "Welcome to chatboks!"));

    /** Broadcast when a user connects */
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botname, `${username} has joined the chat`)
      );
    const usersFromTheSameRoom = usersList.filter((user) => user.room === room);
    io.to(room).emit("user-list", usersFromTheSameRoom);
  });

  /** emit the message received */
  socket.on("chatmessage", (message) => {
    const user = message.user;
    const msg = message.msg;
    io.to(message.room).emit("chatmessage", formatMessage(user, msg));
  });

  /** Runs when client disconnects */
  socket.on("disconnect", (msg) => {
    const user = findUser(socket.id);
    // console.log("user", user);
    if (user) {
      /** renew the user-list */
      const usersFromTheSameRoom = usersList.filter(
        (users) => users.room === user.room
      );
      io.to(user.room).emit("user-list", usersFromTheSameRoom);
      io.to(user.room).emit(
        "message",
        formatMessage(botname, `${user.username} has left the chat`)
      );
    }
    /** remove it from the list */
    deleteUserFromList(socket.id);
    console.log("userlist-afterall", usersList);
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
