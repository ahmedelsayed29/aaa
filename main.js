const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.addEventListener('click', (event) => {
    if (event.target !== navLinks) {
        navLinks.classList.remove('active');
    }
});
