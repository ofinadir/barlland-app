import CONFIG from './config';

const API_ENDPOINT = {
  ALL_PRODUCTS: `${CONFIG.base_url}products/`,
  TYPE_PRODUCTS: `${CONFIG.base_url}types/`,
  CATEGORIES: `${CONFIG.base_url}categories/`,
  CAROUSELS: `${CONFIG.base_url}carousels/`,
  DETAIL_PRODUCT: (id) => `${CONFIG.base_url}products/${id}`,
};

export default API_ENDPOINT;
