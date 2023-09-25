const Store = {
    menu: null,
    cart: [],
}

// Creating a Proxy
const proxyStore = new Proxy(Store, {

});

export default proxyStore;