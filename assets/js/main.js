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
