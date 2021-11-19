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
    this.node = new Node(value);
    this.tail = this.node.head;
    this.length = 1;
  }

  //O(1)
  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  //O(1)
  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.node.head;
    this.node.head = newNode;
    this.length++;
    return this;
  }

  //O(n)
  insert(index, value){
    if(index >= this.length){
      return this.append(value);
    }

    let newNode = new Node(value);
    const leader = this.traverse(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  //O(n) 
  printList(){
    let array = new Array();
    let currentNode = this.node.head.next;
    let counter = 0;

    array.push(this.node.head.value); //Need to check

    while(counter < this.length-1){
      array.push(currentNode.head.value);
      currentNode = currentNode.next;
      counter++;
    }

    return array;
  }

  //O(n)
  traverse(index){
    let counter = 0;
    let currentNode = this.node.head;

    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    
    return currentNode;
  }
}

const list = new LinkedList('A');
list.append('B');
list.append('C');
list.append('D');
console.log(list.printList());

// list.insert(2, '1');
// console.log(JSON.stringify(list));