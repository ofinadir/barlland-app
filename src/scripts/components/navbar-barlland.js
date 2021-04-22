class NavbarBarlland extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML =`
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div class="container">
          <a class="navbar-brand" href="#/home"><img src="./logo/logo-dark.svg" class="lazyload nav__brand-logo" alt="logo-Barlland" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse justify-content-end navbar-collapse ml-5" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#/gallery">Gallery</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul class="dropdown-menu nav__dropdown-menu rounded-0 dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#/products">All Product</a></li>
                  <li><a class="dropdown-item" href="#/t-shirt">T-Shirt</a></li>
                  <li><a class="dropdown-item" href="#/jacket">Jacket</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-barlland', NavbarBarlland);
