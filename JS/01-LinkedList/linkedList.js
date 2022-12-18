class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  // PUSH
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // POP
  pop() {
    if (!this.head) return undefined;
    else {
      let temp = this.head;
      let pre = this.head;
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return temp;
    }
  }
  // UNSHIFT
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // SHIFT
  shift() {
    if (!this.head) {
      return undefined;
    } else {
      const temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return temp;
    }
  }
  // GET()
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  // SET()
  set(index, val) {
    let temp = this.get(index);
    if (temp) {
      temp.value = val;
      return true;
    }
    return false;
  }
  // INSERT(index, value)
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    else if (index === 0) return this.unshift(value);
    else if (index === this.length) return this.push(value);
    else {
      const newNode = new Node(value);
      const temp = this.get(index - 1);
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
      return true;
    }
  }
  // REMOVE()
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    else if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      const pre = this.get(index - 1);
      const temp = pre.next;
      pre.next = temp.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }
  // REVERSE()
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

const myLinkedList = new LinkedList(00);
myLinkedList.push(10);
myLinkedList.push(20);
myLinkedList.push(30);
myLinkedList.insert(2, 120);
console.log(myLinkedList);
