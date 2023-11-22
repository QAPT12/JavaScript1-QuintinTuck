$(document).ready(() => {

  getAlbums(1);

});

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
}

async function getAlbums(UserID) {
  let link = "https://jsonplaceholder.typicode.com";
  link += "/posts?userId=" + UserID;
  const response = await fetch(link);
  const posts = await response.json();
  console.log(posts);
}
