import './style.css';
import Store from './services/Store.js';
import Router from './services/Router.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';

// Web Components:
import MenuPage from './components/MenuPage.js';
import DetailsPage from './components/DetailsPage.js';
import OrderPage from './components/OrderPage.js';
import ProductItem from './components/ProductItem.js';

import logoPNG from './src/logo.png';

// import blackamericano from './src/images/blackamericano.png';
// import blacktea from './src/images/blacktea.png';
// import cappuccino from './src/images/cappuccino.png';
// import coldbrew from './src/images/coldbrew.png';
// import croissant from './src/images/croissant.png';
// import flatwhite from './src/images/flatwhite.png';
// import frappuccino from './src/images/frappuccino.png';
// import greentea from './src/images/greentea.png';
// import icedcoffee from './src/images/icedcoffee.png';
// import macchiato from './src/images/macchiato.png';
// import muffin from './src/images/muffin.png';

// Making Store global:
// 1. Attaching app object to the window
window.app = {};
// 2. Hooking Store to the app.store
app.store = Store;

// Making Router global 
app.router = Router;


window.addEventListener("DOMContentLoaded", async () => {

  // console.log(menu);

  // 1. calling loadData form Menu.js
  // 2. loadData calling the API.fetchMenu
  // 3. loadData storing the result in window.app.store
  loadData();

  // Initializing the Router
  // Note: this removes the page refresh behavior when 'a.navlink' is clicked
  app.router.init();

  console.log(window.app);

});

