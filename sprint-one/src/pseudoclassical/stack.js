// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Stack = function() {
  this.stackCounter = 0;
};

Stack.prototype.push = function(value) {
  this[this.stackCounter] = value;
  this.stackCounter ++;
};

Stack.prototype.pop = function() {
  if (this.stackCounter > 0) {
    this.stackCounter --;
    let value = this[this.stackCounter];
    delete this[this.stackCounter];
    return value;
  }
};

Stack.prototype.size = function() {
  return this.stackCounter;
};
