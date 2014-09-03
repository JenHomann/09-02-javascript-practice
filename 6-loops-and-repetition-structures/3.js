// Write a program that counts from 1 to 100 by 2's. Now make it work by 3's. Now have it count from 1 to 100 by any (positive) increment the user desires.

// for(num = 1; num <=100; num+=2){
//   console.log(num);
// }

// for(num = 1; num <=100; num+=3){
//   console.log(num);
// }

var x = prompt("By what number would you like me to count to 100?")
for(num = 1; num <= 100; num+=parseInt(x)){
  console.log(num);
}