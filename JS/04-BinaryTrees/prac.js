class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  // INSERT (VALUE)
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (temp.value === value) return undefined;
      if (newNode.value < temp.value) {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  // CONTAINS()
  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp !== null) {
      if (temp.value > value) {
        temp = temp.left;
      } else if (temp.value < value) {
        temp = temp.right;
      } else if (temp.value === value) {
        return true;
      } else {
        break;
      }
    }
    return false;
  }
}
const myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);
// console.log(myTree.contains(47));
console.log(myTree);
