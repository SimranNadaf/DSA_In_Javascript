class Node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}
class LinkedList {
    constructor(head,size){
        this.head=head;
        this.size=size;
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
      searchByElement(element){
        if(this.head==null){
            return console.log("Empty List");
        }
        else{
            let temp=this.head;
            let ind=0;
            while(temp!=null){
                if(temp.element==element){
                    return console.log("Element found at index",ind)
                }
                ind++;
                temp=temp.next;
            }
            return console.log("Element not found !");
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
list.Traversal();
list.searchByElement(60);