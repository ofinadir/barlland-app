const headerElement = document.querySelector('header');
const headerPositionProperty = headerElement.classList.contains('header__home');
const navElement = document.querySelector('.navbar');
const navBrandElement = document.querySelector('.nav__brand-logo');
const navBrandSrcAttribute = navBrandElement.hasAttribute('src');
const navColorLightCheck = navElement.classList.contains('navbar-light');
const navColorDarkCheck = navElement.classList.contains('navbar-dark');

class ThemeChanger {
  static navThemeColorToLight() {
    if (headerPositionProperty === false) {
      headerElement.classList.add('header__home');
    }
    if (navBrandSrcAttribute) {
      navBrandElement.removeAttribute('src');
      navBrandElement.setAttribute('src', './logo/logo-dark.svg');
    }
    if (navColorLightCheck || navColorDarkCheck) {
      navElement.classList.remove('navbar-light', 'shadow-sm');
      navElement.classList.add('navbar-dark');
    }
  }

  static navThemeColorToDark() {
    if (headerPositionProperty || true) {
      headerElement.classList.remove('header__home');
    }
    if (navBrandSrcAttribute) {
      navBrandElement.removeAttribute('src');
      navBrandElement.setAttribute('src', './logo/logo-light.svg');
    }
    if (navColorLightCheck || navColorDarkCheck) {
      navElement.classList.remove('navbar-dark');
      navElement.classList.add('navbar-light', 'shadow-sm');
    }
  }
}

export default ThemeChanger;
