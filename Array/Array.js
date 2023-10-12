const $ = selector => document.querySelector(selector);

const action1Function = evt => {
    // some functionality. JavaScript code goes here.
    const monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthNames=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'december']
    for(i=0; i <= monthArray.length - 1; i++) {
        alert(`The number of days in ${monthNames[i]} is ${monthArray[i]}`);
    }
    // end of Exercise code.
};

document.addEventListener("DOMContentLoaded", () => {
    // hook up click event(s)
    $("#action1").addEventListener("click", action1Function);
});