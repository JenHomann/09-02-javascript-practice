// Write a program which prompts the user for a positive odd number, and which keeps prompting the user until they successfully input such a number.

var num = prompt("Please enter a positive, odd number.")

while(num <= 0 || num % 2 == 0) {
  num = prompt("Please try again. Enter a positive, odd number.")
}
console.log(num);