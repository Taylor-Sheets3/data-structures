var BinarySearchTree = function(value) {
  var newTree = Object.create(binaryTreeMethods);
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  //debugger;
  //define variable equal to current nodes value
  currentValue = this.value;
  // if less look left
  if (value < currentValue) {
    // if empty
    if (!this.left) {
      // instanstiate a new BST at left
      this.left = BinarySearchTree(value);
      // return
      return;
    }
    // call function on node in left
    this.left.insert(value);
  } else if (value > currentValue) {
    if (!this.right) {
      this.right = BinarySearchTree(value);
      return;
    }
    this.right.insert(value);
  }
};

binaryTreeMethods.contains = function(value) {
  //debugger;
  var currentValue = this.value;
  var isFound = false;
  if (value === currentValue) {
    isFound = true;
  } else if (value < currentValue) {
    if (this.left) {
      isFound = this.left.contains(value);
    }
  } else if (value > currentValue) {
    if (this.right) {
      isFound = this.right.contains(value);
    }

  }
  return isFound;
};

binaryTreeMethods.depthFirstLog = function(cb) {
  //call function on value
  cb(this.value);
  //base case: left and right are empty
  if (!this.left && !this.right) {
    //return
    return;
  }
  // if left isnt empty
  if (this.left) {
    // use leftobject to call depthfirstlog with argument cb
    this.left.depthFirstLog(cb);
  }
  // if right isnt empty
  if (this.right) {
    //use rightobject to call depthfirstlog with argument cb
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

