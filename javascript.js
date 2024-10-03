//textAnimation
const elements = document.querySelectorAll('[id^="am"]');

window.addEventListener('scroll', () => {
  const vh = window.innerHeight - 100;

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const animationClass = `animate${element.id.replace('am', '')}`;

    if (rect.top <= vh) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
});

//flotaingNav
const floatingNav = document.getElementById('floating-nav');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > document.querySelector('.landing').offsetHeight) {
    floatingNav.classList.add('show');
  } else {
    floatingNav.classList.remove('show');
  }
});

//Modals
// Get all modal trigger buttons
const modalTriggers = document.querySelectorAll('.modal-trigger');

modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    const modalId = trigger.getAttribute('data-modal');
    const modal = document.getElementById(modalId);

    modal.style.display = 'block';
  });
});

// Add event listener to each modal close button
const modalCloseButtons = document.querySelectorAll('.modal-close');

modalCloseButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the modal window ID from the parent element
    const modalId = button.parentNode.parentNode.id;
    const modal = document.getElementById(modalId);

    // Hide the modal window
    modal.style.display = 'none';
  });
});

//lightMode
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('lightMode') === 'enabled') {
  body.classList.add('light-mode');
  modeToggle.checked = true;
}

modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    body.classList.add('light-mode');
    localStorage.setItem('lightMode', 'enabled');
  } else {
    body.classList.remove('light-mode');
    localStorage.setItem('lightMode', 'disabled');
  }
});