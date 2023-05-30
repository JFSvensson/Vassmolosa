/**
 * The main script file of the application.
 *
 * @author Fredrik Svensson <svensson@svenssonom.se>
 * @version 1.0.0
 */

import './components/svenssonom-welcome/index.js'

// Add svenssonom-welcome component to DOM.
document
  .querySelector('body')
  .appendChild(document.createElement('svenssonom-welcome'))
