var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    // define a linked list position equal either tail or 1
    var currentTail = list.tail;
    // if tail equals 1
    if (!list.tail) {
      list.head = node;
      list.tail = node;
    }
    if (list.tail) {
      list.tail.next = node;
    }
    list.tail = node;
    // point head at 1
    //insert value at linked list position

  };

  list.removeHead = function() {
    //capture current head key (list.head)
    //captured value at head key list[list.head]
    var value = list.head.value;
    // increment list.head
    list.head = list.head.next;
    //return value
    return value;

  };

  list.contains = function(target) {
    //base case : next is empty
    var currentPointer = arguments[1] || list.head;
    var isFound = false;
    // if next not empty
    //call deeper
    if (currentPointer.value === target) {
      isFound = true;
      return isFound;
    }
    if (currentPointer.next !== null) {
      isFound = list.contains(target, currentPointer.next);
    }

    return isFound;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
