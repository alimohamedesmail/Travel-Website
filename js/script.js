let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menuBar = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');
let vidBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
  menuBar.classList.remove('fa-times');
  navBar.classList.remove('active');
  loginForm.classList.remove('active');
};

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});
formBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
});
formClose.addEventListener('click', () => {
  loginForm.classList.remove('active');
});
menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('fa-times');
  navBar.classList.toggle('active');
});

vidBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  });
});

var swiper = new Swiper('.review-slider', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerview: 1,
    },
    768: {
      slidesPerview: 2,
    },
    1024: {
      slidesPerview: 3,
    },
  },
});

var swiper = new Swiper('.brand-slider', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerview: 2,
    },
    768: {
      slidesPerview: 3,
    },
    991: {
      slidesPerview: 4,
    },
    1024: {
      slidesPerview: 5,
    },
  },
});
