console.log("Hello world!")

function add(a: number, b: number): number {
  return a + b
}

console.log(add(10, 5))

function sayGreeting(message: string): string {
  return message
}

console.log(sayGreeting("Good morning Vancouver!"))


function isRaining(status: boolean, day: string): string {
  if (!status) {
    return "It's not raining"
  }
  return "It's raining"
}

console.log(isRaining(false, "Monday"))


const multiply = (num1: number, num2: number) => {
  return num1 * num2
}

console.log(multiply(10, 4))





let firstname: string = "John"
let lastname: string = "Smith"
let isMarried: boolean = true
let age: number = 50
const currYear: number = new Date().getFullYear()
const birthYear: number = currYear - age


function introduce(fname: string, lname: string, age: number): string {
  return `My name is ${fname} ${lname}. I am ${age} years old.`
}

console.log(introduce("John", "Smith", 40))



let city: string = "Vancouver"
let country: string = "Canada"
let isSnowing: boolean = false
let population: number = 190288012

const displayAddress = (city: string, country: string, isSnowing: boolean, population: number): string => {
  return `I am here in ${city}, ${country}. It is ${!isSnowing ? 'not ' : ''}snowing. The current population is ${population}.`
}

console.log(displayAddress(city, country, isSnowing, population))



let studentName: string = "Jane" // string
studentName = "Joe" // Valid



function divide(num1: number, num2: number, message: string): string {
  const res = num2 / num1
  return `The final result is: ${res}. ${message}.`
}

console.log(divide(50, 10, "Have a good day!"))



let employeeName: string = "Joe Moe";
employeeName = "Jane"
let salary: number = 80000;
let isLate: boolean = false;



let productName: string = "Apple";
let productPrice: number = 400 // 400 is a number
let isRotten: boolean = false // boolean


function displayProduct(name: string, price: number, isRotten: boolean): string {
  return `${name} costs ${price} and is ${isRotten ? 'rotten' : 'fresh'}.`
}

console.log(displayProduct("Banana", 200, true))



const products: string[] = [] // array of strings

function addProduct(name: string): void {
  products.push(name) // no return
}

function displayProducts(): string[] {
  return products // return array of strings
}

addProduct("Apple")
addProduct("Orange")
addProduct("Mango")
addProduct("Banana")
console.log(displayProducts())


const numbers: number[] = [5, 2, 1]
