const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('menu-show');
});
