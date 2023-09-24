import './style.css';
import Store from './services/Store.js';
import API from './services/API.js';
// import icon from './src/icons/icon.png';
// import logoSVG from './src/logo.svg';
import logoPNG from './src/logo.png';
import blackamericano from './src/images/blackamericano.png';

// Making Store global:
// 1. Attaching app object to the window
window.app = {};
// 2. Hooking Store to the app.store
app.store = Store;


window.addEventListener("DOMContentLoaded", () => {

  console.log(window.app);
  console.log(API.fetchMenu());

});

