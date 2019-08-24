export default

function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card');
    const catalogList = document.querySelector('.catalog-list');
    const catalogWrapper = document.querySelector('.catalog');
    const category = new Set();
    const catalogBtn = document.querySelector('.catalog-button');
    const filterTitle = document.querySelector('.filter-title h5');


    cards.forEach((card) => {
        category.add(card.dataset.category);
    });

    category.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        catalogList.appendChild(li);
    });

    const allLi = catalogList.querySelectorAll('li');

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
        allLi.forEach((e) => {
            if (e === event.target) {
                e.classList.add('active');
            } else {
                e.classList.remove('active');
            }
        });

        filterTitle.textContent = event.target.textContent;
    });

}