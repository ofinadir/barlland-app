class FooterBarlland extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="footer__one border-top">
        <div class="container">
          <div class="row mb-2 mt-4 about">
            <div class="col-6 col-md-4 text-start mb-3 text-md-center">
              <h5 class="mb-1">Products</h5>
              <a href="#/jacket">Jacket</a> <br>
              <a href="#/t-shirt">T-Shirt</a>
            </div>
            <div class="col-6 col-md-4 text-start mb-3 text-md-center">
              <h5 class="mb-1">Support</h5>
              <a href="./pages/contact-us.html">Contact Us</a><br>
            </div>
            <div class="col-6 col-md-4 mb-3 text-start text-md-center">
              <h5 class="mb-1">Barlland</h5>
              <a href="#">About Barlland</a> <br>
              <a href="https://api.whatsapp.com/send?phone=6281995001313" target="_blank">
                Whatsapp </a><br>
              <a href="https://www.instagram.com/barlland/" target="_blank">
                Instagram
              </a><br>
              <a href="hhttps://shopee.co.id/barlland" target="_blank">
                Shopee
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="border-top text-center pt-3">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 text-md-start">
              <img src="./logo/logo-2.svg" class="lazyload footer__brand-logo mb-2" alt="logo Barlland">
              <p>© 2021 Barlland</a></p>
            </div>
            <div class="col-12 col-md-6 text-md-end d-md-none">
              <div class="footer__social-media">
                <a href="https://api.whatsapp.com/send?phone=6281995001313" target="_blank" rel="noreferrer">
                  <img class="lazyload" src="./icons/whatsapp.svg" alt="whatsapp" width="28px">
                </a>
                <a href="https://www.instagram.com/barlland/" target="_blank" rel="noreferrer">
                  <img class="lazyload" src="./icons/instagram.svg" alt="instagram" width="28px">
                </a>
              </div>
              <div class="credit mt-2">
                <p> Icons made by
                  <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noreferrer" title="Freepik">
                    Freepik
                  </a>
                  from
                  <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer" title="Flaticon">
                    www.flaticon.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-barlland', FooterBarlland);
