/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 * 
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
window.addEventListener('DOMContentLoaded', () => {
  try {
    document.getElementsByClassName("footer_inner")[0].remove()
  } catch (error) {
    
  }
  document.getElementsByClassName("playbar_wrap")[0].style.background = "linear-gradient(red, blue)";
})
