import './style.css';
import Store from './services/Store.js';
import API from './services/API.js';
// import icon from './src/icons/icon.png';
// import logoSVG from './src/logo.svg';
import logoPNG from './src/logo.png';
import blackamericano from './src/images/blackamericano.png';
import menu from './src/menu.json';

window.addEventListener("DOMContentLoaded", () => {

  console.log(Store);
  console.log(API.fetchMenu());

});

