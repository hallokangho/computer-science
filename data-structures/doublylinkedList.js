class Node{
  constructor(value, prev, next){
    this.data = value
    this.prev = prev
    this.next = next
  }
}

class DoubleLinkedList{
  constructor(){
    this.head = null
    this.length = 0
  }

  prepend(value){
    if(this.length == 0){
      this.head = new Node(value, null, null)
      this.length++
    }else{
      let newNode = new Node(value, null, this.head)
      this.head.prev = newNode
      this.head = newNode
      this.length++
    }
  }

  append(value){
    if(this.length == 0){
      this.prepend(value)
      return
    }else{
      let current = this.head
      
      while(current.next){
        current = current.next
      }

      current.next = new Node(value, current, null)
      this.length++
    }
  }

  insert(value, index){
    if(index == 0){
      this.prepend(value)
      return      
    }

    if(index > this.length){
      return -1
    }
    
    let current, counter, nextOfCurrent, newNode

    current = this.head
    counter = 0

    while(counter <= index){
      if(counter == index){

        //1. Keep current's next node for newNode's next
        nextOfCurrent = current.next

        //2. Make new node
        //prev : current
        //next : nextOfCurrent
        newNode = new Node(value, current, nextOfCurrent)
        
        //3. Link nextOfCurrent's prev to newNode
        nextOfCurrent.prev = newNode

        //4. Link current's next ro newNode
        current.next = newNode

        //Increse counter
        counter++
        
        return
      }
      current = current.next
      counter++
    }
  }

  delete(index){
    if(index > this.length){
      return -1
    }

    let current, counter, nextOfCurrent, prevOfCurrent

    current = this.head
    counter = 0

    while(counter <= index){
      if(counter == index){

        //1. Keep current's prev node
        prevOfCurrent = current.prev
        
        //2. Keep current's next node
        nextOfCurrent = current.next

        //3. Link nextOfCurrent's prev to prevOfCurrent
        nextOfCurrent.prev = prevOfCurrent

        //4. Link prevOfCurrent's prev to prevOfCurrent
        prevOfCurrent.next = nextOfCurrent

        //Decrese counter
        counter--
        
        return
      }
      current = current.next
      counter++
    }
    
  }
}

const list = new DoubleLinkedList()
list.prepend('d')
list.prepend('c')
list.prepend('b')
list.prepend('a')

// list.append('3')
// list.append('2')
// list.append('1')

// list.insert('n', 1)

// list.delete(1)

console.log(list)