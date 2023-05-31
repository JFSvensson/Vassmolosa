/**
 * The svenssonom-welcome web component module.
 *
 * @author Fredrik Svensson <svensson@svenssonom.se
 * @version 1.0.0
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
  <style>
    h1 {
      color: #000;
    }
  </style>
  <div class ="welcome-board">
    <h1>Välkommen - här kommer det snart mer innehåll.</h1>
    <h2>Detta är en webbkomponent som är skapad med hjälp av Javascript, HTML och CSS.</h2>
  </div>
`

// Define custom element.
customElements.define('svenssonom-welcome', class extends HTMLElement {
  constructor() {
    super()

    // Attach shadow root.
    this.attachShadow({ mode: 'open' })

    // Render template.
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
})
