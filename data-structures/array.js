/*
Array test

constructor
 - length : int
 - data : object

method
 - get()
 - push(item)
 - pop()
 - delete(index) 
*/

//O(n)
class ArrayTest{
  constructor(){
    this.length = 0;
    this.data = {};
  }

  //O(1)
  get(){
    return this.data;
  }

  //O(1)
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  //O(1)
  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  //O(n)
  delete(index){
    this.shift(index);
    this.length--;
    return this.data;
  }

  shift(index){
    for(let i=index; i<this.length; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
  }

}

const array = new ArrayTest();
array.push('a');
array.push('b');
array.push('c');
console.log(array.get());
console.log(array.delete(0));
console.log(array.pop());
console.log(array.get());