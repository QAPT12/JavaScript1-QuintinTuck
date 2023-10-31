const $ = selector => document.querySelector (selector);

document.addEventListener("DOMContentLoaded", () => {

    // Question 1.
    var q1area = $("#q1area");
    const color = ["red", "orange", "yellow", "green", "blue", "violet"];
    
    let colorCounter = 0;
    color.forEach(() => {
        var newButton = document.createElement("button");
        newButton.innerHTML = color[colorCounter];
        newButton.style.backgroundColor = color[colorCounter];
        q1area.appendChild(newButton);
        colorCounter += 1;
    });

    // Question 2.
    var q2area = $("#q2area");
    const car = [
        {type:"Fiat",       model:"500",    color:"primer"},
        {type:"Volvo",      model:"X90",    color:"primer"},
        {type:"VW",         model:"Jetta",  color:"primer"},
        {type:"Toyota",     model:"Matrix", color:"primer"},
        {type:"Mercedes",   model:"GLA",    color:"primer"},
        {type:"Honda",      model:"Civic",  color:"primer"}
    ];

    let carCounter = 0;
    car.forEach(() => {
        car[carCounter].color = color[carCounter];
        var newSpan = document.createElement("span");
        newSpan.style.color = color[carCounter];
        newSpan.innerHTML = 'car type: ' + car[carCounter].type + ' color: ' + car[carCounter].color + '<br>';
        q2area.appendChild(newSpan);
        carCounter += 1;
    });

    // Question 3. 
    var q3area = $("#q3area");
    var q3buttons = document.getElementsByClassName("q3buttons");

    const colorChangeFunction = evt => {
        for(i=0; i<q3buttons.length; i++){
            q3buttons[i].style.backgroundColor = 'white';
        }
        evt.target.style.backgroundColor = 'lightblue';
    }

    let buttonCount = 0;
    for(i=0; i<3; i++){
        if(buttonCount == 0 && backgroundColor != 'white'){
            var backgroundColor = 'lightblue';
        } else {
            var backgroundColor = 'white';
        }
        var newButton = document.createElement("button");
        newButton.style.backgroundColor = backgroundColor;
        newButton.innerHTML = 'button' + buttonCount;
        newButton.classList.add("q3buttons");
        newButton.addEventListener("click", colorChangeFunction);
        q3area.appendChild(newButton);
        buttonCount += 1;
    }

});