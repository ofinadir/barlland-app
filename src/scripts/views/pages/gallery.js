import BarllandDataSource from '../../data/data-source';
import {templateGallery} from '../templates/template-creator';
import ThemeChanger from '../../utils/theme-changer';
import Macy from 'macy/dist/macy';

const Gallery = {
  async render() {
    ThemeChanger.navThemeColorToDark();
    return `
      <div class="content p-0 pt-3">
        <div class="container">
          <div id="product" class="product">
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
    const galleriesSource = await BarllandDataSource.galleries();
    const productContainer = document.querySelector('#product');
    productContainer.innerHTML = '';
    galleriesSource.forEach((galleries) => {
      productContainer.innerHTML += templateGallery(galleries);
    });

    // eslint-disable-next-line no-unused-vars
    const macy = Macy({
      container: '#macy',
      trueOrder: false,
      waitForImages: false,
      margin: 10,
      columns: 4,
      breakAt: {
        1200: 4,
        940: 3,
        520: 2,
        400: 1,
      },
    });
    macy.runOnImageLoad(function() {
      macy.recalculate(true);
    }, true);
  },
};

export default Gallery;
