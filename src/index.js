//checkbox
'use strict';
const checkbox = document.querySelectorAll(".filter-check_checkbox");
checkbox.forEach(function(elem) {
    elem.addEventListener('change', function() {
        if (this.checked === true) {
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});
//cart
const btnCart = document.getElementById('cart'),
    modalCart = document.querySelector('.cart'),
    closeBtn = document.querySelector('.cart-close');
btnCart.addEventListener('click', function() {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', function() {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
});
//goods
const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty');


cards.forEach(function(card) {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
        let cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
    });
});