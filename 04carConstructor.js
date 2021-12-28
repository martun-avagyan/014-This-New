"use strict";

class CarConstructor {
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  fill(gallons) {
    this.tank += gallons;
    return this;
  }
  drive(distance) {
    if (this.tank - distance / this.milesPerGallon >= 0) {
      this.odometer += distance;
      this.tank -= distance / this.milesPerGallon;
    } else if (this.tank - distance / this.milesPerGallon < 0) {
      const tankWasEmptied = Math.abs(
        (this.tank - distance / this.milesPerGallon) * this.milesPerGallon
      );
      this.odometer +=
        distance -
        (distance / this.milesPerGallon - this.tank) * this.milesPerGallon; // Odometer gets added the travel distance which was possible with the amount of gas left

      return `Tank was emptied at ${this.odometer} but you still have ${tankWasEmptied} miles to go`;
    }
  }
}

const firstCar = new CarConstructor("BMW", 45);
console.log(firstCar);

firstCar.fill(65);

console.log(firstCar.tank);

console.log(firstCar.drive(200000));
