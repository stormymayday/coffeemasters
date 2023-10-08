export default class OrderPage extends HTMLElement {

    // Private object
    #user = {
        name: "",
        phone: "",
        email: "",
    }

    constructor() {

        super();

        // Creating Shadow DOM with mode 'open'
        this.root = this.attachShadow({ mode: 'open' });

        // Creating styles element
        const styles = document.createElement('style');

        // Attaching styles to Shadow DOM
        this.root.appendChild(styles);

        styles.textContent = `
                    
            ul {
                list-style: none;
                padding: 0;
            }

            h3 {
                color: var(--color4);
                font-weight: normal;
                padding-top: 15px;
                font-size: 17px;
            }

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

            h2 {
                text-align: center;
                color: var(--secondaryColor);
                font-weight: normal;
                font-size: 20px;
                flex: 5;
                margin: 8px;
                text-align: center;
            }

            .empty {
                text-align: center;
                color: var(--color3)
            }

            ul {
                background-color: var(--color6);
                padding: 16px;
                margin: 12px;
                border-radius: 5px;
                box-shadow: 2px 2px 10px silver;

            }

            li {
                display: flex;
                border-bottom: 1px solid var(--color5);
            }

            li:last-child {
                border: 0;
            }

            .qty {
                color: var(--color4);
                flex: 1;
            }

            .name {
                font-weight: bold;
                color: var(--secondaryColor);
                flex: 5;
            }

            .total {
                font-weight: bold;
                color: var(--color3);
                flex: 5;
                text-align: right;
                margin-right: 16px;
                font-size: 17px;

            }

            .toolbar span {
                display: block;
                padding: 0 8px;
            }

            .price, .price-total {
                color: var(--secondaryColor);
                flex: 1;

                text-align: right;
            }

            .price-total {
                font-weight: bold;
                font-size: 17px;
                flex: 2;
                text-align: left;
            }


            a {
                text-decoration: none;
            }

            label, input {
                display: block;
                width: 90%;
                margin-left: 5%;
            }

            input {
                background-color: var(--color6);
                margin-bottom: 6px;
                font-size: large;
                border: 1px solid var(--color3);
                border-radius: 15px;
            }

        `;

        const section = document.createElement('section');

        this.root.appendChild(section);

    }
    // end of constructor

    connectedCallback() {

        window.addEventListener('app-cart-change', () => {

            this.render();

        });

        this.render();

    }
    // end of connectedCallback

    render() {

        let section = this.root.querySelector("section");

        if (app.store.cart.length == 0) {

            section.innerHTML = `
                <p class="empty">Your order is empty</p>
            `;

        } else {
            let html = `
                <h2>Your Order</h2>
                <ul>
                </ul>
            `;

            section.innerHTML = html;

            const template = document.getElementById("order-form-template");

            const content = template.content.cloneNode(true);

            section.appendChild(content);

            let total = 0;

            for (let prodInCart of app.store.cart) {

                const item = document.createElement("cart-item");

                item.dataset.item = JSON.stringify(prodInCart);

                this.root.querySelector("ul").appendChild(item);

                total += prodInCart.quantity * prodInCart.product.price;

            }

            this.root.querySelector("ul").innerHTML += `
                <li>
                    <p class='total'>Total</p>
                    <p class='price-total'>$${total.toFixed(2)}</p>
                </li>                
            `;

        }

        this.setFormBindings(this.root.querySelector('form'));

    }
    // end of render

    setFormBindings(form) {

        form.addEventListener('submit', event => {

            event.preventDefault();

            alert(`Thanks for your order ${this.#user.name}`);

            this.#user.name = '';
            this.#user.email = '';
            this.#user.phone = '';

            // Send data to the server

        });

        // Setting double data binding
        this.#user = new Proxy(this.#user, {

            set(target, property, value) {

                target[property] = value;

                form.elements[property].value = value;

                return true;

            }

        });

        Array.from(form.elements).forEach(element => {

            element.addEventListener('change', event => {

                this.#user[element.name] = element.value;

            });

        });

    }
    // end of setFormBindings

}

customElements.define("order-page", OrderPage);