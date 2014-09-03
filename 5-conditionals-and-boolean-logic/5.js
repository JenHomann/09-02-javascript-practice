//Create a menu (perhaps for food or drinks?) which asks the user to input a number corresponding to their choice of item, and which then prints "Delivering [that item]." Use a case statement. Make sure to account for invalid inputs using an else. (Read up on case statements in JavaScript.)

order = prompt("Please enter your choice:\n1: chicken\n2: beef\n3: veggies")
switch (order) {
  case "1":
    alert("Delivering chicken.");
    break;
  case "2":
    alert("Delivering beef.");
    break;
  case "3":
    alert("Delivering veggies.");
    break;
  default:
    alert(order + " is not a valid option.");
    break;
}