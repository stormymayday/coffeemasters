const Store = {
    menu: null,
    cart: [],
}

// Creating a Proxy that would broadcast changes
const proxyStore = new Proxy(Store, {

    // Setting a trap for the 'set' method
    set(targetObject, propertyName, propertyValue) {

        // Assigning the value
        targetObject[propertyName] = propertyValue;

        // Checking if property is 'menu'
        if (propertyName === 'menu') {

            // Announcing that the menu was changed
            // Note: using window instead of document
            // Because: we have two documents
            // window is a global document
            // Shadow DOM is a local document
            window.dispatchEvent(new Event('app-menu-change'));

        }

        // Checking if property is 'cart'
        if (propertyName === 'cart') {

            window.dispatchEvent(new Event('app-cart-change'));

        }

        // Important:
        // Must return 'true' if we are accepting the set
        // Otherwise, must return 'false'
        return true;

    }

});

export default proxyStore;