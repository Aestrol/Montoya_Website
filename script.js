const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const date = this.querySelector('input[type="date"]').value;
        const message = this.querySelector('textarea').value;

        if (!email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }

        if (!phone.match(/^09\d{9}$/)) {
            alert('Please enter a valid Philippine phone number (09XXXXXXXXX)');
            return;
        }

        const selectedDate = new Date(date);
        const today = new Date();
        if (selectedDate <= today) {
            alert('Please select a future date');
            return;
        }

        if (message.length < 10) {
            alert('Message must be at least 10 characters long');
            return;
        }

        alert('Message sent successfully!');
        this.reset();
    });
}

const hobbiesList = document.querySelectorAll('#hobbies li');
hobbiesList.forEach(li => {
    li.addEventListener('click', function() {
        this.classList.toggle('completed');
    });
});

const profilePic = document.querySelector('.profile');
if (profilePic) {
    profilePic.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    profilePic.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}