// Write a method which calls another method, then uses its return value.

function sum(a, b){
  return a + b;
}

function doubleSum(sum){
  return sum * 2;
}

console.log(sum(2, 3)); // should return 5
console.log(doubleSum(sum(2, 3))); // should return 10