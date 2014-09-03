// Create an array. Prompt the user for an index, then print the array element at that index. What happens if the user tries to access a non-existent array element? What happens if the user tries to use a floating point number or a word as the index?

var array = [1, 2, 3, 4, 5, 6]

var input = prompt("Please choose a number 1-7.")
console.log(array[input]);


// if they access a non-existent array element, it returns "undefined"