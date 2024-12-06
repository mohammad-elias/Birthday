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


//  const videoPopup = document.getElementById('videoPopup');
//     const closePopupBtn = document.getElementById('closePopup');

//     openVideoBtn.addEventListener('click', () => {
//         videoPopup.style.display = 'flex';
//     });document.addEventListener('DOMContentLoaded', () => {
//     const openVideoBtn = document.getElementById('openVideo');
   

//     closePopupBtn.addEventListener('click', () => {
//         videoPopup.style.display = 'none';
//     });

//     videoPopup.addEventListener('click', (event) => {
//         if (event.target === videoPopup) {
//             videoPopup.style.display = 'none';
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const openVideoBtn = document.getElementById('openVideo');
    const videoPopup = document.getElementById('videoPopup');
    const closePopupBtn = document.getElementById('closePopup');
    const birthdayVideo = document.getElementById('birthdayVideo');
    const downloadVideoBtn = document.getElementById('downloadVideo');
    const fullscreenVideoBtn = document.getElementById('fullscreenVideo');

    // Open popup
    openVideoBtn.addEventListener('click', () => {
        videoPopup.style.display = 'flex';
    });

    // Close popup
    closePopupBtn.addEventListener('click', () => {
        videoPopup.style.display = 'none';
    });

    // Close popup when clicking outside of the video content
    videoPopup.addEventListener('click', (event) => {
        if (event.target === videoPopup) {
            videoPopup.style.display = 'none';
        }
    });

    // Download video
    downloadVideoBtn.addEventListener('click', () => {
        const videoSrc = birthdayVideo.querySelector('source').src;
        const a = document.createElement('a');
        a.href = videoSrc;
        a.download = 'Happy_Birthday.mp4';
        a.click();
    });

    // Fullscreen video
    fullscreenVideoBtn.addEventListener('click', () => {
        if (birthdayVideo.requestFullscreen) {
            birthdayVideo.requestFullscreen();
        } else if (birthdayVideo.webkitRequestFullscreen) { // Safari
            birthdayVideo.webkitRequestFullscreen();
        } else if (birthdayVideo.msRequestFullscreen) { // IE/Edge
            birthdayVideo.msRequestFullscreen();
        }
    });
});


