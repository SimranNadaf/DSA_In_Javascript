class Queue{
    constructor(){
        this.item=[];
        this.frontIndex=0;
        this.backIndex=0;
    }
    Enqueue(element){
        this.item.push(element);
        this.backIndex++;
        return true;
    }
    Dequeue(){
        if(this.frontIndex>=this.backIndex){
            return "Empty";
        }
        delete this.item[this.frontIndex];
        this.frontIndex++;
        return true;
    }
    Traversal(){
        for(let i=this.frontIndex;i<this.backIndex;i++){
            console.log(this.item[i]);
        }
    }
    isEmpty(){
        if(this.frontIndex>=this.backIndex){
            return true;
        }
        return false;
    }
    peek(){
        return this.item[this.frontIndex];
    }
}

let queue=new Queue();
// console.log(queue.isEmpty());
queue.Enqueue(10);
queue.Enqueue(20);
queue.Enqueue(30);
queue.Enqueue(40);
queue.Enqueue(50);
queue.Enqueue(60);
console.log(queue.peek());
// console.log(queue.isEmpty());

queue.Dequeue();
queue.Dequeue();
queue.Dequeue();
console.log(queue.peek());

queue.Dequeue();
queue.Dequeue();
queue.Dequeue();
// console.log(queue.isEmpty());

// queue.Traversal();
