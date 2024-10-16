document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const couponCodeInput = document.getElementById('coupon-code');
    const applyCouponButton = document.getElementById('apply-coupon');
    const checkoutButton = document.getElementById('checkout-button');

    let cart = [
        { id: 1, name: 'NodPod V1', price: 99.99, quantity: 1, image: 'assets/images/project/nodpod_image_010.jpg' },
        { id: 2, name: 'NodPod V2', price: 109.99, quantity: 2, image: 'assets/images/project/nodpod_image_008.jpg' },
    ];

    function renderCartItems() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                </div>
                <button class="remove-btn" data-id="${item.id}">Remove</button>
            `;
            cartItems.appendChild(itemElement);
        });
        updateTotals();
    }

    function updateTotals() {
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const shipping = 5.99; // Example shipping cost
        const tax = subtotal * 0.08; // Example tax rate of 8%
        const total = subtotal + shipping + tax;

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        shippingElement.textContent = `$${shipping.toFixed(2)}`;
        taxElement.textContent = `$${tax.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    function updateQuantity(id, change) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity = Math.max(0, item.quantity + change);
            if (item.quantity === 0) {
                cart = cart.filter(cartItem => cartItem.id !== id);
            }
            renderCartItems();
        }
    }

    function removeItem(id) {
        cart = cart.filter(item => item.id !== id);
        renderCartItems();
    }

    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('increase')) {
            updateQuantity(Number(e.target.dataset.id), 1);
        } else if (e.target.classList.contains('decrease')) {
            updateQuantity(Number(e.target.dataset.id), -1);
        } else if (e.target.classList.contains('remove-btn')) {
            removeItem(Number(e.target.dataset.id));
        }
    });

    applyCouponButton.addEventListener('click', () => {
        const couponCode = couponCodeInput.value.trim();
        if (couponCode === 'DISCOUNT10') {
            // Apply 10% discount
            const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            const discount = subtotal * 0.1;
            cart.forEach(item => {
                item.price *= 0.9;
            });
            alert('Coupon applied successfully! 10% discount added.');
            renderCartItems();
        } else {
            alert('Invalid coupon code.');
        }
    });

    checkoutButton.addEventListener('click', () => {
        alert('Proceeding to checkout...');
        // Implement checkout logic here
    });

    renderCartItems();
});
