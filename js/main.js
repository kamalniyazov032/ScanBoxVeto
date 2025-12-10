// Scroll zamanı aktiv ikonun dəyişməsi
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".side-nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 120;
    if (pageYOffset >= secTop) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});
