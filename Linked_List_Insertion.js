class Node {
  //Constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  Traversal() {
    if (this.size == 0) {
      console.log("No Element in linked list.");
    } else {
      let temp = this.head;
      while (this.size > 0) {
        console.log(temp.element);
        temp = temp.next;
        this.size--;
      }
    }
  }
  insertAtStart(element) {
    let node = new Node(element);
    if (this.head == null) {
      this.head = node;
      this.size = this.size + 1;
    } else {
      node.next = this.head;
      this.head = node;
      this.size = this.size + 1;
    }
  }
  insertAtEnd(element) {
    let node = new Node(element);
    if (this.head == null) {
      this.head = node;
      this.size++;
    }
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = node;
    this.size++;
  }
  // insert element at index, if list is empty or index is -ve then not,
 //  if index exceed limit of list then it add element at end of list
  insertAtIndex(element, index) {
    let node = new Node(element);
    if (this.head == null) {
      if (index == 0) {
        this.head = node;
        this.size++;
      } else {
        console.log("Empty List!");
      }
    } else if (index == 0) {
      let temp = this.head.next;
      node.next = temp;
      this.head = node;
      this.size++;
    } else {
      let temp = this.head;
      let prev;
      let cnt = 0;

      while (temp.next != null) {
        prev = temp;
        temp = temp.next;
        cnt++;
        if (cnt == index) {
          prev.next = node;
          node.next = temp;
          this.size++;
        }
      }
      if (cnt < index) {
        temp.next = node;
        this.size++;
      }
    }
  }
}
let list = new LinkedList();
list.insertAtStart(0);
list.insertAtStart(2);
list.insertAtStart(5);
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtIndex(100, 4);
list.Traversal();
