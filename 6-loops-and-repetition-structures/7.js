// Write a program which prompts the user for a string of text and then prints that string out vertically, i.e. one character per line.

var string = prompt("Please enter a string of text.")

for(var i = 0; i < string.length; i++){
  console.log(string.charAt(i));
}