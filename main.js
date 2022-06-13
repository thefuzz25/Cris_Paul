class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '
      <header>
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
