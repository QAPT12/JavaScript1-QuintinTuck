 /*
beginner: 81 tiles (9 * 9), 10 mines.
intermediate: 256 tiles (16 * 16), 40 mines.
expert: 480 tiles (20 * 24), 99 mines.
*/
class Game{

    constructor(difficulty){

        this.difficulty = difficulty;
        this.board = [];

        if(this.difficulty == "beginner"){
            this.width = 9;
            this.height = 9;
            this.mines = 10;
        }
        if(this.difficulty == "intermediate"){
            this.width = 16;
            this.height = 16;
            this.mines = 40;
        }
        if(this.difficulty == "expert"){
            this.width = 20;
            this.height = 24;
            this.mines = 99;
        }

        for(let i = 0; i < this.height; i++){
            this.board.push([]);
        }

        this.fillGameBoard();

    }

    /**
     * fillGameBoard. Fills row in the board with zeros based on how wide the board should be.
     * for now just fills in with zeros
     * 
     * TODO: Randomly put mines in once the board is constructed. 
     */
    fillGameBoard(){

        for(let i = 0; i < this.board.length; i++){
            for(let j = 0; j < this.width; j++){
                this.board[i].push(j);
            }
        }

    }

    constructButtons(screen){

        console.log("constructing buttons...");

        for(let i = 0; i < this.height; i++){
            console.log("entering first loop");
            for(let j = 0; j < this.board.length; j++){
                console.log("entering second loop");
                const newButton = document.createElement("button");
                newButton.innerHTML = 'b';
                screen.appendChild(newButton); 
            }
            screen.appendChild(document.createElement("br"));
        }

    }

    /**
     * logBoard. Function for logging board to console for testing to make sure the board is being built correctly.
     * 
     * TODO: Delete this later.
     */
    logBoard(){

        console.log(this.board);

    }

}