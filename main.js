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
      <footer>
      </footer>
    '
  }
}

customElements.define('my-footer', MyFooter)
