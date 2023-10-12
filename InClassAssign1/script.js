window.onload = function() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
}

function clickPress(event) {
    if (event.key=="Enter"){
        var input1 = document.getElementById("input1").value.trim();
        var input2 = document.getElementById("input2").value.trim();
        var result = input1.concat(' ', input2);
        
        var resultLength = result.length;

        // alert(resultLength);

        var numWords = result.split(" ").length;

        // alert(numWords);

        var characters = {};
        var max = 0;
        var maxChar = '';
          
        for (let char of result) {
          if (characters[char]) {
            characters[char]++;
          } else {
            characters[char] = 1;
          }
        };
          
        for (let char in characters) {
          if (characters[char] > max) {
            max = characters[char];
            maxChar = char;
          }
        };

        // alert(maxChar);

        if(isNaN(input1) || isNaN(input2)){
            var isNumber = 'not a number';
        } else if(!isNaN(input1) && !isNaN(input2)) {
            let numValue = parseFloat(input1) + parseFloat(input2);
            var isNumber = `inputs are numbers with total ${numValue}`;
        };

        // alert(isNumber);

        var reverseString = result.split("").reverse().join("");

        // alert(reverseString);

        var asciiSum = 0;

        for (i=0; i<result.length; i++){
            asciiSum += result.charCodeAt(i);
        };

        // alert(asciiSum);

        var resultString = `Number of characters present: ${resultLength}. 
        Number of words present: ${numWords}.
        Most frequent character: ${maxChar}.
        Number?: ${isNumber}.
        Reverse: ${reverseString}.
        The ascii sum of all your characters is: ${asciiSum}.`;

        document.getElementById("result").innerText = resultString;
    };
};


document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("submitbutton").addEventListener("click", function (){
        var input1 = document.getElementById("input1").value.trim();
        var input2 = document.getElementById("input2").value.trim();
        var result = input1.concat(' ', input2);
        
        var resultLength = result.length;

        // alert(resultLength);

        var numWords = result.split(" ").length;

        // alert(numWords);

        var characters = {};
        var max = 0;
        var maxChar = '';
          
        for (let char of result) {
          if (characters[char]) {
            characters[char]++;
          } else {
            characters[char] = 1;
          }
        };
          
        for (let char in characters) {
          if (characters[char] > max) {
            max = characters[char];
            maxChar = char;
          }
        };

        // alert(maxChar);

        if(isNaN(input1) || isNaN(input2)){
            var isNumber = 'not a number';
        } else if(!isNaN(input1) && !isNaN(input2)) {
            let numValue = parseFloat(input1) + parseFloat(input2);
            var isNumber = `inputs are numbers with total ${numValue}`;
        };

        // alert(isNumber);

        var reverseString = result.split("").reverse().join("");

        // alert(reverseString);

        var asciiSum = 0;

        for (i=0; i<result.length; i++){
            asciiSum += result.charCodeAt(i);
        };

        // alert(asciiSum);

        var resultString = `Number of characters present: ${resultLength}. 
        Number of words present: ${numWords}.
        Most frequent character: ${maxChar}.
        Number?: ${isNumber}.
        Reverse: ${reverseString}.
        The ascii sum of all your characters is: ${asciiSum}.`;

        document.getElementById("result").innerText = resultString;
          
           
    });

    document.getElementById("reset").addEventListener("click", function() {
        location.reload();
    });

});