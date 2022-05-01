let arr = [1,4,3,2]
let i, j, current

for (i=1; i<arr.length; i++) {  
  current = arr[i]
  
  for (j=i-1; j>=0 && arr[j]>current; j--) {
    arr[j+1] = arr[j]
  }
  
  arr[j+1] = current
}

console.log("END: ", arr)