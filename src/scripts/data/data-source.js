import API_ENDPOINT from '../globals/api-endpoint';

class BarllandDataSource {
  static async carousels() {
    const response = await fetch(API_ENDPOINT.CAROUSELS);
    const responseJson = await response.json();
    return responseJson;
  }

  static async allProducts() {
    const response = await fetch(API_ENDPOINT.ALL_PRODUCTS);
    const responseJson = await response.json();
    return responseJson;
  }

  static async galleries() {
    const response = await fetch(API_ENDPOINT.GALLERIES);
    const responseJson = await response.json();
    return responseJson;
  }

  static async typeProducts() {
    const response = await fetch(API_ENDPOINT.TYPE_PRODUCTS);
    const responseJson = await response.json();
    return responseJson;
  }

  static async categories() {
    const response = await fetch(API_ENDPOINT.CATEGORIES);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailProduct(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_PRODUCT(id));
    return response.json();
  }
}

export default BarllandDataSource;
