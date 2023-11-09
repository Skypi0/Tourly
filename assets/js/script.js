'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelector("[data-nav-link]");

const navElemArray = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = (elem) => {
    for(let i=0; i < elem.length; i++){
        elem[i].addEventListener("click", () => {
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        });
    }
}

navToggleEvent(navElemArray);
navToggleEvent(navLinks); 

/**
 * header sticky
 */ 

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 200) {
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
});