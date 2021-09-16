// Getting Our Dom Players
let header = document.getElementsByTagName("header");
let navBtn = document.getElementById("nav-btn");
let headerBtn = document.querySelector(".header-btn");
// Event Listeners
headerBtn.addEventListener("click", function (e) {
  header[0].classList.add("show");
});
navBtn.addEventListener("click", function (e) {
  header[0].classList.toggle("show");
});
