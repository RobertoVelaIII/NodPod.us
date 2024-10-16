document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        console.log('Product grid found and ready for manipulation');
        // Add your product grid manipulation code here
    } else {
        console.warn('Product grid element not found');
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Product added to cart');
            // Add your add to cart logic here
        });
    });

    // Image loading logic
    const images = [
        'assets/images/project/nodpod_image_001.jpg',
        'assets/images/project/nodpod_image_002.jpg',
        'assets/images/project/nodpod_image_003.jpg',
        'assets/images/project/nodpod_image_004.jpg'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Image loaded: ${src}`);
        img.onerror = () => console.error(`Failed to load image: ${src}`);
    });

    // Add any other necessary JavaScript for the main page here
});

