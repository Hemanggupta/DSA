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
    this.tail = newNode;
    this.length = 1;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = temp;
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
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, val) {
    let temp = this.get(index);
    if (temp) {
      temp.value = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    const newIndex = index - 1;
    const newNode = new Node(val);
    if (index < 0 || index >= this.length) return undefined;
    else {
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      }
      let temp = this.head;
      for (let i = 0; i < newIndex; i++) {
        temp = temp.next;
      }
      let pre = temp.next;
      temp.next = newNode;
      newNode.next = pre;
      this.length++;
      return this;
    }
  }
}

const LL = new LinkedList(4);
LL.push(3);
LL.push(2);
LL.push(1);
console.log(LL.pop());
LL.unshift(5);
console.log(LL);
