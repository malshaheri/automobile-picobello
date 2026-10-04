const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

// Mobile menu
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Menü schließen" : "Menü öffnen",
    );
  });

  // Close menu after selecting a navigation link
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Menü öffnen");
    });
  });

  // Close menu when resizing back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 780) {
      mainNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Menü öffnen");
    }
  });
}

// Highlight current opening day
const days = [
  ".sunday",
  ".monday",
  ".tuesday",
  ".wednesday",
  ".thursday",
  ".friday",
  ".saturday",
];

const currentDay = document.querySelector(days[new Date().getDay()]);

if (currentDay) {
  currentDay.id = "activerow";
}

// Automatic copyright year
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
