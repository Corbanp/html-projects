const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if (nameInput.value === '') {
		alert('Please enter your name.');
		return;
	}

	if (emailInput.value === '') {
		alert('Please enter your email.');
		return;
	}

	if (messageInput.value === '') {
		alert('Please enter a message.');
		return;
	}

	// Code to send form data to server goes here

	alert('Your message has been submitted. Thank you!');
	nameInput.value = '';
	emailInput.value = '';
	messageInput.value = '';
});
