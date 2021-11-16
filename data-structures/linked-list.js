class Node{
  constructor(value){
    this.head={
      value:value,
      next:null
    }
    this.tail=this.head;
    this.length=1;
  }
}

class LinkedList{
  constructor(value){
    this.node=new Node(value);
  }

  //O(1)
  append(value){
    const newNode=new Node(value);
    this.node.tail.next=newNode;
    this.node.tail=newNode;
    this.node.length++;
    return this;
  }
}

const list = new LinkedList('first');
jsonList = JSON.stringify(list.append('second'));
console.log(jsonList);