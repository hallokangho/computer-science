//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,3,4,5]:
//It should return undefined

//with nestd for loop O(n^2)
function nestedForLoop(array){
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
      console.log('compair : ', i, j);
      if(i !== j){
        if(array[i] == array[j]) {
          return array[i];
        }      
      }
    }
  }
  return undefined;
}

// console.log(nestedForLoop([2,5,1,2,3,5,1,2,4]));

//with map O(n) for recurring 
function map(array){
  let map = {};
  for(let i=0; i<array.length; i++){
    if(map[array[i]]){
      return array[i];
    }else{
      map[array[i]] = array[i];
    }
  }
  return map;
}

//console.log(map([1,1,2,4,3,0]));