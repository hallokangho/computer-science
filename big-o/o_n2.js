function nestedForLoop(number){
  for(let i=0; i<number; i++){
    for(let j=0; j<number; j++){
      console.log('number: ', i, j);
    }
  }
}

nestedForLoop(3);