document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.timeline-card');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.5 }
    );

    cards.forEach((card) => observer.observe(card));
});
