import onAuthGoogle from './regisrtetion';

const libraryLink = document.querySelector('.header__item.is-hidden');
const div = document.querySelector('.header__btn-container');

const authKey = JSON.parse(localStorage.getItem('authKey'));

if (authKey) {
    div.innerHTML = `<a class="header__ref header__singup-link header__btn-signup" style="font-size">Sign out ${authKey}</a>`;
    libraryLink.classList.remove('is-hidden');
    const button = document.querySelector('.header__btn-signup');
    button.addEventListener('click', onAuthGoogle);
}

