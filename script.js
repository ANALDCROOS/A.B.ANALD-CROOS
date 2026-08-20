// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Simple hover animation with optional delay
function addHoverAnimation(selector, glowColor, delay = 0) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      setTimeout(() => {
        el.style.transition = "transform 0.4s ease, box-shadow 0.4s ease";
        el.style.transform = "scale(1.15)";
        el.style.boxShadow = `0 0 25px ${glowColor}`;
      }, delay);
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
      el.style.boxShadow = "none";
    });
  });
}

// Run after page loads
document.addEventListener("DOMContentLoaded", () => {
  // Profile photo hover (blue glow, no delay)
  addHoverAnimation(".profile-photo", "#007BFF");

  // About section photo hover (gold glow, 300ms delay)
  addHoverAnimation("#about img", "#FFD700", 300);

  // Project images hover (blue glow, no delay)
  addHoverAnimation(".project img", "#007BFF");
});




