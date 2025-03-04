document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  // Navbar Background Change on Scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("shadow-lg");
    } else {
      navbar.classList.remove("shadow-lg");
    }
  });

  // Fade-in Effect for Sections
  const sections = document.querySelectorAll(".fade-in, .slide-up");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section));

  // Hover Effect on Donate Button
  const donateBtn = document.querySelector(".glow-btn");
  donateBtn.addEventListener("mouseenter", () => {
    donateBtn.style.boxShadow = "0 0 20px #ff9800";
  });
  donateBtn.addEventListener("mouseleave", () => {
    donateBtn.style.boxShadow = "0 0 10px #ff5722";
  });
});
function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => (document.getElementById(id).innerHTML = data))
    .catch((error) => console.error(`Error loading ${file}:`, error));
}

// Load navbar and footer
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("navbar-container", "navbar.html");
  loadComponent("footer-container", "footer.html");
});
