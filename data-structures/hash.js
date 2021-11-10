/*
Hash

constructor
 - array

method
 - hash(key) : generate random value in data size
 - set(key, value) : set key, value pair array inside of data array
 - get(key) : get value from data array by hashed key

*/

class Hash{
  constructor(size){
    this.data = new Array(size);
  }

  //O(n)
  _hash(key){
    let hash = 0;
    for(let i=0; i<key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash
  }

  //O(1)
  set(key, value){
    let address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = new Array();
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  //O(n)
  get(key){
    let address = this._hash(key);

    if(!this.data[address]){
      return 'Data not found';
    }

    for(let i=0; i<this.data[address].length; i++){
      if(this.data[address][i][0] === key){
        return this.data[address][i][1];
      }
    }
  }
}

const hash = new Hash(3);
console.log(hash.set('apple', 1));
console.log(hash.set('nike', 20));
console.log(hash.set('coke', 1000));
console.log(hash.set('run', 1200));

console.log(hash.get('apple'));