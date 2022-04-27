//GCD (Greatest Common Divisor)
//LCM (Least Common Multiple)

var gcd = function(n1, n2) {
  if(n2 == 0){
    return n1;
  }
  console.log(" n1: ", n1, "n2: ", n2)
  return gcd(n2, n1 % n2) // n1 MOD n2
};
//GCD
console.log(gcd(12, 18))


var lcm = function(a, b){
  return (a / gcd(a, b)) * b
}
//LCM
console.log(lcm(12, 18))