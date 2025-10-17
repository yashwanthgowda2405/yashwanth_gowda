document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("navToggle");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  if (toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});