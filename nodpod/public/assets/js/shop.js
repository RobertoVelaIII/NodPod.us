document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hero-video');
    const soundToggle = document.getElementById('sound-toggle');
    const soundIcon = soundToggle.querySelector('i');

    video.muted = true;

    soundToggle.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            soundIcon.classList.remove('fa-volume-mute');
            soundIcon.classList.add('fa-volume-up');
        } else {
            video.muted = true;
            soundIcon.classList.remove('fa-volume-up');
            soundIcon.classList.add('fa-volume-mute');
        }
    });

    // Start playing the video when it's ready
    video.addEventListener('canplay', function() {
        video.play();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('mobile-menu-active');
    });
});
