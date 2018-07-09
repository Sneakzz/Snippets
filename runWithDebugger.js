function setup() {
  console.log('page loaded');
  logTenNumbers();
}

function logTenNumbers() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}


window.addEventListener('load', setup);