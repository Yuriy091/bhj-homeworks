document.addEventListener('DOMContentLoaded', () => {
    const products = Array.from(document.querySelectorAll('.product'));
    const cartProductsList = document.querySelector('.cart__products');

    products.forEach((product) => {
        const minusQuantityBtn = product.querySelector('.product__quantity-control_dec');
        const plusQuantityBtn = product.querySelector('.product__quantity-control_inc');
        const addToCartButton = product.querySelector('.product__add');
        const counter = product.querySelector('.product__quantity-value');
        const productImage = product.querySelector('.product__image');
        let itemInBasket = null;
        let quantity = +counter.innerText;
        let basketCounter = null;
        let basketQuantity = 0;

        minusQuantityBtn.addEventListener('click', () => {
            quantity = changeQuantity(counter, quantity - 1);
        });

        plusQuantityBtn.addEventListener('click', () => {
            quantity = changeQuantity(counter, quantity + 1);
        });

        addToCartButton.addEventListener('click', () => {
            if (itemInBasket) {
                basketQuantity = changeQuantity(basketCounter, quantity + basketQuantity);
                return;
            }

            itemInBasket = addNewItemInCart(product.dataset.id, productImage.src, quantity);
            basketCounter = itemInBasket.querySelector('.cart__product-count');
            basketQuantity = quantity;
        });
    });

    function isValidQuantity(quantity) {
        return quantity >= 1;
    }

    function changeQuantity(counter, newQuantity) {
        if (!isValidQuantity(newQuantity)) {
            return 1;
        }
    
        counter.innerText = newQuantity;
    
        return newQuantity;
    }
    
    function createProductElement(id, img, count) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart__product')
        cartItem.dataset.id = id;
        cartItem.innerHTML = `
            <img class="cart__product-image" src="${img}" alt="">
            <div class="cart__product-count">${count}</div>
        `;
    
        return cartItem;
    }
    
    function addNewItemInCart(id, img, count) {
        const element = createProductElement(id, img, count);
        cartProductsList.appendChild(element);
        return element;
    }
});
