class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor(node, size) {
    this.head = node;
    this.size = size;
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

  deleteFromStart() {
    if (this.head == null) {
      console.log("Empty");
    } else {
      this.head = this.head.next;
      this.size--;
    }
  }

  deleteFromEnd() {
    if (this.head == null) {
      console.log("Empty");
    } else {
      let temp = this.head;
      let prev = this.head;
      while (temp.next != null) {
        prev = temp;
        temp = temp.next;
      }
      prev.next = null;
      this.size--;
    }
  }

  deleteAtIndex(index) {
    if (this.head == null) {
      console.log("Empty");
    } else if (index == 0) {
      this.head = this.head.next;
      this.size--;
      return console.log("Index", index, "element deleted successfully !");
    } else {
      let cnt = 1;
      let temp = this.head;
      let prev;
      while (temp.next != null) {
        prev = temp;
        temp = temp.next;
        if (cnt == index) {
          prev.next = temp.next;
          this.size--;
          return console.log("Index", index, "element deleted successfully !");
        }
        cnt++;
      }
      return console.log("Index", index, "element not found !");
    }
  }
}
let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(40);
let node5 = new Node(50);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
let list = new LinkedList(node1, 5);
// list.deleteFromStart();
// list.deleteFromEnd();
list.deleteAtIndex(5);

list.Traversal();
