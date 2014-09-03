// Learn how to iterate through an object and print each key/value pair to the console.

var person = {firstname:"Jen", lastname:"Homann", age:30}

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + " -> " + person[key]);
  }
}