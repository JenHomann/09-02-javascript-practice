//Write a program which prompts the user for a number, outputs "Valid" if the number is positive, or "Invalid" if the number is less than or equal to zero.
num = prompt("Please enter a number.")
if(num > 0){
  alert("Valid");
} else if (num <= 0){
  alert("Invalid");
}