var slideIndex = 0;
var slideshowTimer;

showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var bg = document.getElementsByTagName("body")[0];
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Move to the next slide
  slideIndex++;
  
  // Reset the slideIndex if it exceeds the number of slides
  if (slideIndex > slides.length) {slideIndex = 1}
  
  // Display the current slide
  slides[slideIndex-1].style.display = "block";
  
  // Change the background image
  bg.style.backgroundImage = "url('" + slides[slideIndex-1].querySelector("img").src + "')";
  
  // Set a timeout to show the next slide after a delay
  slideshowTimer = setTimeout(showSlides, 5000); // Change the delay (in milliseconds) as needed
}

// Function to move to the next or previous slide
function plusSlides(n) {
  clearTimeout(slideshowTimer); // Clear the timeout to stop the slideshow
  showSlides(slideIndex += n);
}

// Function to initialize the slideshow
document.addEventListener("DOMContentLoaded", function() {
  showSlides();
});
