let data = [1, 2, 10, 5, 4, 3];
console.log("NON-SORTED : ", data)

let minIndex, temp

//Loop iterating from 0 to target array-1
for(let i=0; i<data.length-1; i++){
  for(let j=i+1; j<data.length; j++){

    //Find index of minimum value and select
    if(data[i] > data[j]){
      minIndex = j
    }
  }

  //If minimum value less then current one, change value
  if(data[i] > data[minIndex]){
    temp = data[i]
    data[i] = data[minIndex]
    data[minIndex] = temp

    console.log("i: ", data[i])
  }
}

console.log("SORTED : ", data)