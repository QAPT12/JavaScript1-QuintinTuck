// Paul - if anything here is messy and looks weird i apologize. My code gets much messier on exams when i am on a time crunch.
// a lot of the time i just do the first solution that comes to my head and build upon it, even if it isn't the most elegant or efficient.

$(document).ready(async() => {
    await populateUserList(); 
  
});
  
// Function to get all users from the fetch.
async function getAllUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
    return users;
}

// Function to populate the select box with the users from the getAllUsers fetch.
async function populateUserList() {
  const users = await getAllUsers();
  const list = document.getElementById("users");

  if (users.length > 0) {
    users.forEach(user => {
      const newUser = document.createElement("li");
      newUser.value = user.id;
      newUser.innerHTML = user.name; 
      newUser.dataset.flagged = 0;
      newUser.addEventListener('mouseover', userHover);
      newUser.addEventListener('mouseout', userLeave);
      newUser.addEventListener('click', userRightClick);
      list.appendChild(newUser);
    });
  } else {
    let newListItem = document.createElement("li");
    newListItem.innerHTML = "No Users Found";
    list.append(newListItem);
  }
}

const userHover = evt => {
    let target = evt.target;
    target.style.background = "lightblue";
    fillUserSection(target.value);
}

const userLeave = evt => {
    let target = evt.target;
    target.style.background = "white";
}

async function userRightClick(evt) {
    evt.preventDefault();
    let target = evt.target;
    console.log(target.dataset.flagged);

    if(target.dataset.flagged == 0){
        target.dataset.flagged = 1;
        target.style.background = "red";
        
        let userLists = document.querySelectorAll("li");
        console.log(userLists);
        userLists.forEach(user => {
            user.removeEventListener('mouseover', userHover);
            user.removeEventListener('mouseout', userLeave);
            user.removeEventListener('click', userRightClick);
        });
        target.addEventListener('click', userRightClick);

        const userAlbumButton = document.createElement("button");
        userAlbumButton.id = "userAlbumsButton";

        const userAlbums = await getAlbumsForUser(target.value);
    
        userAlbumButton.innerHTML = "View Albums (" + userAlbums.length + ")";
    
        userAlbumButton.addEventListener('click', function(){
            let alertText = "";
        
            userAlbums.forEach(album => {
                alertText += "- " + album.title + "\n";
            });
            alert(alertText);
        });

        document.getElementById("nameDiv").appendChild(userAlbumButton);
    } else if(target.dataset.flagged == 1){
        target.dataset.flagged = 0;
        target.style.background = "white";
        
        let userLists = document.querySelectorAll("li");
        console.log(userLists);
        userLists.forEach(user => {
            user.addEventListener('mouseover', userHover);
            user.addEventListener('mouseout', userLeave);
            user.addEventListener('click', userRightClick);
        });

        document.getElementById("nameDiv").removeChild(document.getElementById("userAlbumsButton"));
    }

}

// This is long. could maybe be shorter but this is what i thought of in the moment.
async function fillUserSection(id) {
    let link = "https://jsonplaceholder.typicode.com";
    link += "/users?id=" + id;

    const response = await fetch(link);
    const userInfo = await response.json();

    const userSection = document.getElementById("userInformation");

    userSection.innerHTML = "";

    // users name
    const nameDiv = document.createElement("div");
    nameDiv.id = "nameDiv";
    const nameLabel = document.createElement("label");
    nameLabel.innerHTML = "Name: ";
    const userName = document.createElement("p");
    userName.innerHTML = userInfo[0].name;
    userSection.appendChild(nameDiv);
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(userName);

    // users username
    const userNameDiv = document.createElement("div");
    userNameDiv.id = "userNameDiv"
    const userNameLabel = document.createElement("label");
    userNameLabel.innerHTML = "UserName: ";
    const userUserName = document.createElement("p");
    userUserName.innerHTML = userInfo[0].username;
    userSection.appendChild(userNameDiv);
    userNameDiv.appendChild(userNameLabel);
    userNameDiv.appendChild(userUserName);

    // user email
    const emailLabel = document.createElement("label");
    emailLabel.innerHTML = "Email: ";
    const userEmail = document.createElement("p");
    userEmail.innerHTML = userInfo[0].email;
    userSection.appendChild(emailLabel);
    userSection.appendChild(userEmail);
    userSection.appendChild(document.createElement("br"));

    // spacer
    const spacer = document.createElement("div");
    spacer.classList.add("spacer");
    userSection.appendChild(spacer);

    //user address
    const addressLabel = document.createElement("label");
    addressLabel.innerHTML = "Address: ";
    userSection.appendChild(addressLabel);
    userSection.appendChild(document.createElement("br"));
    // street
    const streetLabel = document.createElement("label");
    streetLabel.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Street: ";
    const userStreet = document.createElement("p");
    userStreet.innerHTML = userInfo[0].address.street;
    userSection.appendChild(streetLabel);
    userSection.appendChild(userStreet);
    userSection.appendChild(document.createElement("br"));
    // suite
    const suiteLabel = document.createElement("label");
    suiteLabel.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Suite: ";
    const userSuite = document.createElement("p");
    userSuite.innerHTML = userInfo[0].address.suite;
    userSection.appendChild(suiteLabel);
    userSection.appendChild(userSuite);
    userSection.appendChild(document.createElement("br"));
    // city
    const cityLabel = document.createElement("label");
    cityLabel.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;City: ";
    const userCity = document.createElement("p");
    userCity.innerHTML = userInfo[0].address.city;
    userSection.appendChild(cityLabel);
    userSection.appendChild(userCity);
    userSection.appendChild(document.createElement("br"));
    // zip code
    const zipLabel = document.createElement("label");
    zipLabel.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Zip Code: ";
    const userZip = document.createElement("p");
    userZip.innerHTML = userInfo[0].address.zipcode;
    userSection.appendChild(zipLabel);
    userSection.appendChild(userZip);
    userSection.appendChild(document.createElement("br"));

    // another spacer
    const secondSpacer = document.createElement("div");
    secondSpacer.classList.add("spacer");
    userSection.appendChild(secondSpacer);

    // user phone
    const phoneLabel = document.createElement("label");
    phoneLabel.innerHTML = "Phone: ";
    const userPhone = document.createElement("p");
    userPhone.innerHTML = userInfo[0].phone;
    userSection.appendChild(phoneLabel);
    userSection.appendChild(userPhone);
    userSection.appendChild(document.createElement("br"));

    // user website
    const websiteLabel = document.createElement("label");
    websiteLabel.innerHTML = "Website: ";
    const userWebsite = document.createElement("p");
    userWebsite.innerHTML = userInfo[0].website;
    userSection.appendChild(websiteLabel);
    userSection.appendChild(userWebsite);
    userSection.appendChild(document.createElement("br"));
}

async function getAlbumsForUser(id) {
    let link = "https://jsonplaceholder.typicode.com";
    link += "/albums?userId=" + id;

    const response = await fetch(link);
    const albums = await response.json();

    if(albums.length > 0){
        return(albums);
    } else {
        console.log("no albums found for this user"); 
    }  

}