// Theme toggle functionality
const themeToggleButton = document.querySelector(".theme-toggle");
const body = document.body;

// Theme toggle event listener
themeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});

// Floating WhatsApp Button scroll visibility
const whatsappButton = document.querySelector(".whatsapp-button");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    whatsappButton.style.display = "block";
  } else {
    whatsappButton.style.display = "none";
  }
});

// Contact form submission handler
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent actual form submission
  alert("Thank you for reaching out! I'll get back to you soon.");
  contactForm.reset();
});

// Social media icon hover effects
const socialIcons = document.querySelectorAll(".social-icons a");
socialIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "scale(1.2)";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "scale(1)";
  });
});

// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});
