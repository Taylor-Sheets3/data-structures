// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
class Queue {
  constructor() {
    this.queueLength = 0;
    this.dequeueCounter = 0;
  }
  enqueue(value) {
    this[this.queueLength] = value;
    this.queueLength ++;
  }

  dequeue() {
    let value = this[this.dequeueCounter];
    delete this[this.dequeueCounter];
    this.dequeueCounter ++;
    return value;
  }

  size() {
    if (this.dequeueCounter >= this.queueLength) {
      return 0;
    }
    return this.queueLength - this.dequeueCounter;
  }
}
