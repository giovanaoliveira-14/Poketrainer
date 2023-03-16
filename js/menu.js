class MenuMobile {
  constructor(menuMobile, listaMenu, menuLinks) {
    this.menuMobile = document.querySelector(menuMobile);
    this.listaMenu = document.querySelector(listaMenu);
    this.menuLinks = document.querySelectorAll(menuLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animacaoLinks() {
    this.menuLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `menuAparecer 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.listaMenu.classList.toggle(this.activeClass);
    this.menuMobile.classList.toggle(this.activeClass);
    this.animacaoLinks();
  }

  addClickEvent() {
    this.menuMobile.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.menuMobile) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MenuMobile(".menu-mobile", ".menu", ".menu-links");

mobileNavbar.init();
