class WelcomePopup extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML =`
      <div class="modal fade welcome-popup" style="background-color:rgba(0, 0, 0, 0.671); display: none;"
      id="popupWelcome" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content p-1 p-md-3 p-lg-4 rounded-0 border-0">
            <div class="modal-body text-center">
              <img class="lazyload" src="./logo/logo-2.svg" alt="Logo Barlland">
              <h3 class="mt-1 fw-normal">Wear It Well.</h3>
              <button type="button" class="btn btn-dark rounded-0 mt-2 mt-lg-4 fw-light" data-bs-dismiss="modal" aria-label="Close">
                Enter Site
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('welcome-popup', WelcomePopup);
