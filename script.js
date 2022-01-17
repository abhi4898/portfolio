let open = document.querySelector("#open");
let hide = document.querySelector("#hide");
let menu = document.querySelector(".menubar");
let menuToggle = document.querySelector(".menuToggle");
open.addEventListener("click", function (e) {
  e.preventDefault();
  // menuToggle.style.animation = "navBarSlide 1s";
  if (menu.classList.contains("toggle")) {
    menu.classList.remove("toggle");
    menuToggle.classList.add("toggle");
  } else {
    menu.classList.add("toggle");
    menuToggle.classList.remove("toggle");
  }
});

hide.addEventListener("click", function (e) {
  e.preventDefault();
  if (menuToggle.classList.contains("toggle")) {
    menuToggle.classList.remove("toggle");
    menu.classList.add("toggle");
  } else {
    menuToggle.classList.add("toggle");
    menu.classList.remove("toggle");
  }
});
