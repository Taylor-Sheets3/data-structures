// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Queue = function() {
  this.queueLength = 0;
  this.dequeueCounter = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.queueLength] = value;
  this.queueLength ++;
};

Queue.prototype.dequeue = function() {
  let value = this[this.dequeueCounter];
  delete this[this.dequeueCounter];
  this.dequeueCounter ++;
  return value;
};

Queue.prototype.size = function() {
  if (this.dequeueCounter >= this.queueLength) {
    return 0;
  }
  return this.queueLength - this.dequeueCounter;
};


