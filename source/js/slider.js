'use strict';

(function () {
  var list = document.querySelector(".testimonials__list");
  var currentSlide = document.querySelector(".testimonial");
  var prev = document.querySelector(".testimonials__nav--prev");
  var next = document.querySelector(".testimonials__nav--next");
  var position = 0;

  next.addEventListener("click", function (event) {
    event.preventDefault();
    var newPosition = position - 100;
    list.style.marginLeft = newPosition + "%";
    position = newPosition;
    currentSlide = currentSlide.nextElementSibling;
    prev.classList.remove("testimonials__nav--hidden");
    if (currentSlide == list.lastElementChild) {
      next.classList.add("testimonials__nav--hidden");
    }
  });

  prev.addEventListener("click", function (event) {
    event.preventDefault();
    var newPosition = position + 100;
    list.style.marginLeft = newPosition + "%";
    position = newPosition;
    currentSlide = currentSlide.previousElementSibling;
    next.classList.remove("testimonials__nav--hidden");
    if (currentSlide == list.firstElementChild) {
      prev.classList.add("testimonials__nav--hidden");
    }
  });
})();
