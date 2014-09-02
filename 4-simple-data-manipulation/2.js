//Write a program that sets each of two variables to a number, then displays the integer quotient and integer result to the screen, like so: 7 / 3 = 2 r 1. (Hint: parseInt() in JavaScript is like to_i in Ruby.)

var num1 = 10
var num2 = 2

console.log(num1 + " / " + num2 + " = " + (parseInt(num1) / parseInt(num2)) + " r " + (parseInt(num1) % parseInt(num2)))