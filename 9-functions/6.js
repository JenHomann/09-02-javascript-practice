//Modify sum_these_numbers (written before) so that instead of printing the sum, it returns the sum back to where the method was called. Print the sum (calculated by the method) to the screen, but don't do that printing inside of the method.

var sum = 0
function sumTheseNumbers(a, b){
  sum = a + b;
  return sum;
}

sumTheseNumbers(1, 2);
console.log(sum);

// i think that is what i was supposed to do??