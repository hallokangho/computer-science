class CircularQueue{
  constructor(capacity){
    this.capacity = capacity
    this.list = Array(this.capacity)
    this.head = -1
    this.rear = -1
    this.size = 0
  }

  isSizeZero(){
    return this.size == 0
  }

  //Return True or False
  isFull(){
    return this.size == this.capacity
  }

  isEmpty(){
    return this.size == 0
  }

  enqueue(item){
    if(!this.isFull()){
      this.rear = (this.rear + 1) % this.capacity
      this.list[this.rear] = item
      this.size++

      if(this.head == -1){
        this.head = this.rear
      }
    }
  }

  dequeue(){
    let item
    if(!this.isEmpty()){
      item = this.list[this.head]
      this.list[this.head] = null
      this.head = (this.head + 1) % this.capacity
      this.size--

      if(this.isSizeZero()){
        this.head = -1
        this.rear = -1
      }
    }

    return item
  }
}


let cq = new CircularQueue(10)
cq.enqueue('a')
cq.enqueue('b')
// cq.dequeue()

console.log(cq)