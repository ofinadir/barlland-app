class CurrencyConvert {
  static toRupiah(price) {
    const NUMBER_TO_STRING = price.toString();
    const remains = NUMBER_TO_STRING.length % 3;
    let rupiah = NUMBER_TO_STRING.substr(0, remains);
    const thousand = NUMBER_TO_STRING.substr(remains).match(/\d{3}/g);
    if (thousand) {
      const separator = remains ? '.' : '';
      rupiah += separator + thousand.join('.');
      return rupiah;
    }
  }
}

export default CurrencyConvert;
