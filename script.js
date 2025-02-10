// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Theme toggling functionality
const themeToggleBtn = document.getElementById("theme-toggle");
let isDarkMode = false;

function toggleTheme() {
  document.body.classList.toggle("dark-theme", isDarkMode);
  themeToggleBtn.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  isDarkMode = !isDarkMode;
}

themeToggleBtn.addEventListener("click", toggleTheme);

// Show/hide the floating WhatsApp button based on scroll position
const whatsappButton = document.querySelector(".whatsapp-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    whatsappButton.classList.add("visible");
  } else {
    whatsappButton.classList.remove("visible");
  }
});

// Handle form submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for reaching out! I'll get back to you soon.");
  contactForm.reset();
});

// Animate project cards on scroll
const projectCards = document.querySelectorAll(".project-card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.5 });

projectCards.forEach(card => observer.observe(card));

// Social media hover animations
const socialIcons = document.querySelectorAll(".social-icons a");
socialIcons.forEach(icon => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "scale(1.2)";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "scale(1)";
  });
});
