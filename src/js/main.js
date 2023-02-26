const menu = document.querySelector('.menu-burger');
const navLinks = document.querySelector('.nav-container');

menu.addEventListener('click', ()=>{
  navLinks.classList.toggle('menu');
})