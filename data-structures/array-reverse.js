/*
Array reverse
*/

// with forloop
function reverse(str){
  let lastIndex = str.length-1;
  let reversed = [];

  for(let i=lastIndex; i>=0; i--){
    reversed.push(str[i]);
  }

  return reversed.join('');
}

/* 
with methods
 - split
 - reverse
 - join
*/
function reverse1(str){
  return str.split('').reverse().join('');
}

/*
Ternary operator
Recursion
*/
function reverse2(str) {
  return (str === '') ? '' : reverse2(str.substr(1)) + str.charAt(0);
}

/*
Recursion
*/
function reverse3(str){
  if(str === ''){
    return '';
  }else{
    return reverse3(str.substr(1))+str.charAt(0);
  }
}

const arr = 'abc';
console.log(reverse3(arr));