"use strict";
// Numbers
function doubleNumber(num) {
    return num * 2;
}
console.log(doubleNumber(10)); // 20
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(5)); // 25
// Boolean
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(10));
function isAdult(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isAdult(20));
// String
function reverseString(str) {
    var strArr = str.split(''); // break string into an array
    var reversedArr = strArr.reverse(); // reverse array order
    var reversedStr = reversedArr.join(''); // join array into a string
    return reversedStr;
}
console.log(reverseString("hello"));
function capitalizeString(str) {
    var firstLetter = str.charAt(0).toUpperCase(); // get first letter then uppercase
    var remainingLetters = str.slice(1).toLowerCase(); // get all letters after first letter and make it lowercase
    var capitalized = firstLetter + remainingLetters; // combine all the letters
    return capitalized;
}
console.log(capitalizeString("woRLD"));
