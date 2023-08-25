# Binary Search Trees Project
## The Odin Project

### Definition:
In computer science, a binary search tree (BST), also called an ordered or sorted binary tree, is
a routed binary tree data structure with the key of each internal node being greater than all the keys 
in the respective nodes left subtree and less than the ones in its right subtree. The time complexity 
of operations on the binary search tree is directly proportional to the height of the tree.

Binary Search Trees allow binary search for fast lookup, addition, and removal of data items. Since 
the nodes in a BST are laid outos that each comparison skips about half of the remaining tree, the lookup performance
is proportional to that of binary logarithm.

The Performance of a binary search tree is dependent on teh order of insertion of the nodes into the tree
since arbitrary insertions may lead to degeneracy; several variations of the binary search tree can be built 
with guaranteed worst-case performance. The basic operations include: search, traversal, insert and delete.
BSTs with guaranteed worst-case complexities perform better than an unsorted array, which would require 
linear search time. 

### Assignment:
The project will contain two classes or factories:
1. <b>Node</b> - class/factory that will have an attribute for the data it stores and its left and right subtree children.
2. <b>Tree</b> - class/factory which accepts an array when initialized. The Tree class should have a root attribute which 
uses the return value of buildTree.

The projects will contains the following functions in the Tree class:
1. <b>buildTree</b> - function which takes an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
and turns it into a balanced binary tree full of Node objectss appropriately placed. 
<b>Note:</b> The array needs to be sorted and duplicate elements need to be removed:

* <b>InsertionSort</b> - will sort the selected array that will be used to create a binary search tree.
* <b>removeDuplicates</b> - will remove the duplicated elements from the array.

2. <b>prettyPrint</b> - function will console.log() your tree in a structured format. This
function will expect to receive the root of your tree as the value for the node parameter. 
3. <b>insert</b> and <b>delete</b> - function which accepts a value to insert/delete. 
4. <b>find</b> - function which accepts a value and returns the node with the given value.
5. <b>levelOrder</b> - function which accepts another function as a parameter. levelOrder 
should traverse the tree in breadth-first level order and provide each node as the argument 
to the provided function. This function can be implemented using either iteration or recursion. 
The method should return an array of values if no function is given.
6. <b>inorder</b>, <b>preorder</b>, and <b>postorder</b> - functions that accept a function parameter. Each
of these functions should traverse the tree in their respective depth-first order and yield each node to the
provided function given as an argument. The functions should return an array of values if no function is given.
7. <b>height</b> - function which accepts a node and returns its height. Height is defined as the number of edges 
in longest path from a given a node to a leaf node.
8. <b>depth</b> - function which accepts a node and returns its depth. Depth is defined as the number of edges in path
from a given node to the tree's root node.
9. <b>isBalanced</b> - function which checks if the tree is balanced. A balanced tree is one where the difference 
between heights of left subtree and right subtree of every node is not more than 1.
10. <b>rebalance</b> - function which rebalances an unbalanced tree.
