'use strict';

// make navbar 스크롤시 navbar transparnet 투명 불투명. 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }


});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }
    scrollIntoView(link);
});

// Handle click on "contact me" button on home
const homecontactbtn = document.querySelector('.home__contact');
homecontactbtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

// scroll down home screen transparent
// homeHeight 은 왜 800인가?
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});












function scrollIntoView(selector) {
    const scrollTo = document.querySelector('selector');
    scrollTo.scrollIntoView({ behavior: 'smooth'});
}

