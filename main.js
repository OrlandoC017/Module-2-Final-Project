const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.nav__off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});


// Close menu when clicking overlay
menuOverlay.addEventListener('click', () => {
  hamMenu.classList.remove('active');
  offScreenMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
});