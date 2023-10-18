"use strict";

const $ = selector => document.querySelector(selector);

const calculateFV = (investAmount, interestRate, years) => {
    let futureValue = investAmount * (1 + ((interestRate/100) * years));
    return futureValue
}

const processEntries = () => {
    const userInvest = $("#investment").value;
    const userInterest = $("#rate").value;
    const userYears = $("#years").value;
    return [userInvest, userInterest, userYears];
}

const calculateFVButtonHandle = () =>{
    let valueList = processEntries();
    let invest = valueList[0];
    let interest = valueList[1];
    let years = valueList[2];
    let isValid = true;

    if(isNaN(invest) || invest > 100000 || invest <= 0){
        $("#investSpan").innerHTML = 'must be positive number <= 100000';
        isValid = false;
    }
    if(isNaN(interest) || interest > 15 || interest <= 0){
        $("#rateSpan").innerHTML = 'must be positive number <= 15';
        isValid = false;
    }
    if(isNaN(years) || years > 50 || years <= 0){
        $("#yearSpan").innerHTML = 'must be positive number <= 50';
        isValid = false;
    }

    if(isValid == true){
        $("#investSpan").innerHTML = '';
        $("#rateSpan").innerHTML = '';
        $("#yearSpan").innerHTML = '';
        let futureValue = calculateFV(invest, interest, years).toFixed(2);
        $("#future_value").value = futureValue;
    }
}

document.addEventListener("DOMContentLoaded", () =>{

    $("#investment").focus();

    $("#calculate").addEventListener('click', calculateFVButtonHandle);

})