const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.nav__off-screen-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.btn__menu--close');

function toggleMenu() {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}

hamMenu.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);