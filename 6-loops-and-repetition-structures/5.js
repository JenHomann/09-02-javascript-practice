// Write a program which, for any positive integer n, figures out n factorial. For example, 7 factorial is 7 * 6 * 5 * 4 * 3 * 2 * 1.

var factorial = prompt("Please input any positive integer.")
for(num = factorial; num - 1 > 0; num--) {
  factorial = factorial * (num - 1);
  console.log(factorial);
}