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


// Get all modal trigger buttons
const modalTriggers = document.querySelectorAll('.modal-trigger');

// Add event listener to each modal trigger button
modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    // Get the modal window ID from the data-modal attribute
    const modalId = trigger.getAttribute('data-modal');
    const modal = document.getElementById(modalId);

    // Show the modal window
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