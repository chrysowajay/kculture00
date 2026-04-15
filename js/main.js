document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Initial triggers for revealing elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
    
    // Trigger hero animations right away
    setTimeout(() => {
        document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
});
