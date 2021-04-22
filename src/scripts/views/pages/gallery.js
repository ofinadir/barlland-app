// import BarllandDataSource from '../../data/data-source';
// import {createShowProductCardTemplate} from '../templates/template-creator';
import ThemeChanger from '../../utils/theme-changer';
import Macy from 'macy/dist/macy';

const Gallery = {
  async render() {
    ThemeChanger.navThemeColorToDark();
    return `
      <div class="content">
        <div class="container">
          <div id="product" class="product">
            
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const productContainer = document.querySelector('#product');

    const templateGallery = () => `
    <div class="grid" id="macy">
      <div class="grid-item">
        <img src="./gallery/2.jpg" alt="img2" width="100%">
      </div>
      <div class="grid-item" style="width:100%;">
        <video width="100%" autoplay controlsList="nodownload" controls muted>
          <source src="./gallery/1.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="grid-item">
        <img src="./gallery/3.jpg" alt="img2" width="100%">
      </div>
      <div class="grid-item">
        <img src="./gallery/4.jpg" alt="img2" width="100%">
      </div>
      <div class="grid-item">
        <img src="./gallery/5.JPG" alt="img2" width="100%">
      </div>
      <div class="grid-item">
        <img src="./gallery/6.JPG" alt="img2" width="100%">
      </div>
      <div class="grid-item">
        <img src="./gallery/7.JPG" alt="img2" width="100%">
      </div>
      <div class="grid-item">
        <img src="./gallery/8.JPG" alt="img2" width="100%">
      </div>
      <div class="grid-item">
        <img src="./gallery/9.JPG" alt="img2" width="100%">
      </div>
      <div class="grid-item">
        <img src="./gallery/10.JPG" alt="img2" width="100%">
      </div>
      <div class="grid-item">
        <img src="./gallery/11.JPG" alt="img2" width="100%">
      </div>
    </div>
    `;
    productContainer.innerHTML += templateGallery();

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
