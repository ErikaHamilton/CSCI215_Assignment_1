var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("courseSlide");
  var coursenavs = document.getElementsByClassName("coursenav");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < coursenavs.length; i++) {
      coursenavs[i].className = coursenavs[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  coursenavs[slideIndex-1].className += " active";
}
