import "../css/style.css";
/** not using qs */
// var qs = require("qs");
// const { username, room } = qs.parse(location.search, {
//   ignoreQueryPrefix: true,
// });
// console.log(location.search);
// console.log(window.location);
const socket = io();
const username = sessionStorage.getItem("username");
const room = sessionStorage.getItem("room");
console.log({ username, room });
socket.on("message", (message) => console.log(message));

/** on joining room */
socket.emit("join-room", { username, room });

/** chowing usersList */
socket.on("user-list", (message) => {
  showUserList(message);
});
/** DOM's */
let messageContainer = document.getElementById("chats");

/** On window load */
window.addEventListener("load", () => {
  /** get sessionStorage */
  const username = sessionStorage.getItem("username");
  const room = sessionStorage.getItem("room");
  /** set room name */
  const room_name = document.getElementById("room-name");
  room_name.innerHTML = `<p>${room}</p>`;
});

/** Message Submit */
let form = document.querySelector(".chat-message");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  /** get message text */
  const msg = e.target.elements.messageSent.value;

  /** emit the message, along with the sender's name, to server */
  socket.emit("chatmessage", {
    msg,
    user: sessionStorage.getItem("username"),
    room: sessionStorage.getItem("room"),
  });

  /** clear the input */
  e.target.elements.messageSent.value = "";
  e.target.elements.messageSent.focus;
});
/** show messages by bot on the DOM */
socket.on("message", (message) => {
  outputMessage(message);
  /** scroll down */
  messageContainer.scrollTop = messageContainer.scrollHeight;
});

/** show chatmessages on DOM */
socket.on("chatmessage", (message) => {
  outputMessage(message);

  /** scroll down */
  //scrollTop = how much scrolled.
  // scrollHeight = how much hidden.
  messageContainer.scrollTop = messageContainer.scrollHeight;
});
/** show users on the board ??????? */
socket.on("user-name", (name) => {
  console.log("user", name);
  const userlist = document.querySelector(".user-list");
  name.map((item) => (userlist.innerHTML += `<li>${name}</li>`));
});

/** onCLick go to chatroom */
const leaveButton = document.querySelector(".leave-button");
leaveButton.addEventListener("click", () => {
  window.location.assign("./");
  sessionStorage.setItem("username", "");
  sessionStorage.setItem("room", "");
});
/** output message to dom */
function outputMessage(message) {
  const messagebox = document.getElementById("chats");
  messagebox.innerHTML += `<div class="chat-board" id="chat-board">
    <div class="chat-board-info">
      <p><b>${message.username}</b></p>
      <p><b>${message.time}</b></p>
    </div>
    <div class="chat-board-text">
      <div id="chatmessagebox"><p>${message.text}</p></div>
    </div>
  </div>`;
}

function showUserList(lists) {
  const userList = document.querySelector(".user-list");
  /** empty list before adding the list */
  userList.innerHTML = "";
  lists.forEach((list) => (userList.innerHTML += `<li>${list.username}</li>`));
}
