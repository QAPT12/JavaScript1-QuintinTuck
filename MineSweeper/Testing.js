document.addEventListener("DOMContentLoaded", function(){

    const game = new Game("expert");

    game.logBoard();

    const screenElement = document.getElementById("placeholder");
    if (screenElement) {
        game.constructButtons(screenElement);
    } else {
        console.error("Screen element not found.");
    }

});