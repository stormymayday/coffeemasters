export default class MenuPage extends HTMLElement {

    constructor() {

        super();

        // Creating Shadow DOM with mode 'open'
        this.root = this.attachShadow({ mode: 'open' });

        // Creating styles object
        const styles = document.createElement('style');

        // Attaching styles to Shadow DOM
        this.root.appendChild(styles);

        // Temporary workaround
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
                    background-color: var(--color5);
                    border: 0;
                    margin: 10px 3%;
                    padding: 5px 0;
                    border-radius: 40px;
                    color: var(--color3);
                    font-size: 16px;
                    flex-grow: 1;
                }

                article section div {
                    flex-grow: 2;
                }

                ul {
                    background-color: var(--color6);
                    margin: 4px 6px;
                    padding: 0px 12px;
                    border-radius: 10px;
                    padding-bottom: 10px;
                }

                article {
                    background-color: white;
                    margin-bottom: 16px;
                    padding-bottom: 1px;
                    border-radius: 5px;
                }

                article img {
                    width: 100%;
                }

                article a {
                    text-decoration: none;
                    display: block;
                }

                article section {
                    display: flex;
                }

                h4 {
                    margin: 8px 0 0 12px;
                    color: #333D29;
                    font-size: 18px;
                    font-weight: bold;
                }

                .price {
                    margin: 0px 0 0px 12px;
                    color: #B08968;
                }
            `;


        // Loading the  CSS
        async function loadCSS() {

            // Fetching the CSS
            const request = await fetch("./components/MenuPage.css");

            // 
            const css = await request.text();

            // Filling the styles object (Currently not working)
            styles.textContent = css;

        }

        // loadCSS();

    }

    // When component is attached to the DOM
    connectedCallback() {

        // Getting the template from the DOM
        const template = document.getElementById('menu-page-template');

        // Cloning the template
        const content = template.content.cloneNode(true);

        // Appending the content
        this.root.appendChild(content);

        // Listening for the 'app-menu-change' event from the proxyStore
        window.addEventListener('app-menu-change', () => {

            // If menu changes, calling the render method
            this.render();

        });

    }

    // Rendering the menu
    render() {

        // Checking if there is a menu
        if (app.store.menu) {

            // Clearing previous content
            this.root.querySelector('#menu').innerHTML = '';

            // Looping through the menu
            for (let category of app.store.menu) {

                // Creating 'li' element
                const liCategory = document.createElement('li');

                // Creating the inner content
                liCategory.innerHTML = `
                    <h3>${category.name}</h3>
                    <ul class='category'>

                    </ul>
                `;

                // Appending 'liCategory' to the 'menu'
                this.root.querySelector('#menu').appendChild(liCategory);

            }

        } else {

            // If there is no menu (null), display 'Loading ...'
            // Note: root is the Shadow DOM
            this.root.querySelector('#menu').innerHTML = 'Loading...';

        }

    }

}

customElements.define("menu-page", MenuPage);