"use strict";
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  testMethod() {
    return `Testing to see the availability of the method
      on the firstBaby instance`;
  }
}

class Baby extends Person {
  constructor(name, age, favoriteToy) {
    super(name, age);
    this.favoriteToy = favoriteToy;
  }
  play() {
    return `${this.name} is playing with a ${this.favoriteToy}`;
  }
  reverseTestMethod() {
    return `Not available on Super`;
  }
}

const firstBaby = new Baby("Anthony", 1, "Teddy Bear");
const firstPerson = new Person("Lucas", 35);
console.log(firstBaby.play());
console.log(firstBaby.testMethod());
console.log(firstBaby.reverseTestMethod());
firstPerson.reverseTestMethod(); // Not available on the parent classs
