/**
 * The svenssonom-menu web component module.
 * 
 * @author Fredrik Svensson <svensson@svenssonom.se>
 * @version 0.1.0
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
  <style>
  </style>
  <div class="menu-board">
  </div>
`

// Define custom element.
customElements.define('svenssonom-menu', class extends HTMLElement {
  constructor() {
    super()

    // Attach shadow root.
    this.attachShadow({ mode: 'open' })

    // Render template.
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
})
