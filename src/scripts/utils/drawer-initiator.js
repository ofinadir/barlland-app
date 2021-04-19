const DrawerInitiator = {
  init({drawer, content}) {
    content.addEventListener('click', (event) => {
      this._closeDrawer(drawer, event);
    });
  },

  _closeDrawer(drawer, event) {
    event.stopPropagation();
    drawer.hide();
  },
};


export default DrawerInitiator;
