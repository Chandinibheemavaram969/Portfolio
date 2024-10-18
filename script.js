document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form submitted!', { name, email, message });
    alert('Thank you for your message, ' + name + '!');

    // Clear the form fields
    document.getElementById('contact-form').reset();
});
