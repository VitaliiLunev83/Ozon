!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),function(){const e=document.querySelector(".goods");return fetch("../db/db.json").then(e=>{if(e.ok)return e.json();throw new Error("Данные не были получены, ошибка: "+e.status)}).then(e=>e).catch(t=>{console.warn(t),e.innerHTML='<div style="color:red;font-size: 30px;">Упс что-то пошло не так</div>'})}().then(e=>{!function(e){const t=document.querySelector(".goods");e.goods.forEach(e=>{const n=document.createElement("div");n.className="col-12 col-md-6 col-lg-4 col-xl-3",n.innerHTML=`\n            \n                <div class="card" data-category ="${e.category}">\n                 ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n            \n                    <div class="card-img-wrapper">\n                        <span class="card-img-top" style="background-image: url('${e.img}')"></span>\n                    </div>\n                    <div class="card-body justify-content-between">\n                        <div class="card-price">${e.price}р</div>\n                        <h5 class="card-title">${e.title}</h5>\n                        <button class="btn btn-primary">В корзину</button>\n                    </div>\n                </div>\n            \n        `,t.appendChild(n)})}(e),document.querySelectorAll(".filter-check_checkbox").forEach(function(e){e.addEventListener("change",function(){!0===this.checked?this.nextElementSibling.classList.add("checked"):this.nextElementSibling.classList.remove("checked")})}),function(){const e=document.getElementById("cart"),t=document.querySelector(".cart"),n=document.querySelector(".cart-close");e.addEventListener("click",function(){t.style.display="flex",document.body.style.overflow="hidden"}),n.addEventListener("click",function(){t.style.display="none",document.body.style.overflow=""})}(),function(){const e=document.querySelectorAll(".goods .card"),t=document.querySelector(".cart-wrapper"),n=document.getElementById("cart-empty"),o=document.querySelector(".counter");function c(){const e=t.querySelectorAll(".card"),c=t.querySelectorAll(".card-price"),r=document.querySelector(".cart-total span");let l=0;o.textContent=e.length,c.forEach(e=>{let t=parseFloat(e.textContent);l+=t}),r.textContent=l,0!==e.length?n.remove():t.appendChild(n)}e.forEach(function(e){e.querySelector("button").addEventListener("click",()=>{const o=e.cloneNode(!0);t.appendChild(o),n.remove(),c();const r=o.querySelector(".btn");r.textContent="Удалить",r.addEventListener("click",()=>{o.remove(),c()})})})}(),function(){const e=document.querySelectorAll(".goods .card"),t=document.getElementById("discount-checkbox"),n=document.getElementById("min"),o=document.getElementById("max"),c=document.querySelector(".search-wrapper_input"),r=document.querySelector(".search-btn");function l(){e.forEach(e=>{const c=e.querySelector(".card-price"),r=parseFloat(c.textContent),l=e.querySelector(".card-sale");n.value&&r<n.value||o.value&&r>o.value?e.parentNode.style.display="none":t.checked&&!l?e.parentNode.style.display="none":e.parentNode.style.display=""})}t.addEventListener("click",()=>{e.forEach(e=>{t.checked?e.querySelector(".card-sale")||(e.parentNode.style.display="none"):e.parentNode.style.display=""})}),n.addEventListener("change",l),o.addEventListener("change",l),r.addEventListener("click",()=>{const t=new RegExp(c.value.trim(),"i");e.forEach(e=>{const n=e.querySelector(".card-title");t.test(n.textContent)?e.parentNode.style.display="":e.parentNode.style.display="none"}),c.value=""})}(),function(){const e=document.querySelectorAll(".goods .card"),t=document.querySelector(".catalog-list"),n=document.querySelector(".catalog"),o=new Set,c=document.querySelector(".catalog-button"),r=document.querySelector(".filter-title h5");e.forEach(e=>{o.add(e.dataset.category)}),o.forEach(e=>{const n=document.createElement("li");n.textContent=e,t.appendChild(n)});const l=t.querySelectorAll("li");c.addEventListener("click",()=>{n.style.display?n.style.display="":n.style.display="block","LI"===event.target.tagName&&e.forEach(e=>{e.dataset.category===event.target.textContent?e.style.display="":e.style.display="none"}),l.forEach(e=>{e===event.target?e.classList.add("active"):e.classList.remove("active")}),r.textContent=event.target.textContent})}()})}]);