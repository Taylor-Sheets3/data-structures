// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.queueLength = 0;
  instance.dequeueCounter = 0;
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.queueLength] = value;
    this.queueLength ++;
  },

  dequeue: function() {
    let value = this[this.dequeueCounter];
    delete this[this.dequeueCounter];
    this.dequeueCounter ++;
    return value;
  },

  size: function() {
    if (this.dequeueCounter >= this.queueLength) {
      return 0;
    }
    return this.queueLength - this.dequeueCounter;
  }
};


