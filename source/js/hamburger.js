"use strict";

(function () {
  var hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", function (event) {
    event.preventDefault();
    //    //        topHeader.classList.toggle("top-header--expand");
    //    //        mainNav.classList.toggle("main-nav--open");
    hamburger.classList.toggle("active");
  });
})();
