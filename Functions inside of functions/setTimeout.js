function setup() {
  
}

setTimeout(function() {
  console.log('Wake up!');
}, 5000)

// Event that waits for page to load
window.addEventListener('load', setup);