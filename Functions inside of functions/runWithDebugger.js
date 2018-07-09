// example function for debuggin purposes
function logTenNumbers() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}

// insert any function as parameter to automatically debug that function
function runWithDebugger(myFunction) {
  debugger;
  myFunction();
}