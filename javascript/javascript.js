/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: javascript.js
// Description: This is the main javascript file.
// Notes: N/A
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("|Binary Search Trees Project|");
console.log("\n");

// => Insertion Sort - Function to sort an array using insertion sort.
function insertionSort(arr, n){
    let i, key, j;

    for (i = 1; i < n; i++)
    {
        key = arr[i]; 
        j = i - 1;

        /** Move elements of arr[0..i-1], that are
         * greater than key, to one position ahead
         * of their current position. */
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    return arr;
}

let array =  [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
console.log("Array before insertion sort:");
console.log(array);
console.log("\n");

array = insertionSort(array, array.length);
console.log("Array after insertion sort:");
console.log(array);
console.log("\n");


// => Remove duplicates from array
console.log("Removing duplicates from the array:");
console.log(array); 
console.log("\n");

// function will remove duplicates from the sorted array.
function removeDuplicates(arr){
    for (let i = 0; i < arr.length; i++){
        let count = i + 1;
        while(count !== arr.length)
        {
            if (arr[i] === arr[count])
            {
                console.log(arr[count], "removed");
                arr.splice(count, 1);
            }
            count++;
        }
    }
    console.log("\n");
    return arr;
}

array = removeDuplicates(array);
console.log("Array after removing duplicates:");
console.log(array);
console.log("\n");

// => Binary Search Tree: 
console.log("Performing the Binary Search Tree algorithm on the array:");
console.log(array); 
console.log("\n");

// A binary tree node:
class Node{
    constructor(data = null, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// A Tree class
class Tree{
    constructor(arr){
        this.root = this.buildTree(arr, 0, arr.length - 1); // The first root.
        prettyPrint(this.root);
    }

    // Function will perform a balanced BST algorithm (Balanced Binary Search Tree)
    buildTree(arr, start, end){
        // Base Case
        if (start > end){
            return null; 
        }

        // Get the middle element and make it root
        let mid = parseInt((start + end) / 2);
        let node = new Node(arr[mid]);

        // Recursively construct the left subtree and make it left child of root.
        node.left = this.buildTree(arr, start, mid - 1);

        // Recursively construct the right subtree and make it right child of root.
        node.right = this.buildTree(arr, mid + 1, end);

        return node;
    }

    preOrder(node){
        if (node === null)
        {
            return;
        }
        
        console.log(node.data + " ");

        this.preOrder(node.left);

        this.preOrder(node.right);
    }

    inOrder(node){
        if (node === null)
        {
            return;
        }

        // First recur on left subtree
        this.inOrder(node.left);

        // Now deal with the node
        console.log(node.data + " ");

        // Then recur on right subtree
        this.inOrder(node.right);
    }

    postOrder(node){
        if (node === null)
        {
            return;
        }

        // First recur on left subtree
        this.postOrder(node.left);

        // Last recur on right subtree
        this.postOrder(node.right);

        // displaying the node data
        console.log(node.data + " ");
    }

    // Breadth-first - Level Order (Space Complexity - Linear Complexity)
    levelOrder(node){
        if (node === null)
        {
            return;
        }

        // This follows the rule for queues: FIFO = First In First Out
        let queue = [];
        queue.push(node); // Node data is first in by default.

        while (queue.length !== 0)
        {
            /* The shift method removes first element 
            from an array and returns that removed element. 
            */
            let tempNode = queue.shift(); // Node data is first out

            // Enqueue left child
            if (tempNode.left !== null)
            {
                queue.push(tempNode.left); // Node data is first in for the left subtree.
            }

            // Enqueue right child
            if(tempNode.right !== null)
            {
                queue.push(tempNode.right); // Node data is first in for the right subtree. 
            }
        }
    }

    insert(node, key){
        if (node === null)
        {
            const newNode = new Node();
            newNode.data = key;
            return newNode;
        }

        if (key < node.data)
        {
            node.left = this.insert(node.left, key);
        }
        else if (key > node.data)
        {
            node.right = this.insert(node.right, key);
        }

        return node; // Return the (unchanged) node pointer.
    }

    delete(node, key){
        if (node === null)
        {
            return;
        }

        if (key === node.data)
        {
            // For case 1 and 2, node without child or with child.
            if (node.left === null && node.right === null)
            {
                return null;
            }
            else if (node.left === null)
            {
                return node.right;
            }
            else if (node.right === null)
            {
                return node.left;
            }
            else
            {
                // node with two children, get the inorder successor,
                // smallest in the right subtree.
                let tempNode = node.right; // Test right subtree since it has the larger values, hence inorder successor.
                console.log(node.right);
    
                while (tempNode.left !== null)
                {
                    tempNode = tempNode.left;
                }
    
                node.data = tempNode.data;
    
                // delete the inorder successor
                node.right = this.delete(node.right, tempNode.data);

                return node;
            }
        }
        else if (key < node.data) // Recur down the tree
        {
            node.left = this.delete(node.left, key);
            return node;
        }
        else
        {
            node.right = this.delete(node.right, key);
            return node;
        }
    }

    find(node, key)
    {
        if (node === null)
        {
            return null;
        }

        if (node.data === key)
        {
            return node;
        }
        else // Use the pre-order traversal to find the key value in one of the nodes.
        {
            let tempNodeRight = this.find(node.right, key);

            let tempNodeLeft = this.find(node.left, key);

            if (tempNodeRight !== null) // return right node if found.
            {
                return tempNodeRight;
            }
            else if (tempNodeLeft !== null) // return left node if found.
            {
                return tempNodeLeft;
            }
            else // return null if not found.
            {
                return null;
            }
        }
    }

    height(node){
        if (node === null)
        {
            return -1;
        }

        let lHeight = this.height(node.left);
        
        let rHeight = this.height(node.right);
    
        if (lHeight > rHeight)
        {
            return lHeight + 1;
        }
        else
        {
            return rHeight + 1;
        }
    }

    depth(node, key){
        if (node === null)
        {
            return -1;
        }

        if (node.data === key)
        {
            return 0;
        }

        // Recursion for the left side of the subtree
        let lDepth = this.depth(node.left, key); 

        // Recursion for the right side of the subtree
        let rDepth = this.depth(node.right, key); 

        if (lDepth >= 0)
        {
            return lDepth + 1;
        }
        else if (rDepth >= 0)
        {
            return rDepth + 1;
        }
        else if (lDepth === -1 && rDepth === -1)
        {
            return;
        }
    }

    isBalanced(node){
        if (node === null)
        {
            return;
        } 

        // Obtaining the heights for the left and right subtrees.
        let lHeight = this.height(node.left);
        let rHeight = this.height(node.right);
        console.log("Left Subtree Height: ", lHeight);
        console.log("Right Subtree Height: ", rHeight);

        const difference = Math.abs(lHeight - rHeight);
        console.log("Difference between Subtree Heights: ", difference);

        // Balance check section
        if (difference === 0)
        {
            return true;
        }
        else if (difference === 1)
        {
            return true;
        }
        else if (difference > 1)
        {
            return false;
        }
    }

    rebalance(node){
        if (node === null)
        {
            return;
        }

        if (!this.isBalanced(node))
        {
            let balancedTree = null;
            console.log("Needs to be rebalanced");
            balancedTree = this.buildTree(array, 0, array.length - 1);
            return balancedTree;
        }
        else
        {
            console.log("Already balanced.");
        }
    }

    printTree(node){
        console.log(node);
    }
}

// Will print the binary search tree.
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null)
    {
        console.log("Root is null. Build tree first.");
        return;
    }

    if (node.right !== null)
    {
        prettyPrint(node.right, `${prefix}${isLeft ? "| " : "   "}`, false);
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);

    if (node.left !== null)
    {
        prettyPrint(node.left, `${prefix}${isLeft ? "   " : "|   "}`, true);
    }
}

const binaryTreeOne = new Tree(array);
console.log("\n");

console.log("Raw display of the tree:");
binaryTreeOne.printTree(binaryTreeOne.root);
console.log("\n");

console.log("Breadth-First - Level-Order Traversal:");
binaryTreeOne.levelOrder(binaryTreeOne.root);
console.log("\n");

console.log("Depth-First - Preorder Tree Traversal:");
binaryTreeOne.preOrder(binaryTreeOne.root);
console.log('\n');

console.log("Depth-First - Inorder Tree Traversal:");
binaryTreeOne.inOrder(binaryTreeOne.root);
console.log("\n");

console.log("Depth-First - PostOrder Tree Traversal:");
binaryTreeOne.postOrder(binaryTreeOne.root);
console.log("\n");

console.log("Inserting new nodes with values 44 and 7 in Binary Search Tree:"); 
binaryTreeOne.insert(binaryTreeOne.root, 44);
binaryTreeOne.insert(binaryTreeOne.root, 7);
console.log("Binary Tree With new Inserted values 44 and 7:");
prettyPrint(binaryTreeOne.root);
console.log("\n");

console.log("Deleting Nodes:");
binaryTreeOne.delete(binaryTreeOne.root, 8);
prettyPrint(binaryTreeOne.root);
console.log("\n");

console.log("Finding the value 67 in the Binary Search Tree: ");
const found = binaryTreeOne.find(binaryTreeOne.root, 67);
console.log(found);
console.log("\n");

console.log("Height of the Binary Search Tree: ");
const heightOne = binaryTreeOne.height(binaryTreeOne.root);
console.log(heightOne);
console.log("\n");

console.log("Depth of the node with value 4:");
const depthOne = binaryTreeOne.depth(binaryTreeOne.root, 4);
console.log(depthOne);
console.log("\n");

console.log("Depth of the node with value 6345:");
const depthTwo = binaryTreeOne.depth(binaryTreeOne.root, 6345);
console.log(depthTwo);
console.log("\n");

console.log("Is the Binary Search Tree Balanced? ");
const balanceTestOne = binaryTreeOne.isBalanced(binaryTreeOne.root);
console.log("Balanced: ", balanceTestOne);
console.log("\n");

console.log("Unbalancing the tree by adding a few nodes > 100:");
binaryTreeOne.insert(binaryTreeOne.root, 107);
binaryTreeOne.insert(binaryTreeOne.root, 203);
binaryTreeOne.insert(binaryTreeOne.root, 600);
binaryTreeOne.insert(binaryTreeOne.root, 344);
prettyPrint(binaryTreeOne.root);
console.log("\n");

console.log("Is the Binary Search Tree Balanced?");
const balanceTestTwo = binaryTreeOne.isBalanced(binaryTreeOne.root);
console.log("Balanced: ", balanceTestTwo);
console.log("\n");

console.log("Rebalancing the Binary Search Tree:");
binaryTreeOne.root = binaryTreeOne.rebalance(binaryTreeOne.root);
console.log("\n");

console.log("Is the Binary Search Tree Balanced?");
const balanceTestThree = binaryTreeOne.isBalanced(binaryTreeOne.root);
console.log("Balanced: ", balanceTestThree);
prettyPrint(binaryTreeOne.root);
console.log("\n");

















