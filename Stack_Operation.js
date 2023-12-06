class Stack{
    constructor(){
        this.item=[];
    }
    push(element){
        return this.item.push(element);
    }
    pop(){
        if(this.item.length==0){
            console.log("UnderFlow");
        }
        return this.item.pop(this.item.length-1);
    }
    Travarsal(){
        for(let i=0;i<this.item.length;i++){
            console.log(this.item[i]);
        }
    }
    isEmpty(){
        return this.item.length==0;
    }
    peek(){
        return this.item[this.item.length-1];
    }
}

let stack = new Stack();
console.log(stack.isEmpty());
stack.pop();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
stack.Travarsal();
console.log(stack.peek());
