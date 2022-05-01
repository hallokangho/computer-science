let data = [1, 2, 10, 5, 4, 3];
console.log("NON-SORTED : ", data)

for(let i=0; i<data.length; i++){
  for(let j=0; j<data.length; j++){
    if(data[j+1] < data[j]){
      let temp = data[j+1]
      data[j+1] = data[j]
      data[j] = temp
    }
  }
}

console.log("SORTED : ", data)