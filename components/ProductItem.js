// import blackamericano from '../src/images/blackamericano.png';
// import blacktea from '../src/images/blacktea.png';
// import cappuccino from '../src/images/cappuccino.png';
// import coldbrew from '../src/images/coldbrew.png';
// import croissant from '../src/images/croissant.png';
// import flatwhite from '../src/images/flatwhite.png';
// import frappuccino from '../src/images/frappuccino.png';
// import greentea from '../src/images/greentea.png';
// import icedcoffee from '../src/images/icedcoffee.png';
// import macchiato from '../src/images/macchiato.png';
// import muffin from '../src/images/muffin.png';

export default class ProductItem extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        // 1. Getting template from the DOM
        const template = document.getElementById('product-item-template');

        // 2. Cloning the template
        const content = template.content.cloneNode(true);

        // 3. Appending the content
        this.appendChild(content);

        // Parsing the JSON that was set in the dataset
        const product = JSON.parse(this.dataset.product);

        // Querying different part of the template and setting the textContent:
        this.querySelector('h4').textContent = product.name;
        this.querySelector('p.price').textContent = `$${product.price.toFixed(2)}`;
        this.querySelector('img').src = `../src/images/${product.image}`;

        this.querySelector("a").addEventListener("click", event => {

            console.log(event.target.tagName);

            // Checking if name of the target is 'button'
            if (event.target.tagName.toLowerCase() == "button") {
                //TODO
            } else {

                // Otherwise, going to the details page
                app.router.go(`/product-${product.id}`);
            }
            event.preventDefault();
        });

    }

};

// Registering custom element
customElements.define("product-item", ProductItem);