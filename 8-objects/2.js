// Learn how to create an object that contains at least one key/value pair. What is the difference between a key and a value? What types of data can be used as keys? Can you have duplicate keys in an object? What about duplicate values? What types of data can be used as values? Given a key, how do you access the corresponding value in the object? Given a value, how do you look up the keys that have that value? How would you add additional keys to the object?

var person = {firstname: "Jen", lastname: "Homann", age: 30};

// the key is the property type, the value is the property itself
// any type of property can be stored as a key, written as a symbol
// you can not have duplicate keys in an object
// you CAN have duplicate values in an object
// any type of data can be used as a value
// you access a corresponding value by calling:

console.log(person.lastname); // should return "Homann" 
console.log(person["lastname"]); // should also return "Homann"

// ??