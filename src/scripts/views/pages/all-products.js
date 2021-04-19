import BarllandDataSource from '../../data/data-source';
import {createSkeletonProductTemplate, createShowProductCardTemplate} from '../templates/template-creator';
import ThemeChanger from '../../utils/theme-changer';

const AllProducts = {
  async render() {
    ThemeChanger.navThemeColorToDark();

    return `
      <div class="content">
        <div class="container">
          <h2 class="content__heading">All Products</h2>
          <div id="product" class="product row">
            ${createSkeletonProductTemplate(20)}
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const products = await BarllandDataSource.allProducts();
    const productContainer = document.querySelector('#product');
    productContainer.innerHTML = '';
    products.forEach((product) => {
      productContainer.innerHTML += createShowProductCardTemplate(product);
    });
  },
};

export default AllProducts;
