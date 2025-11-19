document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');

    button.addEventListener('click', function() {
        messageParagraph.textContent = 'Button clicked! Hello there!';
        button.style.backgroundColor = '#28a745'; // Change button color
    });
});