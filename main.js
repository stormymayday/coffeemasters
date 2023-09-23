import './style.css';
// import icon from './src/icons/icon.png';
// import logoSVG from './src/logo.svg';
import logoPNG from './src/logo.png';
import blackamericano from './src/images/blackamericano.png';
import menu from './src/menu.json';

// Helpful Shorthand Methods
// const $ = () => document.querySelector.call(this, arguments);
// const $$ = () => document.querySelectorAll.call(this, arguments);
// HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
// HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
// HTMLElement.prototype.$ = (s) => this.querySelector(s);
// HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);

window.addEventListener("DOMContentLoaded", () => {

  let nav = document.querySelector("nav");
  console.log(nav);

  nav.innerHTML = `
    <h2>Hello DOM</h2>
    <p>This HTML is from JavaScript</p>
  `;

  document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello World</h1>
  </div>
`;

});

window.addEventListener("DOMContentLoaded", event => {

});

console.log(menu);
