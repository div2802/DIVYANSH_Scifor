document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        document.getElementById('backToTop').style.display = 'block';
    } else {
        document.getElementById('backToTop').style.display = 'none';
    }
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('All fields are required.');
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
});

document.getElementById('hamburger-menu').addEventListener('click', function () {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
});
