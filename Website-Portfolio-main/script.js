
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', function() {
  mobileMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});


document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
