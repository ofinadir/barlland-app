import BarllandDataSource from '../../data/data-source';
import {createShowProductCardTemplate} from '../templates/template-creator';
import ThemeChanger from '../../utils/theme-changer';
import Cookies from 'js-cookie';

const Home = {
  async render() {
    ThemeChanger.navThemeColorToLight();
    return `
      <welcome-popup></welcome-popup>
      <hero-carousel></hero-carousel>
      <div class="content">
        <div class="container">
          <h2 class="content__heading"></h2>
          <div id="product" class="product row">
            <div class="position-relative" style="width:100%; height:50vh;">
              <div class="d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const typeProducts = await BarllandDataSource.typeProducts();
    const productContainer = document.querySelector('#product');
    productContainer.innerHTML = '';
    typeProducts.forEach((typeProduct) => {
      const product = typeProduct.products[0];
      productContainer.innerHTML += createShowProductCardTemplate(product);
    });

    const cardColumnElements = document.querySelectorAll('#cardColumn');
    cardColumnElements.forEach((cardColumn) => {
      const cardColumnClassCheck = cardColumn.classList.contains('col-lg-3');
      const cardColumnClassLength = cardColumnElements.length;
      if (cardColumnClassCheck && cardColumnClassLength === 3) {
        cardColumn.classList.remove('col-lg-3');
        cardColumn.classList.add('col-lg-4');
      }
    });

    const barllandPopupCookie = Cookies.get('barllandPopup');
    const popupWelcomeElement = new bootstrap.Modal(document.querySelector('#popupWelcome'));
    if (barllandPopupCookie === undefined) {
      popupWelcomeElement.show();
      Cookies.set('barllandPopup', 'true');
    }
    if (barllandPopupCookie) {
      popupWelcomeElement.hide();
    }
  },
};

export default Home;
