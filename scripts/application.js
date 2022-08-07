import { randomNumber } from "./helper.js";

// CLASS APPLICATION
export default class Application {
  constructor(arraySize = 50, sortingSpeed = 50) {
    this.arraySize = arraySize;
    this.sortingSpeed = sortingSpeed;
    this.array = [];
    this.generate(); // first generation of array
  }
  get getSpeed() {
    return this.sortingSpeed;
  }

  get getSize() {
    return this.arraySize;
  }

  set speed(value) {
    this.sortingSpeed = value;
  }

  set size(value) {
    this.arraySize = value;
    this.generate();
  }

  getDetails() {
    return {
      array: this.array,
      speed: this.sortingSpeed,
      size: this.arraySize,
    };
  }

  generate() {
    let tempSize = this.arraySize;
    if (tempSize <= 0) return;
    this.array = []; // clear out array
    while (tempSize--) {
      this.array.push(randomNumber());
    }
  }
}
