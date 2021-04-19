import BarllandDataSource from '../../data/data-source';
import {
  createSkeletonBreadcrumbTemplate,
  createSkeletonProductTemplate,
  createShowBreadcrumbTemplate,
  createShowProductCardTemplate} from '../templates/template-creator';
import ThemeChanger from '../../utils/theme-changer';

const TShirt = {
  async render() {
    ThemeChanger.navThemeColorToDark();
    return `
      <div class="content">
        <div class="container">
        <div id="breadcrumb"></div>
          <div id="product" class="product row">
            ${createSkeletonBreadcrumbTemplate(1)}
            ${createSkeletonProductTemplate(10)}
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const categories = await BarllandDataSource.categories();
    const productContainer = document.querySelector('#product');
    const breadcrumbContainer = document.querySelector('#breadcrumb');

    productContainer.innerHTML = '';
    categories.forEach((categories) => {
      const category = categories.Category;
      const products = category === 'T-Shirt';
      if (products) {
        breadcrumbContainer.innerHTML += createShowBreadcrumbTemplate(category);
        categories.products.forEach((product) => {
          productContainer.innerHTML += createShowProductCardTemplate(product);
        });
      }
    });
  },
};

export default TShirt;
