

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create an object at node
  this[node] = {
    edges: {}
  };
  // define value property of node object as node argument
  // assign node to key in graph
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this).includes(JSON.stringify(node));
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if this[node] has edges
  var nodeEdges = Object.keys(this[node].edges);
  if (nodeEdges.length) {
    //node.edges.each(function(edge) {
    for (var i = 0; i < nodeEdges.length; i++) {
      delete this[nodeEdges[i]].edges[node];
    }
  }
  // remove node from this[edge].edges
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edgeFound = false;
  if (this[fromNode].edges[toNode]) {
    edgeFound = true;
  }
  return edgeFound;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges[toNode] = this[toNode];
  this[toNode].edges[fromNode] = this[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[toNode].edges[fromNode];
  delete this[fromNode].edges[toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    cb(this[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


