'use strict'
let counter = 2;
const headerInner = document.querySelector('.header__inner');
document.addEventListener('DOMContentLoaded', wallSlider);

function getWallp() {
  console.log(counter);
  headerInner.style.backgroundImage = `url(./img/main/jpg/main${counter}.jpg)`;

  if (counter == 1 || counter > 1) {
    console.log(headerInner.style.backgroundImage)
    counter++;
    if (counter > 11) counter = 1
  }

}

function wallSlider() {
  console.log('wlswtch started');

  setInterval(getWallp, 5000)
}

window.addEventListener('scroll', getNavbarBackground);

function getNavbarBackground() {

  let navbar = document.querySelector('.navbar');

  scrollY > 0 ? navbar.classList.add('navbar__visible') : navbar.classList.remove('navbar__visible')
}