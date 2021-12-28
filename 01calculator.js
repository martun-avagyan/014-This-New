"use strict";
class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }
  add(first, second) {
    return first + second;
  }
  subtract(first, second) {
    return first - second;
  }
  multiply(first, second) {
    return first * second;
  }
  divide(first, second) {
    return first / second;
  }
}

const addition = new Calculator();
const subtraction = new Calculator();
const multiplication = new Calculator();
const division = new Calculator();

console.log(addition.add(100, 20));
console.log(subtraction.subtract(100, 20));
console.log(multiplication.multiply(100, 20));
console.log(division.divide(100, 20));
