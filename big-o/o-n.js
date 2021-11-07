const target = 'a';
const elements = ['c', 'b', 'a']

function findTarget(target){
  for(let i=0; i<elements.length; i++){
    if(target == elements[i]){
      console.log('Target found: ' + i)
    }
  }
}

findTarget(target); // O(x) --> Linear Time