var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.stack = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[storage.stack] = value;
    storage.stack ++;
  };

  someInstance.pop = function() {
    if (storage.stack > 0) {
      storage.stack --;
      let value = someInstance[storage.stack];
      delete someInstance[storage.stack];
      return value;
    }
  };

  someInstance.size = function() {
    return storage.stack;
  };

  return someInstance;
};
