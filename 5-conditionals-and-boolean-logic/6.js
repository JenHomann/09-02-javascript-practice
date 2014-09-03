//Prompt the user for a positive odd number. Write a program that uses a nested if-statement to determine if the user's input fulfills the conditions. Now write one that uses the logical operators (&& and/or ||) to do the same test, but in less time.

// num = prompt("Please input a positive, odd number.")
// if(num <= 0) {
//   alert("That is not a positive number!");
// } else {
//   if(num % 2 == 0){
//     alert("That is not an odd number!");
//   } else {
//     alert("Thank you! " + num + " is a valid number.");
//   }
// }

num = prompt("Please input a positive, odd numer.")
if(num > 0 && num % 2 != 0){
  alert("Thank you! " + num + " is a valid number.");
} else {
  alert(num + " is not a valid number.")
}