window.onerror = function(message, source, lineno, colno, error) {
    console.error('Global error:', { message, source, lineno, colno, error });
};

document.addEventListener('error', function(e) {
    var elem = e.target;
    if (elem.tagName.toLowerCase() === 'img' || elem.tagName.toLowerCase() === 'script') {
        console.error('Failed to load resource:', elem.src);
    } else if (elem.tagName.toLowerCase() === 'link') {
        console.error('Failed to load resource:', elem.href);
    }
}, true);

document.addEventListener('DOMContentLoaded', () => {
    loadFooter();
    loadCustomerReviews();
    implementLazyLoading();
    initializeHeroCarousel();
});

function loadFooter() {
    document.getElementById('main-footer').innerHTML = `
        <div class="social-icons">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="newsletter">
            <h3>Join the Tactical Community</h3>
            <input type="email" placeholder="Enter your email">
            <button class="cta-button">Subscribe</button>
        </div>
        <nav>
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
        </nav>
        <p>&copy; 2024 NodPod. All rights reserved.</p>
    `;
}

function loadCustomerReviews() {
    const reviewSlider = document.querySelector('.review-slider');
    const reviews = [
        { text: "NodPod's gear has been a game-changer for our night operations. Highly recommended!", author: "John D., Special Ops" },
        { text: "The quality and durability of NodPod products are unmatched. Worth every penny!", author: "Sarah M., Law Enforcement" }
    ];

    reviews.forEach(review => {
        const reviewSlide = document.createElement('div');
        reviewSlide.className = 'review-slide';
        reviewSlide.innerHTML = `
            <q>${review.text}</q>
            <p>${review.author}</p>
        `;
        reviewSlider.appendChild(reviewSlide);
    });
}

function implementLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    }, options);

    images.forEach(img => imageObserver.observe(img));
}

function initializeHeroCarousel() {
    const carousel = document.querySelector('.hero-carousel');
    const images = carousel.querySelectorAll('img');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Auto-advance the carousel every 5 seconds
    setInterval(nextImage, 5000);
}
