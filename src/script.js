import './style.css'
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: 'navbar-collapse-toggle'
  });

const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', ()=> {
  if (window.scrollY >= 56) {
    navEl.classList.add('navbar-scrolled');
  } else if (window.scrollY < 56) {
    navEl.classList.remove('navbar-scrolled');
  }
});