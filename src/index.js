'use strict';

//checkbox
function toggleChekbox() {
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
}

//cart
function toggleCart() {
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
}



//work with Cart 
function addCart() {
    const cards = document.querySelectorAll('.goods .card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        countGoods = document.querySelector('.counter');
    cards.forEach(function(card) {
        const btn = card.querySelector('button');

        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            cartEmpty.remove();
            showData();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });
    });

    function showData() {
        const cardsCart = cartWrapper.querySelectorAll('.card'),
            cardsPrice = cartWrapper.querySelectorAll('.card-price'),
            cardTotal = document.querySelector('.cart-total span');
        let sum = 0;
        countGoods.textContent = cardsCart.length;

        cardsPrice.forEach((e) => {
            let price = parseFloat(e.textContent);
            sum += price;
        });
        cardTotal.textContent = sum;

        if (cardsCart.length !== 0) {
            cartEmpty.remove();
        } else {
            cartWrapper.appendChild(cartEmpty);
        }

    }

}

//Stock Filter
function actionPage() {
    const cards = document.querySelectorAll('.goods .card'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        min = document.getElementById('min'),
        max = document.getElementById('max');

    discountCheckbox.addEventListener('click', () => {
        cards.forEach((card) => {
            if (discountCheckbox.checked) {
                if (!card.querySelector('.card-sale')) {
                    card.parentNode.style.display = 'none';
                }
            } else {
                card.parentNode.style.display = '';
            }
        });
    });

    function filterPrice() {
        cards.forEach((e) => {
            const cardPrice = card.querySelector('.card-price'),
                price = parseFloat(cardPrice.textContent);

            if (price < min.value || price > max.price) {
                card.parentNode.remove();
            }


        });

    }
    min.addEventListener('change', filterPrice);
    max.addEventListener('change', filterPrice);
}
//end stockFilter
toggleChekbox();
toggleCart();
addCart();
actionPage();