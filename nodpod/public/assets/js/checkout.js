document.addEventListener('DOMContentLoaded', function() {
    const showCouponLink = document.getElementById('show-coupon');
    const couponForm = document.getElementById('coupon-form');
    const shipDifferentCheckbox = document.getElementById('ship-different');
    const shippingForm = document.getElementById('shipping-form');
    const placeOrderBtn = document.getElementById('place-order');
    const paymentOptions = document.querySelectorAll('.payment-option');

    showCouponLink.addEventListener('click', function(e) {
        e.preventDefault();
        couponForm.style.display = couponForm.style.display === 'none' ? 'flex' : 'none';
    });

    shipDifferentCheckbox.addEventListener('change', function() {
        shippingForm.style.display = this.checked ? 'block' : 'none';
    });

    placeOrderBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (validateForm()) {
            processOrder();
        }
    });

    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    function validateForm() {
        // Add your form validation logic here
        return true;
    }

    function processOrder() {
        // Add your order processing logic here
        console.log('Processing order...');
        alert('Thank you for your order!');
    }

    // Populate order summary
    populateOrderSummary();
});

function populateOrderSummary() {
    const orderItems = document.getElementById('order-items');
    const orderTotals = document.getElementById('order-totals');

    // This is a placeholder. In a real application, you'd fetch this data from the server or local storage
    const items = [
        { name: 'NodPod V1', quantity: 1, price: 99.99 },
        { name: 'NodPod V2', quantity: 1, price: 109.99 },
    ];

    let itemsHtml = '<tr><th>Product</th><th>Subtotal</th></tr>';
    let subtotal = 0;

    items.forEach(item => {
        const itemTotal = item.quantity * item.price;
        subtotal += itemTotal;
        itemsHtml += `
            <tr>
                <td>${item.name} × ${item.quantity}</td>
                <td>$${itemTotal.toFixed(2)}</td>
            </tr>
        `;
    });

    orderItems.innerHTML = itemsHtml;

    const shipping = 5.50;
    const tax = subtotal * 0.08; // Assuming 8% tax rate
    const total = subtotal + shipping + tax;

    orderTotals.innerHTML = `
        <tr>
            <th>Subtotal</th>
            <td>$${subtotal.toFixed(2)}</td>
        </tr>
        <tr>
            <th>Shipping</th>
            <td>$${shipping.toFixed(2)}</td>
        </tr>
        <tr>
            <th>Tax</th>
            <td>$${tax.toFixed(2)}</td>
        </tr>
        <tr>
            <th>Total</th>
            <td>$${total.toFixed(2)}</td>
        </tr>
    `;
}
