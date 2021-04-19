import 'regenerator-runtime';
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import '@splidejs/splide/dist/css/splide.min.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'placeholder-loading/dist/css/placeholder-loading.min.css';
import '../styles/style.css';
import './components/navbar-barlland';
import './components/welcome-popup';
import './components/footer-barlland.js';
import './components/hero-carousel.js';
import App from './views/app';
import swRegister from './utils/sw-register';

const drawerSupporter = document.querySelector('#navbarSupportedContent');
drawerSupporter.classList.add('show');

const app = new App({
  drawer: new bootstrap.Collapse(drawerSupporter),
  content: document.querySelector('#mainContent'),
});


window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
