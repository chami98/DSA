const fruits = ["apple", "banana", "cherry"];

const person = {
  name: "John",
  age: 30,
  isStudent: false,
};

const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4]);

const userMap = new Map();
userMap.set("username", "johndoe");
userMap.set("email", "john@example.com");

const stack = [];
stack.push("item1");
stack.push("item2");
const poppedItem = stack.pop(); // 'item2'

const queue = [];
queue.push('item1');
queue.push('item2');
const dequeuedItem = queue.shift(); // 'item1'

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  const node1 = new Node('A');
  const node2 = new Node('B');
  node1.next = node2;
  

