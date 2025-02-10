let currentThemeIndex = 0;
const themes = ['theme-blue', 'theme-green', 'theme-purple', 'theme-red', 'theme-dark', 'theme-light'];

// Function to show specific page section with animation
function showPage(pageId) {
  document.querySelectorAll('section.page').forEach(section => {
    section.classList.add('hidden');
    section.classList.remove('slide-in');
  });
  const targetPage = document.getElementById(pageId);
  targetPage.classList.remove('hidden');
  targetPage.classList.add('slide-in');
  animatePage(targetPage);
}

// Function to change theme color
function changeTheme() {
  const main = document.getElementById('content');
  main.classList.remove(...themes);
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  main.classList.add(themes[currentThemeIndex]);
  applyThemeFeedback();
}

// Apply feedback when changing theme
function applyThemeFeedback() {
  const body = document.querySelector('body');
  body.style.transition = 'background-color 0.5s, color 0.5s';
}

// Animation effect for pages
function animatePage(targetPage) {
  targetPage.style.opacity = 0;
  setTimeout(() => {
    targetPage.style.transition = 'opacity 0.6s ease';
    targetPage.style.opacity = 1;
  }, 50);
}

// Navigation button hover effects
function setupNavigationHoverEffects() {
  const buttons = document.querySelectorAll('aside button');
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = '#666';
      button.style.transform = 'scale(1.05)';
      button.style.transition = 'transform 0.2s, background-color 0.2s';
    });
    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = '#444';
      button.style.transform = 'scale(1)';
    });
  });
}

// Initialize navigation hover effects
setupNavigationHoverEffects();
