const $ = selector => document.querySelector(selector);

const tryHere = evt => {
    // evt.target is the element that caused the event.
    const value = evt.target.value; 
    if(value == 1){
        var setColour = 'var(--red)';
    } else if(value == 2){ 
        var setColour = 'var(--green)';
    } else if(value == 3){
        var setColour = 'var(--blue)';
    } else if(value == 4){     
        var setColour = 'var(--yellow)';
    } else if(value == 5){
        var setColour = 'var(--orange)';
    } else if(value == 6){
        var setColour = 'var(--violet)';
    } else if(value == 7){
        var setColour = 'var(--black)';
    }
    
    evt.target.style.backgroundColor  = setColour;

    var newValue = value + 1;
    evt.target.value = newValue;
    
    
}

document.addEventListener("DOMContentLoaded", () => {

    const root = $("#place");

    for (i = 0; i <= 20; i++){
        for (j = 0; j <= 20; j++){
            const node = document.createElement("button");
            node.textContent = '#';
            node.value = '1';
            node.addEventListener("mouseenter", tryHere);
            root.appendChild(node);
        }
        root.appendChild(document.createElement("br"));
    }

});