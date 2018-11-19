var navButton = document.querySelector('.open-icon');
navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document
    .querySelector('body')
    .classList
    .toggle('open-about');
});

var closeButton = document.querySelector('.close-icon');
closeButton.addEventListener('click', function() {
  console.log('close it!');
  document
    .querySelector('body')
    .classList
    .toggle('open-about');
});
