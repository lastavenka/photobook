"use strict";

(function () {
  var hamburger = document.querySelector(".hamburger");
  var mainNav = document.querySelector(".main-nav");

  hamburger.addEventListener("click", function (event) {
    event.preventDefault();
    mainNav.classList.toggle("main-nav--close");
    hamburger.classList.toggle("active");
  });
})();

