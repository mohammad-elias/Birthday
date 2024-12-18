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

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.floating-hearts');
    const heartCount = 30;

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        
        heart.style.left = `${Math.random() * 100}vw`;  
        heart.style.animationDelay = `${Math.random() * 5}s`;  
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`;  

        heart.innerText = '❤️';

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, parseFloat(heart.style.animationDuration) * 1000);
    }

    setInterval(createHeart, 300);
});


document.addEventListener('DOMContentLoaded', () => {
    const videoPopup = document.getElementById('videoPopup');
    const openVideoBtn = document.getElementById('openVideo');
    const closePopupBtn = document.getElementById('closePopup');
    const videoElement = videoPopup.querySelector('video');

    openVideoBtn.addEventListener('click', () => {
        videoPopup.style.display = 'flex';
        videoElement.play(); 
    });

    closePopupBtn.addEventListener('click', () => {
        videoPopup.style.display = 'none';
        videoElement.pause();
        videoElement.currentTime = 0; 
    });
    
    videoPopup.addEventListener('click', (event) => {
        if (event.target === videoPopup) {
            videoPopup.style.display = 'none';
            videoElement.pause(); 
            videoElement.currentTime = 0; 
        }
    });
});
