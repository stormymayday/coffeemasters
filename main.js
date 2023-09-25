import './style.css';
import Store from './services/Store.js';
import Router from './services/Router.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';

// Web Components:
import MenuPage from './components/MenuPage.js';
import DetailsPage from './components/DetailsPage.js';
import OrderPage from './components/OrderPage.js';

import logoPNG from './src/logo.png';
import blackamericano from './src/images/blackamericano.png';

// Making Store global:
// 1. Attaching app object to the window
window.app = {};
// 2. Hooking Store to the app.store
app.store = Store;

// Making Router global 
app.router = Router;


window.addEventListener("DOMContentLoaded", async () => {

  // 1. calling loadData form Menu.js
  // 2. loadData calling the API.fetchMenu
  // 3. loadData storing the result in window.app.store
  loadData();

  // Initializing the Router
  // Note: this removes the page refresh behavior when 'a.navlink' is clicked
  app.router.init();

  console.log(window.app);

});

