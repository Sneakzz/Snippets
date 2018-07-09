// creating an array to go through
var students = ['jonathan', 'jenny', 'elliot'];

// function that logs something
function logName(name) {
  console.log(name);
}

// for loop going through the array by using the previously made function
for (var i = 0; i < students.length; i++) {
  logName(students[i]);
}

// another way of going through each item in an array
students.forEach(logName);

// yet another way to pass in a function. this is the same as the above // forEach line
students.forEach(function logName(name) {
  console.log(name);
})

// same can be done as above but with a unnamed function
students.forEach(function(name) {
  console.log(name);
})

// self written forEach function with 2 parameters for passing in a array
// and a function to run that array on.
function forEach(myArray, myFunction) {
  for (var i = 0; i< myArray.length; i++) {
    myFunction(myArray[i]);
  }
}