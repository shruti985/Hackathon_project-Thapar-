// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.innerHTML = navLinks.classList.contains("active")
    ? '<i data-lucide="x"></i>'
    : '<i data-lucide="menu"></i>';
  lucide.createIcons();
});


// Wait for the whole page to load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
window.addEventListener('load', () => {
  // Wait a moment for animation to finish
  setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.style.opacity = 0;
    splash.style.transition = 'opacity 0.5s ease-out';
    setTimeout(() => splash.style.display = 'none', 500);
  }, 2000); // match animation duration
});
