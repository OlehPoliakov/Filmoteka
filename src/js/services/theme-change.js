const ref = {
  body: document.querySelector('body'),
  container: document.querySelector('.theme__container'),
  sunLogo: document.querySelector('.sun-logo'),
  moonLogo: document.querySelector('.moon-logo'),
  footer: document.querySelector('.footer-container'),
};

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  ref.body.classList.add('dark');
  ref.footer.classList.add('dark');
  ref.sunLogo.classList.toggle('animate-sun');
  ref.moonLogo.classList.toggle('animate-moon');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  ref.body.classList.remove('dark');
  ref.footer.classList.remove('dark');
  ref.sunLogo.classList.toggle('animate-sun');
  ref.moonLogo.classList.toggle('animate-moon');
  localStorage.setItem('darkMode', 'disabled');
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

ref.container.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
