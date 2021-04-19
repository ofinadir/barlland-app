import Splide from '@splidejs/splide';
import UrlParser from '../../routes/url-parser';
import BarllandDataSource from '../../data/data-source';
import ThemeChanger from '../../utils/theme-changer';
import {createProductDetailTemplate, createShowProductCardTemplate} from '../templates/template-creator';

const Detail = {
  async render() {
    ThemeChanger.navThemeColorToDark();
    return `
      <div class="container mb-4">
        <div id="detailProduct" class="product"></div>
        <div id="similiarProduct" class="row"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const product = await BarllandDataSource.detailProduct(url.id);
    const detailContainer = document.querySelector('#detailProduct');
    detailContainer.innerHTML = '';
    detailContainer.innerHTML += createProductDetailTemplate(product);

    const categories = await BarllandDataSource.categories();
    const similiarProductContainer = document.querySelector('#similiarProduct');
    const titleInTheProductDetails = product.title;

    similiarProductContainer.innerHTML = '';
    product.categories.forEach((category) => {
      const categoryProductInTheDetails = category.Category;
      categories.forEach((categories) => {
        const categoryProductInTheCategories = categories.Category;
        if (categoryProductInTheCategories === categoryProductInTheDetails) {
          categories.products.forEach((product) => {
            const titleInTheCategories = product.title;
            if (titleInTheProductDetails !== titleInTheCategories) {
              similiarProductContainer.innerHTML += createShowProductCardTemplate(product);
            }
          });
        };
      });
    });

    const secondarySlider = new Splide('#secondary-slider', {
      fixedWidth: '5rem',
      height: '5rem',
      gap: 8,
      rewind: true,
      cover: true,
      pagination: false,
      isNavigation: true,
      breakpoints: {
        '600': {
          fixedWidth: 66,
          height: 40,
        },
      },
    }).mount();

    const primarySlider = new Splide('#primary-slider', {
      type: 'slide',
      heightRatio: 1,
      pagination: true,
      arrows: false,
      cover: true,
    });

    primarySlider.sync(secondarySlider).mount();
  },
};

export default Detail;
