'use strict';

//checkbox
function toggleCheckbox() {
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
        max = document.getElementById('max'),
        search = document.querySelector('.search-wrapper_input'),
        searchBtn = document.querySelector('.search-btn');

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
        cards.forEach((card) => {
            const cardPrice = card.querySelector('.card-price'),
                price = parseFloat(cardPrice.textContent),
                discount = card.querySelector('.card-sale');


            if ((min.value && price < min.value) || (max.value && price > max.value)) {
                card.parentNode.style.display = 'none';
            } else if (discountCheckbox.checked && !discount) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });

    }
    min.addEventListener('change', filter);
    max.addEventListener('change', filter);
    //search
    searchBtn.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if (!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';

            } else {
                card.parentNode.style.display = '';
            }
        });
        search.value = '';
    });

    function filter() {
        cards.forEach((card) => {
            const cardPrice = card.querySelector('.card-price'),
                price = parseFloat(cardPrice.textContent),
                discount = card.querySelector('.card-sale');

            if ((min.value && price < min.value) || (max.value && price > max.value)) {
                card.parentNode.style.display = 'none';
            } else if (discountCheckbox.checked && !discount) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }


        });
    }
    // end search
}
//end stockFilter
//get  data from server
function getData() {
    const goodsWrapper = document.querySelector('.goods');
    return fetch('../db/db.json')
        .then((Response) => {
            if (Response.ok) {
                return Response.json();
            } else {
                throw new Error('Данные не были получены, ошибка: ' +
                    Response.status);
            }
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.warn(err);
            goodsWrapper.innerHTML = '<div style="color:red;font-size: 30px;">Упс что-то пошло не так</div>';
        });
}
//display goods Cards 
function renderCards(data) {
    const goodsWrapper = document.querySelector('.goods');
    data.goods.forEach((good) => {
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
        card.innerHTML = `
            
                <div class="card" data-category ="${good.category}">
                 ${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
            
                    <div class="card-img-wrapper">
                        <span class="card-img-top" style="background-image: url('${good.img}')"></span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price">${good.price}р</div>
                        <h5 class="card-title">${good.title}</h5>
                        <button class="btn btn-primary">В корзину</button>
                    </div>
                </div>
            
        `;
        goodsWrapper.appendChild(card);
    });
}
//end get  data
//catalog 
function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card');
    const catalogList = document.querySelector('.catalog-list');
    const catalogWrapper = document.querySelector('.catalog');
    const category = new Set();
    const catalogBtn = document.querySelector('.catalog-button');


    cards.forEach((card) => {
        category.add(card.dataset.category);
    });

    category.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        catalogList.appendChild(li);
    });


    catalogBtn.addEventListener('click', () => {
        if (catalogWrapper.style.display) {
            catalogWrapper.style.display = '';
        } else {
            catalogWrapper.style.display = 'block';
        }

        if (event.target.tagName === 'LI') {
            cards.forEach((card) => {
                if (card.dataset.category === event.target.textContent) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        }

    });

}
//end catalog
getData().then((data) => {
    renderCards(data);
    toggleCheckbox();
    toggleCart();
    addCart();
    actionPage();
    renderCatalog();
});