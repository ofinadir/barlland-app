import CurrencyConvert from '../../utils/currency-converter';

const templateGallery = (galleries) => `
<div class="grid" id="macy">
  <!-- <div class="grid-item" style="width:100%;">
    <video width="100%" autoplay controlsList="nodownload" controls muted>
      <source src="./gallery/1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div> -->
  ${galleries.gallery.map((gallery) => `
    <div class="grid-item">
      <img src="${gallery.formats.medium.url}" alt="img2" width="100%">
    </div>
  `)}
</div>
`;

const createProductDetailTemplate = (product) => `
  <div class="row mt-3 mb-3 border-bottom pb-5">
    <div class="col-12 col-md-5">
      <div id="primary-slider" class="splide mb-2">
        <div class="splide__track">
          <ul class="splide__list">
            ${product.product_images.map((image) => `
              <li class="splide__slide">
                <img class="lazyload" src="${image.formats.small.url}" alt="">
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
      <div id="secondary-slider" class="splide d-md-flex d-none">
        <div class="splide__track">
          <ul class="splide__list">
            ${product.product_images.map((image) => `
              <li class="splide__slide">
                <img class="lazyload" src="${image.formats.thumbnail.url}" alt="">
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-7 detail__product">
      <div class="detail__product-title border-top mt-1 pt-3">
        <h2>${product.title}</h2>
      </div>
      <div class="detail__product-price border-bottom pb-1 mb-3">
        <p>Rp${CurrencyConvert.toRupiah(product.price)}</p>
      </div>
      <div class="detail__product-detail d-inline-block mb-2">
        <h3 class="font-weight-bold">Details</h3>
        <p class="m-0">
        <div class="detail__product-size mb-4">
          <h4>Size</h4>
          ${product.product_sizes.map((size) => `
            <span class="border border-3 p-1 ps-4 pe-4">${size.title}</span>
          `).join('')}
        </div>
        </p>
        <span class="detail__product-description">
          <p>${product.description}</p>
        </span>
      </div>
      <div class="product__order mb-4">
        <h3>Order:</h3>
        <div class="text-center text-md-start mt-2">
          <a href="https://shopee.co.id/barlland" class="d-inline-block text-decoration-none">
            <span class="shopee p-2">Shopee</span>
          </a>
          <a href="https://api.whatsapp.com/send?phone=6281995001313" class="d-inline-block text-decoration-none">
            <span class="whatsapp p-2">Whatsapp</span>
          </a>
        </div>
      </div>
    </div>
  </div>
`;

const createShowBreadcrumbTemplate = (productCategory) => `
  <nav aria-label="breadcrumb" class="mb-3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item fs-6"><a class="text-decoration-none" href="#Home">Home</a></li>
      <li class="breadcrumb-item fs-6 active" aria-current="page">${productCategory}</li>
    </ol>
  </nav>
`;

const createSkeletonBreadcrumbTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item fs-6 text-decoration-none" style="user-select: none;background-color: #f1f1f1;color: #f1f1f1;">Home</li>
            <li class="breadcrumb-item fs-6" aria-current="page" style="user-select: none;background-color: #f1f1f1;color: #f1f1f1;">lorem ipsum</li>
          </ol>
      </nav>
    `;
  }
  return template;
};

const createSkeletonProductTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div id="cardColumn" class="col-6 col-md-4 col-lg-3 p-0 d-flex justify-content-center">
        <div class="card shadow card__product rounded-0 border-0 m-1 m-md-2">
          <div class="card__product-image__wrapper" style="background-color: #f1f1f1;">
            <img class="card__product-image lazyload rounded-0 border-0 mx-auto d-block" src="./icons/placeholder.svg" alt="skeleton"/>
          </div>
          <div class="card-body card__body">
            <div class="card__product-name">
              <h3 class="skeleton card__product-name">Lorem ipsum dolor sit.</h3>
            </div>
              <p class="card__product-price skeleton m-0 p-0">Lorem ipsum</p>
          </div>
        </div>
      </div>
    `;
  }
  return template;
};

const createShowProductCardTemplate = (product) => `
  <div id="cardColumn" class="col-6 col-md-4 col-lg-3 p-0 d-flex justify-content-center">
    <div class="card shadow card__product rounded-0 border-0 m-1 m-md-2">
      <div class="card__product-image__wrapper">
        <a href="${`/#/detail/${product.id}`}"><img src="./icons/placeholder.svg" data-src="${product.product_images[0].formats.small.url}" class="card__product-image lazyload rounded-0 border-0 card-img-top" alt="${product.title}"></a>
      </div>
      <div class="card-body card__body">
        <div class="">
          <a href="${`/#/detail/${product.id}`}"><h3 class="card__product-name">${product.title}</h3></a>
        </div>
        <p class="card__product-price m-0 p-0">Rp ${CurrencyConvert.toRupiah(product.price)}</p>
      </div>
    </div>
  </div>
`;

export {templateGallery, createSkeletonBreadcrumbTemplate, createSkeletonProductTemplate, createProductDetailTemplate, createShowBreadcrumbTemplate, createShowProductCardTemplate};
