!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5)},function(e,t,n){},function(e,t){var n=document.querySelectorAll(".switch-button"),o=document.querySelectorAll(".slides");n.forEach((function(e,t){e.addEventListener("click",(function(){o[t].classList.toggle("slides_cut"),e.textContent=o[t].classList.contains("slides_cut")?"Показать все":"Скрыть",e.classList.toggle("switch-button_active")}))}))},function(e,t){document.querySelector(".swiper");window.addEventListener("resize",(function(){if(window.innerWidth>=768)new Swiper(".swiper",{loop:!0,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}})})),document.addEventListener("DOMContentLoaded",(function(){new Swiper(".swiper",{loop:!0,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}})}))},function(e,t){var n=document.querySelector(".sidebar"),o=document.querySelector(".sidebar-second"),r=document.querySelector(".sidebar-third"),i=document.querySelector(".content");function s(e){e.classList.remove("active"),i.classList.remove("blur")}document.addEventListener("click",(function(e){e.target.closest(".toggle-sidebar")?(n.classList.toggle("active"),i.classList.toggle("blur")):e.target.closest(".toggle-sidebar-second")?(o.classList.toggle("active"),i.classList.toggle("blur")):e.target.closest(".toggle-sidebar-third")?(r.classList.toggle("active"),i.classList.toggle("blur")):e.target.closest(".sidebar")||e.target.closest(".sidebar-second")||e.target.closest(".sidebar-third")||(s(n),s(o),s(r))}))}]);
//# sourceMappingURL=bundle.js.map