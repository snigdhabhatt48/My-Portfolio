// Script to handle page navigation and transitions
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
  document.getElementById(pageId).classList.add('slide-in');
  setTimeout(() => {
    pages.forEach(page => page.classList.remove('slide-in'));
  }, 500);
}

// Theme changer
function changeTheme() {
  document.body.classList.toggle('dark-theme');
  const themeButtonIcon = document.querySelector('.theme-button i');
  if (document.body.classList.contains('dark-theme')) {
    themeButtonIcon.className = 'fas fa-sun';
  } else {
    themeButtonIcon.className = 'fas fa-moon';
  }
}

// Initialize contact form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
  });
}

// Add dark theme class toggle in CSS
if (!document.querySelector('style[data-theme-toggle]')) {
  const style = document.createElement('style');
  style.dataset.themeToggle = true;
  style.textContent = `
    body.dark-theme {
      background-color: #333;
      color: white;
    }
    aside.dark-theme {
      background-color: #222;
    }
  `;
  document.head.appendChild(style);
}
