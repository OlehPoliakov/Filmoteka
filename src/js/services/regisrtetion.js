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
console.log(button);
const div = document.querySelector('.header__btn-container');
console.log(div);

button.addEventListener('click', onAuthGoogle);

function onAuthGoogle() {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);

      localStorage.setItem(user.email, user.displayName);
    
      if (user.email) {
        button.classList.add('is-hidden');
        div.innerHTML = `<a class="header__ref header__singup-link header__btn-signup" style="font-size">${user.displayName}</a>`;       
      }
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
