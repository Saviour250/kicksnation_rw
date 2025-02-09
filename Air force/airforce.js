function enlargeProduct(id) {
    const sneakerCard = document.getElementById(id);
    const enlargedView = document.getElementById('enlarged-view');
    
    // Clear the existing content in the enlarged view
    enlargedView.innerHTML = '';

    // Clone the clicked product and add it to the enlarged view
    const clonedCard = sneakerCard.cloneNode(true);
    enlargedView.appendChild(clonedCard);

    // Show the enlarged view
    enlargedView.style.display = 'block';
}

// Close the enlarged view when clicking outside (optional)
document.addEventListener('click', (event) => {
    const enlargedView = document.getElementById('enlarged-view');
    if (!enlargedView.contains(event.target) && !event.target.classList.contains('sneaker-card')) {
        enlargedView.style.display = 'none';
    }
});
const products = [
    {
    ordernow: 'https://wa.me/+250787463120?text=I%20am%20interested%20in%20Product%201'
    }
];
    const productsContainer = document.getElementById('products');

    const ordernow = document.createElement('a');
    ordernow.href = product.ordernow;
    ordernow.textContent = 'Contact on WhatsApp';
    ordernow.classList.add('whatsapp-link');
    productDiv.appendChild(ordernow);
    
    productsContainer.appendChild(productDiv);
;