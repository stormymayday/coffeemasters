import './style.css';
import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import logoPNG from './src/logo.png';
import blackamericano from './src/images/blackamericano.png';

// Making Store global:
// 1. Attaching app object to the window
window.app = {};
// 2. Hooking Store to the app.store
app.store = Store;


window.addEventListener("DOMContentLoaded", async () => {

});

