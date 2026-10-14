// SplitUdhar Website Interactions & Mobile Navigation

function toggleMobileNav() {
  const menu = document.getElementById('mobile-nav-menu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

// Highlight current active link in navigation
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
  const links = document.querySelectorAll('.nav-links a');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath !== '/' && href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('active');
    }
  });

  // Setup FAQ accordion toggles
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      if (parent) {
        parent.classList.toggle('active');
      }
    });
  });
});
