// Simple animation for timeline items
document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });

    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');

    mobileMenu.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
});