const sizeButton = document.querySelectorAll('.size-button');
const toCart = document.getElementById('cart-added')
const cart = document.getElementById('cart')
const title = document.getElementById('title')


let count = 0;
const products = [];
toCart.addEventListener('click', () => {
    count += 1;
    cart.innerHTML = count;
    products.push(title.innerText)

})