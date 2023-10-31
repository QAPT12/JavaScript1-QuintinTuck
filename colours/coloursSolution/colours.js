const $ = selector => document.querySelector(selector);

const tryHere = evt => {
    // evt.target is the element that caused the event.
    const value = evt.target.value; 
    console.log(value)
    if(value == 1){
        var setColor = 'var(--red)';
        evt.target.value = 2;
    } else if(value == 2){ 
        var setColor = 'var(--green)';
        evt.target.value = 3;
    } else if(value == 3){
        var setColor = 'var(--blue)';
        evt.target.value = 4;
    } else if(value == 4){     
        var setColor = 'var(--yellow)';
        evt.target.value = 5;
    } else if(value == 5){
        var setColor = 'var(--orange)';
        evt.target.value = 6;
    } else if(value == 6){
        var setColor = 'var(--violet)';
        evt.target.value = 7;
    } else if(value == 7){
        var setColor = 'var(--black)';
        evt.target.value = 8;
    }
    
    evt.target.style.backgroundColor  = setColor;
}

const reset = evt => {
    evt.target.value = 1;
    evt.target.style.backgroundColor = 'var(--white)';
}

document.addEventListener("DOMContentLoaded", () => {

    const root = $("#place");

    for (i = 0; i <= 20; i++){
        for (j = 0; j <= 20; j++){
            const node = document.createElement("button");
            node.textContent = '#';
            node.value = 1;
            node.style.backgroundColor = 'var(--white)';
            node.addEventListener("mouseenter", tryHere);
            node.addEventListener("click", reset);
            root.appendChild(node);
        }
        root.appendChild(document.createElement("br"));
    }

    root.addEventListener('mouseenter', function() {
        root.style.backgroundColor = 'var(--gray)';
    })

    root.addEventListener('mouseleave', function() {
        root.style.backgroundColor = 'var(--white)';
    })

});