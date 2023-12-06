class Graph{
    constructor(noOfVertices){
        this.noOfVertices=noOfVertices;
        this.AdjList=new Map();
    }
    addVertice(v){
        this.AdjList.set(v,[]);
        this.noOfVertices++;
    }
    addEdge(v,w){
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }
    removeVertice(v){
        this.AdjList.delete(v);
        let get_keys=this.AdjList.keys();
        for (let i of get_keys){
            let j=this.AdjList.get(i);
            let p=new Array();
           for(let k of j){
            if(k!=v){
                p.push(k);
            }
           }
           this.AdjList.set(i,p);
        }
    }
    removeEdge(v,w){
           let j=this.AdjList.get(v);
            let p=new Array();
           for(let k of j){
            if(k!=w){
                p.push(k);
            }
           }
           this.AdjList.set(v,p);

           j=this.AdjList.get(w);
            p=new Array();
          for(let k of j){
           if(k!=v){
               p.push(k);
           }
          }
          this.AdjList.set(w,p);
        }
    
    Traversal(){
        console.log(this.AdjList);
    }
}

let graph=new Graph(0);
graph.addVertice('A');
graph.addVertice('B');
graph.addVertice('C');
graph.addVertice('D');
graph.addEdge('A','B');
graph.addEdge('B','C');
graph.addEdge('C','D');
graph.addEdge('D','A');
graph.addVertice('E');
graph.removeEdge('A','B');
graph.removeVertice('C');
graph.Traversal();
