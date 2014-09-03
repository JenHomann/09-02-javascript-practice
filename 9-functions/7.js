// Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false otherwise.

function isEven(num) {
  if(num %2 == 0){
    return true;
  } else {
    return false;
  }
}

console.log(isEven(1)); // should return false
console.log(isEven(2)); // should return true