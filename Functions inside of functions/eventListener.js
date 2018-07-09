window.addEventListener('load', function() {
  var headerElement = document.querySelector('h1');
  headerElement.addEventListener('click', function(event) {
    console.log(event);
    console.log('The header element was clicked');
  });
});
