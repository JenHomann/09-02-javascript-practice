// Write a program which asks the user to enter a "password" (hardcoded in the code itself). After three unsuccessful tries, the program should exit.

var password = "apple"

var pwdEntry = prompt("Please enter your password.")

var count = 1
while(count < 3 ){
  if (pwdEntry != password){
    prompt("Please try again.");
    count++;
  }
}

alert("You have made too many attempts. You are now locked out, sucker.")
