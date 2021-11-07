## Big-O

### Rule
1.Worst case
```javascript
function findTarget(target){
  for(let i=0; i<elements.length; i++){
    if(target == elements[i]){
      console.log('Target found: ' + i);
      break;
    }
  }
}

// O(n) --> Linear Time
// 값을 1회 만에 찾더라도 최악의 경우 기준으로 표기
```

<br>

2.Remove constants
```javascript
function findTarget(target){
  //O(n)
  for(let i=0; i<elements.length; i++){
    if(target == elements[i]){
      console.log('Target1 found: ' + i);
      break;
    }
  }

  //O(n)
  for(let i=0; i<elements.length; i++){
    if(target == elements[i]){
      console.log('Target2 found: ' + i);
      break;
    }
  }  
}

//loop가 2회 반복되어 O(2n)이지만, constants 제외 후 O(n)으로 표기
```


<br>

3.Drop the less significant terms
```javascript
function findTarget(target){
  //O(n)
  for(let i=0; i<elements.length; i++){
    if(target == elements[i]){
      console.log('Target1 found: ' + i);
      break;
    }
  }

  //O(n2)
  for(let i=0; i<elements.length; i++){
    for(let j=0; j<elements.length; j++){
      console.log('Print loop:', i, j);
    }      
  }  
}

//O(n + n2)이지만, O(n2)으로 표기
```
