document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validation rules
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        return;
    }

    if (phone === '' || isNaN(phone) || phone.length < 10) {
        alert('Please enter a valid phone number (at least 10 digits).');
        return;
    }

    // If all validations pass, show a success message
    alert('Thank you for contacting us! We will get back to you soon.');
    document.getElementById('contactForm').reset(); // Clear the form
});