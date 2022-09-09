// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
class Stack {
  constructor() {
    this.stackCounter = 0;
  }

  push(value) {
    this[this.stackCounter] = value;
    this.stackCounter ++;
  }

  pop() {
    if (this.stackCounter > 0) {
      this.stackCounter --;
      let value = this[this.stackCounter];
      delete this[this.stackCounter];
      return value;
    }
  }

  size() {
    return this.stackCounter;
  }
}