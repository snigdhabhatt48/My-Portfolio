// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
let darkMode = false;

themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.documentElement.style.setProperty('--bg-color', '#050336');
    document.documentElement.style.setProperty('--text-color', 'white');
  } else {
    document.documentElement.style.setProperty('--bg-color', '#f9f9f9');
    document.documentElement.style.setProperty('--text-color', '#333');
  }
});

// Contact form submission handling
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector('textarea').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset();
  } else {
    alert('Please fill out all fields before submitting.');
  }
});
