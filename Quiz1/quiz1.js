const $ = selector => document.querySelector(selector);

// Let's create a game called Sea Radar (similar to the game
// known as battleships). The objective is to discover the
// location of 3 lost ships on an ocean in as few clicks as possible.

//  The three ships are different sizes:
//  Tugboat is 2 locations on the ocean
//  Trawler is 3 locations on the ocean
//  Cruise Ship is 4 locations on the ocean

// I might suggest the below objects to represent the vessels. 
// These objects contain attributes for the ship type, ship value,
// and the number of hidden spaces it occupies (this should decrease
// as the vessel is discovered). This is not mandatory, just a suggestion.

const tug = {stype: "Tug",     sval: 2, hidden:2};
const trw = {stype: "Trawler", sval: 3, hidden:3};
const cru = {stype: "Cruise Ship", sval: 4, hidden:4};
var endGame = 0;
var clickCount = 0;
const clicks = document.createElement("p")
const display = document.getElementById("ocean");
clicks.id = 'clickNum';
document.getElementById("clickcount").appendChild(clicks);

// Below is the ocean with the vessels in place: 2 for Tugboat,
// 3 for Trawler, and 4 for Cruise Ship. You can reposition
// them if you like.

const ocean = [
    [0,3,0,0,4],
    [0,3,0,0,4],
    [0,3,0,0,4],
    [0,0,0,0,4],
    [0,2,2,0,0]
];

// Feature 1: Display a count of the number of buttons that have been clicked.
// This should be updated every click of a "water" button.

// Feature 2: Display the ocean.
// There is an empty "ocean" div in the html where you are to
// render an ocean. Using Javascript, create a button element for
// every position in the ocean - it's value should be as per the
// ocean array, and it's text should initially show water '~'.

// ~~~~~ 
// ~~~~~ 
// ~~~~~ 
// ~~~~~  
// ~~~~~ 

// When the user clicks on any location, the button text should
// be replaced by new text representing a radar hit ('*') or a miss ('O'),
// and the click count should be updated. 

// ~~~~~         ~~OO~
// ~~~~~         ~*O~~
// ~~~~~   --->  ~*~~~
// ~~~~~         ~O~O~
// ~~~~~         ~~~~~

// Feature 3: Create an event handling function that
// will perform these actions.

// Feature 4: Register the event handler against the "click" event for
// these buttons as you create them.

// Feature 5: Each time a vessel is completely discovered, put up a message:
// "My [vessel type] has been discovered!"

// useful definitions for the different button text.
const water = "~";
const hit   = "*";
const miss  = "O";

// Put event handler here. I called mine "tryHere"

    // This is where you should update the click count.

    // evt.target is the element that caused the event.
    // You will have to change its textContent depending on its value.

    // This is also where you should consider checking if the entire 
    // vessel has been found, and if so, say so.
const tryHere = evt => {

    if(endGame == 0 ){

    let target = evt.target;

    clickCount += 1;

    document.getElementById("clickNum").innerText = clickCount;

    if (target.value =='0'){
        target.innerHTML = miss; 
    } else if (target.value == '2'){
        target.innerHTML = hit;
        tug.hidden -= 1;
        if(tug.hidden == 0){
            let p = document.createElement("p");
            p.style.color='red';
            p.innerHTML="You Found the Tug Boat!";
            display.appendChild(p);
        }
    } else if (target.value == '3'){
        target.innerHTML = hit;
        trw.hidden -= 1;
        if(trw.hidden == 0){
            let p = document.createElement("p");
            p.style.color='red';
            p.innerHTML="You Found the Trawler!";
            display.appendChild(p);
        }
    } else if (target.value == '4'){
        target.innerHTML = hit;
        cru.hidden -= 1;
        if(cru.hidden == 0){
            let p = document.createElement("p");
            p.style.color='red';
            p.innerHTML="You Found the Cruise Ship!";
            display.appendChild(p);
        }
    }

    if(tug.hidden == 0 && trw.hidden == 0 && cru.hidden == 0){
        
        let p = document.createElement("p");
        p.style.color='red';
        p.innerHTML="You Found All the Ships!";
        display.appendChild(p);

        
        
        let refreshButton = document.createElement("button");
        refreshButton.innerHTML="Try Again!";

        refreshButton.addEventListener("click", function() {
            window.location.reload();
        })
        
        document.getElementById("clickcount").appendChild(refreshButton);
        endGame = 1;
        
    }
    }
    
}


document.addEventListener("DOMContentLoaded", () => {

    // This is where you generate and configure all the buttons

    // for the ocean. Use createElement and appendChild methods

    // 1. get a reference to the ocean area of the page.

    // 2. cycle through each ocean position

    // 3. For each position create a button element, setting its text to water
    // and its value to its data item in the ocean array.
    // Link it to the event handler on a "click".
    // Append it as a child to the ocean element.

    
    

    for(i=0; i < ocean.length; i++){
        
        for(j=0; j<ocean[i].length; j++){
            var newButton = document.createElement("button");
            if(ocean[i][j] == 0){
                newButton.value='0';
            } else if(ocean[i][j] == 2){
                newButton.value='2';
            } else if(ocean[i][j] == 3){
                newButton.value='3';
            } else if(ocean[i][j] == 4){
                newButton.value='4';
            }
            newButton.innerHTML=water;
            newButton.addEventListener("click", tryHere);
            display.appendChild(newButton);
        }

        display.appendChild(document.createElement("br"));
    }
});