var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  storage.queueLength = 0;
  storage.dequeueCounter = 0;

  someInstance.enqueue = function(value) {
    someInstance[storage.queueLength] = value;
    storage.queueLength ++;
  };

  someInstance.dequeue = function() {
    let value = someInstance[storage.dequeueCounter];
    delete someInstance[storage.dequeueCounter];
    storage.dequeueCounter ++;
    return value;
  };

  someInstance.size = function() {
    if (storage.dequeueCounter > storage.queueLength) {
      return 0;
    }
    return storage.queueLength - storage.dequeueCounter;
  };

  return someInstance;
};
