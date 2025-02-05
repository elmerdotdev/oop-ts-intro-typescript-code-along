// Numbers

function doubleNumber(num: number): number {
  return num * 2
}

console.log(doubleNumber(10)) // 20

function squareNumber(num: number): number {
  return num * num
}

console.log(squareNumber(5)) // 25


// Boolean

function isEven(num: number): boolean {
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

console.log(isEven(10))

function isAdult(age: number): boolean {
  if (age >= 18) {
    return true
  } else {
    return false
  }
}

console.log(isAdult(20))


// String

function reverseString(str: string): string {
  const strArr = str.split('') // break string into an array
  const reversedArr = strArr.reverse() // reverse array order
  const reversedStr = reversedArr.join('') // join array into a string
  return reversedStr
}

console.log(reverseString("hello"))

function capitalizeString(str: string): string {
  const firstLetter = str.charAt(0).toUpperCase() // get first letter then uppercase
  const remainingLetters = str.slice(1).toLowerCase() // get all letters after first letter and make it lowercase
  const capitalized = firstLetter + remainingLetters // combine all the letters
  return capitalized
}

console.log(capitalizeString("woRLD"))