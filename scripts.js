// ===============================
// DOM Ready
// ===============================
document.addEventListener("DOMContentLoaded", () => {

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
        navbar.style.boxShadow =
            window.scrollY > 50 ? '0 4px 15px rgba(0,0,0,0.3)' : 'none';
    });

    // ===============================
    // Mobile Menu Toggle ✅
    // ===============================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('navbar-ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu after clicking link (mobile)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // ===============================
    // Hire Me Button
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
    // Typing Animation
    // ===============================
    const textArray = [
        "Backend Engineer",
        "Django Developer",
        "Student | DMPI",
        "Open to Internship"
    ];

    const typingElement = document.getElementById("typing");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = textArray[textIndex];

        if (!isDeleting) {
            typingElement.textContent = currentText.slice(0, ++charIndex);
            if (charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 1000);
            }
        } else {
            typingElement.textContent = currentText.slice(0, --charIndex);
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
            }
        }
        setTimeout(typeEffect, isDeleting ? 120 : 200);
    }

    typeEffect();
});
