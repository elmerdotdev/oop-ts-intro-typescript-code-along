"use strict";
console.log("Hello world!");
function add(a, b) {
    return a + b;
}
console.log(add(10, 5));
function sayGreeting(message) {
    return message;
}
console.log(sayGreeting("Good morning Vancouver!"));
function isRaining(status, day) {
    if (!status) {
        return "It's not raining";
    }
    return "It's raining";
}
console.log(isRaining(false, "Monday"));
var multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(10, 4));
var firstname = "John";
var lastname = "Smith";
var isMarried = true;
var age = 50;
var currYear = new Date().getFullYear();
var birthYear = currYear - age;
function introduce(fname, lname, age) {
    return "My name is ".concat(fname, " ").concat(lname, ". I am ").concat(age, " years old.");
}
console.log(introduce("John", "Smith", 40));
var city = "Vancouver";
var country = "Canada";
var isSnowing = false;
var population = 190288012;
var displayAddress = function (city, country, isSnowing, population) {
    return "I am here in ".concat(city, ", ").concat(country, ". It is ").concat(!isSnowing ? 'not ' : '', "snowing. The current population is ").concat(population, ".");
};
console.log(displayAddress(city, country, isSnowing, population));
var studentName = "Jane"; // string
studentName = "Joe"; // Valid
function divide(num1, num2, message) {
    var res = num2 / num1;
    return "The final result is: ".concat(res, ". ").concat(message, ".");
}
console.log(divide(50, 10, "Have a good day!"));
var employeeName = "Joe Moe";
employeeName = "Jane";
var salary = 80000;
var isLate = false;
var productName = "Apple";
var productPrice = 400; // 400 is a number
var isRotten = false; // boolean
function displayProduct(name, price, isRotten) {
    return "".concat(name, " costs ").concat(price, " and is ").concat(isRotten ? 'rotten' : 'fresh', ".");
}
console.log(displayProduct("Banana", 200, true));
var products = []; // array of strings
function addProduct(name) {
    products.push(name); // no return
}
function displayProducts() {
    return products; // return array of strings
}
addProduct("Apple");
addProduct("Orange");
addProduct("Mango");
addProduct("Banana");
console.log(displayProducts());
var numbers = [5, 2, 1];
