document.getElementById('learnMore').addEventListener('click', () => {
  window.location.href = '#about';
});

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you for your message!');
});
