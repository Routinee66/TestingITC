const menuToggle = document.querySelector('.paling-navbar');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
}); 