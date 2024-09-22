// Get elements
const chatLauncher = document.querySelector('.chat-launcher');
const chatWidget = document.querySelector('.chat-widget');
const closeBtn = document.querySelector('.close-btn');

// Toggle chat widget on click
chatLauncher.addEventListener('click', function() {
  chatWidget.classList.toggle('show');
});

// Close chat widget
closeBtn.addEventListener('click', function() {
  chatWidget.classList.remove('show');
});
