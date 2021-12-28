"use strict";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  compareAge(Person) {
    if (Person.age === this.age) {
      return `${this.name} is the same age as me.✌`;
    } else if (Person.age > this.age) {
      return `${Person.name} is older than me 😁`;
    } else if (Person.age < this.age) {
      return `${Person.name} is younger then me 🤦‍♂️`;
    }
  }
}

const p1 = new Person("Hakob", 29);
const p2 = new Person("Jackie", 59);
const p3 = new Person("Harry", 21);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p3));
console.log(p3.compareAge(p3));
