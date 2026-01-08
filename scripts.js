// ===============================
// Smooth Scroll for Nav Links
// ===============================
document.querySelectorAll('nav a, footer a').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ===============================
// Active Navbar Link on Scroll
// ===============================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


// ===============================
// Navbar Shadow on Scroll
// ===============================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});


// ===============================
// Hire Me / Let's Talk Button
// ===============================
document.querySelectorAll('#hireme').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('#Contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// ===============================
// Project Cards Animation on Scroll
// ===============================
const projectCards = document.querySelectorAll('.projects-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.2 });

projectCards.forEach(card => {
    card.style.transform = 'translateY(40px)';
    card.style.opacity = '0';
    card.style.transition = '0.6s ease';
    observer.observe(card);
});
// ===============================
// Contact Form Validation + Success Animation
// ===============================

const form = document.querySelector("#contactForm form");
const nameInput = document.getElementById("name");
const emailInput = form.querySelector('input[type="email"]');
const phoneInput = form.querySelector('input[type="phone"]');
const messageInput = document.getElementById("textarea");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "") {
        showError(nameInput, "Enter your name");
        return;
    }

    if (!validateEmail(email)) {
        showError(emailInput, "Enter a valid email");
        return;
    }

    if (phone.length < 10) {
        showError(phoneInput, "Enter valid phone number");
        return;
    }

    if (message.length < 10) {
        showError(messageInput, "Message must be at least 10 characters");
        return;
    }

    // ✅ Success Animation
    successMessage.style.display = "block";

    // Reset form
    form.reset();

    // Hide message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
});

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function showError(input, message) {
    input.style.borderColor = "red";
    input.focus();
}
// ===============================
// Typing Animation
// ===============================
document.addEventListener("DOMContentLoaded", function () {

const textArray = [
    "Backend Engineer",
    "Django Developer",
    "Student | DMPI",
    "Open to Internship"
];


    const typingElement = document.getElementById("typing");

    if (!typingElement) return; // safety check

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = textArray[textIndex];

        if (!isDeleting) {
            typingElement.textContent = currentText.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 1000);
            }
        } else {
            typingElement.textContent = currentText.slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 120  : 200);
    }

    typeEffect();
});
// ===============================
// Mobile Menu Toggle
// ===============================
const menuToggle = document.getElementById('menu-toggle');
const navLinksContainer = document.getElementById('navbar-ul');

menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Close menu when a link is clicked (mobile)
navLinksContainer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
        }
    });
});
