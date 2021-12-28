"use strict";

class PersonConstructor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  poop() {
    this.stomach = [];
  }
  eat(someFood) {
    if (this.stomach.length < 10) {
      this.stomach.push(someFood);
    } else if (this.stomach.length === 10) {
      return `${this.name} is not hungry. He needs to poop 💩`;
    }
  }
  toString() {
    return `${this.name} is ${this.age} years old`;
  }
}

const firstPerson = new PersonConstructor("John", 35);

console.log(firstPerson.toString());
firstPerson.eat("Hot Dog");
firstPerson.eat("Hamburger");
firstPerson.eat("Steak");
firstPerson.eat("Cheeseburger");
firstPerson.eat("Mashed Potatoes");
firstPerson.eat("Apples and Oranges");
firstPerson.eat("Gyros");
firstPerson.eat("Kebab");
firstPerson.eat("Omelette");
firstPerson.eat("Pizza");
console.log(firstPerson.eat("Olives"));
console.log(firstPerson.stomach);
firstPerson.poop();
console.log(firstPerson.stomach);
