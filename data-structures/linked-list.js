class Node{
  constructor(value){
    this.head={
      value:value,
      next:null
    }
  }
}

class LinkedList{
  constructor(value){
    this.node=new Node(value);
    this.tail=this.node.head;
    this.length=1;
  }

  //O(1)
  append(value){
    const newNode=new Node(value);
    this.tail.next=newNode;
    this.tail=newNode;
    this.length++;
    return this;
  }

  //O(1)
  prepend(value){
    const newNode=new Node(value);
    newNode.next=this.node.head;
    this.node.head=newNode;
    this.length++;
    return this;
  }
}

const list = new LinkedList('first');
list.append('append');
jsonList = JSON.stringify(list.prepend('prepend'));
console.log(jsonList);