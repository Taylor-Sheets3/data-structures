var BinarySearchTree = function(value) {
  var newTree = Object.create(binaryTreeMethods);
  value = value;
  newTree.left = {};
  newTree.right = {};
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
  //RECURSION!!!!!
  // coditional to not add value if value if value is present
  // if value is less then this value
    // create new BST in left property
  // if value is greater than this value
    //create new BST in right property
  // this.right[value] = BinarySearchTree(value);

};

binaryTreeMethods.contains = function(value){

};

binaryTreeMethods.depthFirstLog = function(cb){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
 var bST = BinarySearchTree(5);

 bST.insert(6)
