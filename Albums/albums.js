$(document).ready(async() => {
  await populateUserSelect(); // Use 'await' to make sure it finishes before moving on
  fillUsersAlbums(); // Fetch albums for the initially selected user

  $("#userSelectList").on("change", fillUsersAlbums);
});

// Function to get all users from the fetch.
async function getAllUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
}

// Function to populate the select box with the users from the getAllUsers fetch.
async function populateUserSelect() {
  const users = await getAllUsers();
  const selectList = $("#userSelectList");

  if (users.length > 0) {
    let first = 1;
    users.forEach(user => {
      var newOption = $("<option></option>");
      if(first == 1){
        newOption.attr("selected", "selected");
        first += 1;
      }
      newOption.val(user.id); // Value of box is user ID
      newOption.text(user.name); // Shows users name as text in each select.
      selectList.append(newOption);
    });
  } else {
    //TODO: Make this display in an alert or error message maybe??
    console.log("no users found"); 
  }
}

// function to fill the list with the albums belonging to the user in the select box.
async function fillUsersAlbums() {
  let userID = $("#userSelectList").val();
  let link = "https://jsonplaceholder.typicode.com";
  link += "/albums?userId=" + userID;

  const response = await fetch(link);
  const albums = await response.json();

  if(albums.length > 0){
  let albumsList = $("#usersAlbums");
  albumsList.empty();
  albums.forEach(album =>{
    var newListItem = $("<li></li>"); 
    newListItem.text(album.title);
    albumsList.append(newListItem);
  })
} else {
  //TODO: Make this display in an alert or error message maybe??
  console.log("no albums found for this user"); 
}

}
