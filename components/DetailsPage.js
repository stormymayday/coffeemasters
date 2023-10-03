import { getProductById } from "../services/Menu.js";
import { addToCart } from "../services/Order.js";

export default class DetailsPage extends HTMLElement {

    constructor() {

        super();

        // Creating Shadow DOM with mode 'open'
        this.root = this.attachShadow({ mode: 'open' });

        // Getting template from the DOM
        const template = document.getElementById('details-page-template');

        // Cloning the template
        const content = template.content.cloneNode(true);

        // Creating styles object
        const styles = document.createElement('style');

        // Attaching content to Shadow DOM
        this.root.appendChild(content);

        // Attaching styles to Shadow DOM
        this.root.appendChild(styles);

        styles.textContent = `
            button {
            display: block;
            background-color: var(--color5);
            border: 0;
            width: 80%;
            margin: 16px 10%;
            padding: 12px 0;
            border-radius: 40px;
            color: var(--color3);
            font-size: 16px;
        }

        header {
            display: flex;
            flex-direction: row;
        }

        header>a {
            display: block;
            flex: 1;
            text-decoration: none;
            color: var(--primaryColor);
            padding: 12px 0 12px 8px;
            text-align: center;
            font-size: 14px;
        }

        h2 {
            color: var(--secondaryColor);
            font-weight: normal;
            font-size: 20px;
            flex: 5;
            margin: 8px;
            text-align: center;
        }

        img {
            width: 96%;
            margin: 0 2%;
            margin-top: 12px;
        }

        .description {
            margin: 4px;
            padding: 0 12px;
            color: var(--primaryColor);
            font-size: 13px;
        }

        .price {
            color: var(--secondaryColor);
            padding: 0 24px;
        }`;

    }

    async renderData() {

        if (this.dataset.id) {

            this.product = await getProductById(this.dataset.id);

            this.root.querySelector("h2").textContent = this.product.name;

            this.root.querySelector("img").src = `../src/images/${this.product.image}`;

            this.root.querySelector(".description").textContent = this.product.description;

            this.root.querySelector(".price").textContent = `$ ${this.product.price.toFixed(2)} ea`;

            this.root.querySelector("button").addEventListener("click", () => {

                addToCart(this.product.id);

                app.router.go('/order');

            });

        } else {

            alert("Invalid Product ID");

        }
    }

    connectedCallback() {
        this.renderData();
    }

}

customElements.define("details-page", DetailsPage);