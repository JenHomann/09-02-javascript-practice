// Write a program which prompts the user for an integer and outputs whether that integer is even or odd. (Hint: even numbers have a remainder of 0 when divided by 2; odd numbers have a remainder of 1 when divided by 2.)

num = prompt("Please input a number.")
if(num % 2 == 0){
  alert(num + " is an even number.");
} else {
  alert(num + " is an odd number.");
}