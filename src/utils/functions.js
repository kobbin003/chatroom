let usersList = [];
function joinRoom(id, username, room) {
  usersList.push({ id, username, room });
  return { id, username, room };
}
function findUser(id) {
  return usersList.find((user) => user.id === id);
}
function deleteUserFromList(id) {
  //   usersList = usersList.filter((user) => user.id !== id);
  console.log("from-inside", usersList);
  // return usersList;
  const index = usersList.findIndex((user) => user.id === id);
  if (index > -1) {
    usersList.splice(index, 1);
  }
}
module.exports = { joinRoom, findUser, deleteUserFromList, usersList };

// ?????????????????????///
// 1. why usersList.filter not working??
// 2. location.search does not change when logout and login back with different username?? SOL: Do not use qs, just use session
