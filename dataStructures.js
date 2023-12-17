// Define an array of fruits
const fruits = ["apple", "banana", "cherry"];

// Define an object representing a person
const person = {
  name: "John", // person's name
  age: 30, // person's age
  isStudent: false, // flag indicating if the person is a student
};

// Define a Set to store unique numbers
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4]);

// Define a Map to store user information
const userMap = new Map();
userMap.set("username", "johndoe"); // set username
userMap.set("email", "john@example.com"); // set email

// Define a stack and perform push and pop operations
const stack = [];
stack.push("item1"); // push item1 to the stack
stack.push("item2"); // push item2 to the stack
const poppedItem = stack.pop(); // pop the top item from the stack, which is 'item2'

// Define a queue and perform enqueue and dequeue operations
const queue = [];
queue.push("item1"); // enqueue item1 to the queue
queue.push("item2"); // enqueue item2 to the queue
const dequeuedItem = queue.shift(); // dequeue the first item from the queue, which is 'item1'

// Define a Node class for linked list
class Node {
  constructor(value) {
    this.value = value; // node's value
    this.next = null; // pointer to the next node
  }
}
const node1 = new Node("A"); // create a new node with value 'A'
const node2 = new Node("B"); // create a new node with value 'B'
node1.next = node2; // link node1 to node2

// Define a TreeNode class for binary tree
class TreeNode {
  constructor(value) {
    this.value = value; // node's value
    this.left = null; // pointer to the left child
    this.right = null; // pointer to the right child
  }
}
const root = new TreeNode(10); // create a root node with value 10
root.left = new TreeNode(5); // create a left child with value 5
root.right = new TreeNode(15); // create a right child with value 15