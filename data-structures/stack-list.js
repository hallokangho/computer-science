//STACK WITH SINGLY LINKED LIST
//LIFO (last in, first out)

class List{
  constructor(data, next){
    this.data = data
    this.next = next
  }
}

class Stack{
  constructor(){
    this.head = null
    this.size = 0    
  }

  //O(1)
  push(itam){
    if(this.size == 0){
      this.head = new List(itam, null)
    }else{
      this.head = new List(itam, this.head)
    }
    
    this.size++
    return
  }

  //O(1)
  pop(){
    let r
    if(this.size == 0){
      return "underflow error"
    }else{
      r = this.head.data
      this.head = this.head.next
    }
    this.size--
    return r
  }
}

const stack = new Stack()
stack.push('a')
stack.push('b')
stack.push('c')
console.log(stack.pop())

console.log(stack)