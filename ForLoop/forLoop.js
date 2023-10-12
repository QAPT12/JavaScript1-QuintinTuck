const $ = selector => document.querySelector(selector);

const action1Function = evt => {
    // some functionality. JavaScript code goes here.
    let possibleNumber = prompt("enter a number");
    if(!isNaN(possibleNumber)){
    alert("prepare for numbers");
    for(i=1; i <= possibleNumber; i++){
        alert(`current number is ${i}`);
    } 
    } else if(possibleNumber == 'banana') {
        alert('i agree with banananomics');
    } else {
        alert('not a number idiot');
    }
    // end of Exercise code.
};

document.addEventListener("DOMContentLoaded", () => {
    // hook up click event(s)
    $("#action1").addEventListener("click", action1Function);
});