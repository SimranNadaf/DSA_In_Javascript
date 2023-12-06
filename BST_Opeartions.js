class Node {
  constructor(data) {
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
  }
}
class Tree {
  constructor(node) {
    this.root = node;
  }
  add(data) {
    let newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;
      return true;
    } else {
      this.insertNode(newNode, this.root);
    }
  }
  insertNode(newNode, node) {
    if (newNode.data <= node.data) {
      if (node.leftNode == null) {
        node.leftNode = newNode;
        return true;
      }
      this.insertNode(newNode, node.leftNode);
    } else {
      if (node.rightNode == null) {
        node.rightNode = newNode;
        return true;
      }
      this.insertNode(newNode, node.rightNode);
    }
  }


  delete(data) {
    this.root = this.deleteNode(data, this.root);
  }

  deleteNode(data, node) {
    if (node == null) {
      console.log("Not Found!");
      return null;
    } else if (node.data == data) {

      if (node.leftNode!=null && node.rightNode!=null) {
        let right = node.rightNode;
        let left = node.leftNode;
        let temp = right;
        while (temp.leftNode != null) {
          temp = temp.leftNode;
        }
        temp.leftNode = left;
        return right;
      } else if (node.leftNode == null && node.rightNode == null) {
        node = null;
        return node;
      } else if (node.leftNode == null) {
        return node.rightNode;
      } else if (node.rightNode == null) {
        return node.leftNode;
      }
    } else if (data < node.data) {
      node.leftNode = this.deleteNode(data, node.leftNode);
      return node;
    } else {
      node.rightNode = this.deleteNode(data, node.rightNode);
      return node;
    }
  }
  preOrder(node = this.root) {
    if (node == null) {
      return;
    } else {
      console.log(node.data);
      this.preOrder(node.leftNode);
      this.preOrder(node.rightNode);
    }
  }
  inOrder(node = this.root) {
    if (node == null) {
      return;
    } else {
      this.inOrder(node.leftNode);
      console.log(node.data);
      this.inOrder(node.rightNode);
    }
  }
  postOrder(node = this.root) {
    if (node == null) {
      return;
    } else {
      this.preOrder(node.leftNode);
      this.preOrder(node.rightNode);
      console.log(node.data);
    }
  }
  searchElement(element, node) {
    if (node == null) {
      console.log("Element", element, "Not Found in Tree!!");
      return false;
    } else if (node.data == element) {
      console.log("Element", element, "Found in Tree!!");
      return true;
    } else if (element < node.data) {
      this.searchElement(element, node.leftNode);
    } else {
      this.searchElement(element, node.rightNode);
    }
  }
}
let root = new Node(50);
let tree = new Tree(root);
tree.add(20);
tree.add(60);
tree.add(30);
tree.add(40);
tree.add(10);
tree.add(55);
tree.add(70);

// tree.preOrder();
// console.log();
// tree.inOrder();
// console.log();
// tree.postOrder();
// tree.searchElement(70, root);
tree.preOrder();
console.log();
tree.delete(100);
tree.preOrder();
