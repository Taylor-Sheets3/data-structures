var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //call var child = Tree(value)
  var child = Tree(value);
  //store child in newTree.children (array);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  //recursive function
  // define current node
  //var currentNode = arguments[1] || this;
  // define is found variable equal  to false
  var isFound = false;
  // search for target
  if (this.value === target) {
    isFound = true;
  }
  //debugger;
  // if children exist an is found is false
  if (this.children.length && !isFound) {
    for (var i = 0; i < this.children.length; i ++) {
      isFound = this.children[i].contains(target);
      if (isFound) {
        return isFound;
      }
    }

    //currentNode.children.forEach(function(child) {
    //accumulate and recurse
    //isFound = currentNode.contains(target, child);
    //});
  }
  return isFound;

  //return is found
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
