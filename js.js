let slideIndex = 0;
let autoSlideTimeout;

// Initialize the slideshow
showSlidesAuto();

// Function for auto slideshow
function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";

  autoSlideTimeout = setTimeout(showSlidesAuto, 3000); // Change image every 2 seconds
}

// Function for manual next/previous controls
function plusSlides(n) {
  clearTimeout(autoSlideTimeout); // Reset auto-slide
  showSlides(slideIndex += n);
}

// Function for dot navigation
function currentSlide(n) {
  clearTimeout(autoSlideTimeout); // Reset auto-slide
  showSlides(slideIndex = n);
}

// Function to display a specific slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  autoSlideTimeout = setTimeout(showSlidesAuto, 1000); // Restart auto-slide
}