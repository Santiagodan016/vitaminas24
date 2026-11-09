document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('#main-nav .nav-link');

    if (!hamburger || !mainNav) return;

    function closeMenu() {
        mainNav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');

        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    mainNav.addEventListener('click', (event) => {
        if (event.target === mainNav) {
            closeMenu();
        }
    });
});