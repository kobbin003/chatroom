import "../css/style.css";
console.log("index dot js");

/** login form */
const loginForm = document.querySelector(".loginform");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted");
  const username = e.target.elements.username.value;
  const roomname = e.target.elements.room.value;
  /** session-storage */
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("room", roomname);
  // localStorage.setItem("roomOne", username);
  // const putUsername = [username];
  /** local-storage: storing users room wise */
  // localStorage.setItem("roomOne", JSON.stringify([username]));
  let users, itemToStore;
  // switch (room) {
  //   case "One":
  //     /** if empty */
  //     if (!localStorage.getItem("roomOne")) {
  //       localStorage.setItem("roomOne", JSON.stringify([]));
  //     }
  //     users = JSON.parse(localStorage.getItem("roomOne"));
  //     itemToStore = [...users, username];
  //     localStorage.setItem("roomOne", JSON.stringify(itemToStore));
  //     break;
  //   case "Two":
  //     /** if empty */
  //     if (!localStorage.getItem("roomTwo")) {
  //       localStorage.setItem("roomTwo", JSON.stringify([]));
  //     }
  //     users = JSON.parse(localStorage.getItem("roomTwo"));
  //     itemToStore = [...users, username];
  //     localStorage.setItem("roomTwo", JSON.stringify(itemToStore));
  //     break;
  //   case "Three":
  //     /** if empty */
  //     if (!localStorage.getItem("roomThree")) {
  //       localStorage.setItem("roomThree", JSON.stringify([]));
  //     }
  //     users = JSON.parse(localStorage.getItem("roomThree"));
  //     itemToStore = [...users, username];
  //     localStorage.setItem("roomThree", JSON.stringify(itemToStore));
  //     break;
  //   default:
  //     console.log("room not in option");
  // }
});

/** onCLick go to hatroom */
const joinButton = document.querySelector(".join-chat");
joinButton.addEventListener("click", () => {
  // if (localStorage.getItem("username"))
  //   window.location.assign(
  //     `./chatroom.html?username=${localStorage.getItem(
  //       "username"
  //     )}&room=${localStorage.getItem("room")}`
  //   );
  window.location.assign(`./chatroom.html`);
});
