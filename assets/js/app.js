//! === HEADER&FOOTER TEMPLATES ===
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '
      <header class="header">
        <nav class="navbar container">
            <a href="./index.html" class="navbar__logo">
                <img src="./assets/images/logo.svg" alt="" class="navbar__logo-image">
            </a>
            <div class="navbar__menu">
                <ul class="navbar__list">
                    <li class="navbar__list-item">
                        <a href="index.html" class="navbar__list-link">Home</a>
                    </li>
                    <li class="navbar__list-item">
                        <a href="#portfolio" class="navbar__list-link">Portfolio</a>
                    </li>
                    <li class="navbar__list-item">
                        <a href="#skills" class="navbar__list-link">Skills</a>
                    </li>
                    <li class="navbar__list-item">
                        <a href="#aboutme" class="navbar__list-link">About me</a>
                    </li>
                    <li class="navbar__list-item">
                        <a href="#blog " class="navbar__list-link">Blog</a>
                    </li>
                </ul>
            </div>
            <!-- THEME CHANGE -->
            <i class="ri-moon-line change-theme" id="theme-button"></i>
            <div class="navbar__btn-group">
                <button type="button" class="btn btn--action" id="menu-toggler">
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3333 0.999999L0.999918 1" stroke="#999999" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M17.3333 6.83333L0.999916 6.83333" stroke="#999999" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M10.3333 12.6667L0.999918 12.6667" stroke="#999999" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </nav>
      </header>
    '
  }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '
      <footer class="footer">
          <div class="footer__container container">
              <div class="footer__group">
                  <h2 class="footer__title title tittle--main">Syed Faiz Reza Zaidi's Portfolio</h2> 
                  <a href="mailto:sfrzaidi25@gmail.com" class="btn btn--text btn--transparent">Contact me</a>
              </div>
              <span class="footer__separator"></span>
              <div class="footer__group">
                  <a href="./index.html" class="footer__logo">
                  <img src="./assets/images/logo.svg" alt="">
                  </a>
                  <p class="footer__description">Lorem ipsum
                      dolor amet.</p>
                  <ul class="footer__list">
                      <li class="footer__list-item">
                          <a href="" class="footer__list-link">
                              <i class="ri-twitter-line"></i>
                          </a>
                      </li>
                      <li class="footer__list-item">
                          <a href="" class="footer__list-link">
                              <i class="ri-instagram-line"></i>
                          </a>
                      </li>
                      <li class="footer__list-item">
                          <a href="" class="footer__list-link">
                              <i class="ri-github-line"></i>
                          </a>
                      </li>
                  </ul>
                  <span class="footer__copyright">&copy; Faiz Zaidi 2022. All rights reserved.</span>
              </div>
          </div>
      </footer>
    '
  }
}

customElements.define('my-footer', MyFooter)
//! === ADD HEADER STYLES ON SCROLL ===
const headerScroll = () => {
  const headerElement = document.querySelector('.header');
  this.scrollY >= 30 ? headerElement.classList.add('active') : headerElement.classList.remove('active');
}
window.addEventListener('scroll', headerScroll);
//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===
const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar__menu');
const toggleMenu = () => {
  navbarMenu.classList.toggle('active');
}
menuToggler.addEventListener('click', toggleMenu);
// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---
const linksToggleMenu = (e) => {
  if(e.target.classList.contains('navbar__list-link')) navbarMenu.classList.remove('active');
}
window.addEventListener('click', linksToggleMenu);
//! === SWIPER ===
const swiper = new Swiper('.myswiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination'
  }
});
//! === LIGHT DARK THEME ===
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
//! === SCROLL REVEAL ===
const sr = ScrollReveal({
  distance: '50px',
  duration: 1500,
  easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});


sr.reveal('.showcase__title, .showcase__image, .section-metadata, .swiper', {
    origin: 'top',
    interval: 250
});

sr.reveal('.skills__image-wrapper, .about__information, .post--left', {
    origin: 'left',
});

sr.reveal('.skills__list, .about__images, .post--right', {
    origin: 'right',
});

sr.reveal('.footer__container', {
    origin: 'top',
});
