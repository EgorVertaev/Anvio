
const burger = document.querySelector('.menu__burger')
const burgerInner = document.querySelector('.menu__burger-inner')
const menuMob = document.querySelector('.menu-mob')
const body = document.querySelector('body')
const wrapper = document.querySelector('.wrapper')
const menuMobBtn = document.querySelectorAll('.menu-mob__btn')

menuMobBtn.forEach(button => {
  button.addEventListener('click', () => {
    let submenu = button.nextElementSibling;
    button.classList.toggle('menu-mob__btn--active')
    submenu.classList.toggle('menu-mob__sub--active')
  })
})



burger.addEventListener('click', (e) => {
  e.stopPropagation();
  burger.classList.toggle('menu__burger--active')
  burgerInner.classList.toggle('menu__burger-inner--active')
  body.classList.toggle('overlay')
  menuMob.classList.toggle('menu-mob--active')
})

wrapper.addEventListener('click', () => {
  body.classList.remove('overlay')
  menuMob.classList.remove('menu-mob--active')
  burger.classList.remove('menu__burger--active')
  burgerInner.classList.remove('menu__burger-inner--active')
})


const swiper = new Swiper('.discond-slider', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },
  
});