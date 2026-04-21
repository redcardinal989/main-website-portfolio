
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

let slideIndex = 1;
let watchlistSlideIndex = 1;

// Initialize both carousels
showSlides(slideIndex);
showWatchlistSlides(watchlistSlideIndex);

// Restaurants Carousel Functions
function plusSlides(n) {
  showSlides(slideIndex += n); 
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slideshow-container:not(.watchlist-carousel) .mySlides");
  let dots = document.querySelectorAll(".dots-container:not(.watchlist-dots) .dot");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  if (slides.length > 0) {
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
}

// Watchlist Carousel Functions
function plusWatchlistSlides(n) {
  showWatchlistSlides(watchlistSlideIndex += n); 
}

function currentWatchlistSlide(n) {
  showWatchlistSlides(watchlistSlideIndex = n);
}

function showWatchlistSlides(n) {
  let i;
  let slides = document.querySelectorAll(".watchlist-carousel .watchlist-slide");
  let dots = document.querySelectorAll(".watchlist-dots .watchlist-dot");
  
  if (n > slides.length) {watchlistSlideIndex = 1}    
  if (n < 1) {watchlistSlideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  if (slides.length > 0) {
    slides[watchlistSlideIndex-1].style.display = "block";  
    dots[watchlistSlideIndex-1].className += " active";
  }
}
