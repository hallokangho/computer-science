/*
1. Get value from first index of array
2. Check empty array
3. Compare each array value and append to result.
*/

function mergeSorted(array1, array2){
  let item1 = array1[0];
  let item2 = array2[0];
  let merged = [];
  let i = 1;
  let j = 1;

  //Check empty array
  if(item1 == '' || item2 == ''){
    return 'Empty array';
  }

  //Compare each array value and append to result
  while(item1 || item2){
    // console.log(item1, item2);
    // console.log(merged);

    if(!item2 || item1 < item2){
      merged.push(item1);
      item1 = array1[i];
      i++;
    }else{
      merged.push(item2);
      item2 = array2[j];
      j++;
    }
  }

  return merged;
}

console.log(mergeSorted([1,5,7],[4,5,6]));