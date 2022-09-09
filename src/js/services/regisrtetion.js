import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: 'AIzaSyC-rMEvEUJ6DbhIaJz-m19MpHLMzbQ1hi4',
  authDomain: 'auth-9127f.firebaseapp.com',
  projectId: 'auth-9127f',
  storageBucket: 'auth-9127f.appspot.com',
  messagingSenderId: '1077758083281',
  appId: '1:1077758083281:web:0634a927ba2da6007f85f0',
};

const app = initializeApp(firebaseConfig);

const button = document.querySelector('.header__btn-signup');
const div = document.querySelector('.header__btn-container');
const libraryLink = document.querySelector('.header__item.is-hidden');
const mylibraryBtn = document.querySelector('.header__library-link.current');

button.addEventListener('click', onAuthGoogle);

export default function onAuthGoogle() {
  const auth = getAuth();
  const authKey = JSON.parse(localStorage.getItem('authKey'));
  if (authKey) {
    localStorage.setItem('authKey', JSON.stringify(''));
    div.innerHTML = `<a class="header__ref header__singup-link header__btn-signup" style="font-size">Sign in</a>`;
    libraryLink.classList.add('is-hidden');
    return;
  }
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      localStorage.setItem('authKey', JSON.stringify(user.displayName));

      // button.classList.add('is-hidden');
      div.innerHTML = `<a class="header__ref header__singup-link header__btn-signup" style="font-size">Sign out ${user.displayName}</a>`;
      libraryLink.classList.remove('is-hidden');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
