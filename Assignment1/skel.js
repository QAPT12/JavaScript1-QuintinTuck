const $ = selector => document.querySelector(selector);

const action2Function = evt => {
    alert("Action 2");
}

const action1Function = evt => {
    alert("Action 1");
}

document.addEventListener("DOMContentLoaded", () => {
    $("#action1").addEventListener("click", action1Function);
});