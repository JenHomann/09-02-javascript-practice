// Learn how to use the compound assignment operators. What do they do?
// += -> adds a given number to the variable and assigns the sum to the variable
// -= -> subtracts a given number from a variable and assigns it to the variable
// *= -> multiplies a given number to the variable and assigns the new value to the variable
// /= -> divides a given number from a variable and assigns the new value to the variable
// %= -> divides a given number from a variable and assigns the remainder to the variable

var num = 10

console.log(num += 2)
console.log(num) // should return 12

num1 = 10

console.log(num1 -= 2)
console.log(num1) // should return 8

num1 = 10

console.log(num1 *= 2)
console.log(num1) // should return 20

num1 = 10

console.log(num1 /= 2)
console.log(num1) // should return 5

num = 10

console.log(num %= 2)
console.log(num) // should return 0