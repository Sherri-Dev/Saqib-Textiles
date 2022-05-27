/****************** Menu **********************/
const header = document.querySelector("header");
const menuItems = document.querySelectorAll(".nav-ul li");
const toggler = document.querySelector(".toggler");
toggler.addEventListener("click", (e) => {
  header.classList.toggle("collapsed");
  e.currentTarget.classList.toggle("fa-chevron-circle-right");
  e.currentTarget.classList.toggle("fa-chevron-circle-left");
});
// Scroll Spy
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", (e) => {
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute("id");
    }
  });
  menuItems.forEach((menuItem) => {
    menuItem.classList.remove("active");
    if (menuItem.classList.contains(current)) {
      menuItem.classList.add("active");
    }
  });
});
// Dynamic Year
const yearDiv = document.getElementById("current-year");
yearDiv.innerHTML = new Date().getFullYear();
console.log(new Date().getFullYear());
