//STACK WITH ARRAY
//LIFO (last in, first out)

class Stack{
  constructor(){
    this.length = 0
    this.data = {}
  }

  //O(1)
  push(item){
    this.data[this.length] = item
    this.length++
    return this.data
  }

  //O(1)
  pop(){
    const lastItem = this.data[this.length-1]
    delete this.data[this.length-1]
    this.length--
    return lastItem
  }

  //O(n)
  search(value){
    for(let i=0; i<this.length; i++){
      if(this.data[i] == value){
        return console.log("Index, Data ", i, ":", value)
      }
    }
    return -1
  }

}

const stack = new Stack()
stack.push('a')
stack.push('b')
stack.push('c')

// console.log(stack)

// stack.pop()
// console.log(stack)

stack.search('b')