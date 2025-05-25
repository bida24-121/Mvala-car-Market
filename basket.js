document.querySelectorAll('.buy-now-btn').forEach(button => {
  button.addEventListener('click', function () {
    const car = {
      id: this.dataset.id,
      name: this.dataset.name,
      price: this.dataset.price
    };

    // Retrieve existing basket or initialize
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    // Add the selected car to the basket
    basket.push(car);

    // Save the updated basket to local storage
    localStorage.setItem('basket', JSON.stringify(basket));

    // Redirect to the basket page
    window.location.href = 'basket.html';
  });
});
