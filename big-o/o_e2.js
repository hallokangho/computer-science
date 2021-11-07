//Log all pairs of array
const numbers = ['a', 'b', 'c'];

function logAllPairs(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      console.log(arr[i], arr[j]);
    }
  }
}

logAllPairs(numbers); //O(n^2)