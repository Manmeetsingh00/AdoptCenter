const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-right');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});


const careCostForm = document.getElementById('care-cost-form');
const careCostResult = document.getElementById('care-cost-result');

careCostForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const petType = document.getElementById('pet-type').value;
  let monthlyCost;

  switch (petType) {
    case 'dog':
      monthlyCost = 500;
      break;
    case 'cat':
      monthlyCost = 300;
      break;
    case 'small-animal':
      monthlyCost = 100;
      break;
    default:
      monthlyCost = 0;
  }

  careCostResult.textContent = `The estimated monthly cost for a ${petType} is $${monthlyCost}.`;
});


const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  
  alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');

  
  contactForm.reset();
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
  // Select all elements you want to animate
  const elements = document.querySelectorAll('.pet-card, #adoption-process, #care-cost, #contact, .heroconttent');
  
  // Add the hidden class initially
  elements.forEach(element => {
    element.classList.add('hidden');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1 // Determines how much of the element should be visible before triggering
  });

  // Observe each element
  elements.forEach(element => {
    observer.observe(element);
  });
});