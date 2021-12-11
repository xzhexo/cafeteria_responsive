let burgerButton = document.getElementById('burger-button');

let menu = document.getElementById('menu');

burgerButton.addEventListener('touchstart', function() {
  menu.classList.toggle('active')
});
