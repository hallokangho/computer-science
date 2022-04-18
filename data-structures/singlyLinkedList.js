class Node{
  constructor(value, next){
    this.data = value
    this.next = next
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.length = 0
  }

  prepend(value){
    this.head = new Node(value, this.head)
    this.length++
    return
  }

  append(value){
    let newNode = new Node(value, null)
    let current

    if(!this.head){
      this.head = newNode
    }else{
      current = this.head
      
      while(current.next){
        current = current.next
      }

      current.next = newNode
      this.length++
      return
    }
  }

  insert(index, value){
    let current, counter
    
    if(index == 0){
      this.prepend(value)
      return
    }

    if(index > this.length){
      return -1
    }

    current = this.head
    counter = 1
      
    while(counter <= index){
      
      if(counter == index){
        current.next = new Node(value, current.next)
        return
      }
      
      current = current.next
      counter++
    }

  }

  delete(index){
    let current, counter
    
    if(index == 0){
      this.head = this.head.next
      return
    }    
    
    current = this.head
    counter = 1
      
    while(counter <= index){
      
      if(counter == index){
        current.next = current.next.next
        this.length--
        return
      }
      
      current = current.next
      counter++
    }    
  }
}

const list = new LinkedList()
list.prepend('1')
// list.prepend('2')
list.append('2')
list.append('3')
// list.append('c')

list.insert(1, 'a')
// list.delete(2)

console.log(list)
console.log(JSON.stringify(list))
