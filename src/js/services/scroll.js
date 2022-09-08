let scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollBtn.classList.add('is-activ');
  } else {
    scrollBtn.classList.remove('is-activ');
  }
});
