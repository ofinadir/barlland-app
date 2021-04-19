import BarllandDataSource from '../data/data-source';

class HeroCarousel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    const carouselsData = await BarllandDataSource.carousels();
    await carouselsData.forEach((carousel) => {
      this.innerHTML = `
        <div id="carouselHero" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${carousel.hero.map((hero) => `<div style="background-image: url(${hero.url});" id="carouselHeroImage" class="lazyload carousel__hero-image carousel-item"></div>`).join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselHero" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselHero" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      `;
    });
    const heroElement = await document.querySelectorAll('#carouselHeroImage');
    await heroElement[0].classList.add('active');
  }
}

customElements.define('hero-carousel', HeroCarousel);
