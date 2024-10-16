document.addEventListener('DOMContentLoaded', function() {
    const dealerList = document.getElementById('dealer-list');

    const dealers = [
        {
            name: "HCC Tactical",
            website: "https://www.hcctac.com/",
            description: "Specialized in high-end tactical gear and training."
        },
        {
            name: "Uprise Armory LLC",
            website: "https://www.uprisearmory.com",
            description: "Premium firearms and tactical equipment supplier."
        }
    ];

    dealers.forEach(dealer => {
        const dealerElement = document.createElement('div');
        dealerElement.classList.add('dealer', 'tactical-card');
        dealerElement.innerHTML = `
            <div class="tactical-header">
                <h2>${dealer.name}</h2>
                <div class="tactical-icon"></div>
            </div>
            <p class="tactical-description">${dealer.description}</p>
            <a href="${dealer.website}" target="_blank" class="tactical-button">Infiltrate Website</a>
        `;
        dealerList.appendChild(dealerElement);
    });
});
