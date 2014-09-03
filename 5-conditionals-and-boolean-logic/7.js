// Optional: Write a program which asks the user for 3 numbers and sorts them from least to greatest using nothing but if, elsif and else statements. Output the result.

num1 = prompt("Please input a number.")
num2 = prompt("Please input another number.")
num3 = prompt("Please input a third number.")

if(num1 >= num2 && num2 >= num3) {
  alert(num3 + ", " + num2 + ", " + num1);
} else if (num1 >= num3 && num3 >= num2) {
  alert(num2 + ", " + num3 + ", " + num1);
} else if (num2 >= num1 && num1 >= num3){
  alert(num3 + ", " + num1 + ", " + num2);
} else if (num2 >= num3 && num3 >= num1) {
  alert(num1 + ", " + num3 + ", " + num2);
} else if (num3 >= num2 && num2 >= num1) {
  alert(num1 + ", " + num2 + ", " + num3);
} else if (num3 >= num1 && num1 >= num2){
  alert(num2 + ", " + num1 + ", " + num3);
}