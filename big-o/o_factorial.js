function factorial(times){
  for(let i=0; i<times; i++){
    factorial(times-1);
    console.log('times: ', i);
  }
}

factorial(3);