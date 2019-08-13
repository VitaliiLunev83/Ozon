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