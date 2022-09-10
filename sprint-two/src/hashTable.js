

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //debugger;
  // define our storage at current index
  // if storage at current index is undefined
  var currentIndex = this._storage.get(index);
  if (!currentIndex) {
    // create array at index
    this._storage.set(index, []);
    currentIndex = this._storage.get(index);
  }
  var objectToPush = {};
  objectToPush[k] = v;
  // push to array at index
  currentIndex.push(objectToPush);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // define storage at current index
  var currentIndex = this._storage.get(index);
  var foundItem;
  // var foundValue;
  // if array exist at index
  if (currentIndex) {
    // iterate through array
    currentIndex.forEach(function(item) {
      // if object key = k
      console.log(item);
      if (item.hasOwnProperty(k)) {
        // return v
        console.log(item[k]);
        foundItem = item[k];
      }
    });
  }
  return foundItem;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // define storage at current index
  var currentIndex = this._storage.get(index);
  // if array exist at index
  if (currentIndex) {
    currentIndex = _.filter(currentIndex, function(item) {
      if (!item.hasOwnProperty(k)) {
        return true;
      }
    });
    if (currentIndex.length === 0) {
      this._storage.set(index, undefined);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
