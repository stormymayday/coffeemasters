export default class MenuPage extends HTMLElement {

    constructor() {

        super();

        // Creating Shadow DOM with mode 'open'
        this.root = this.attachShadow({ mode: 'open' });

        // Creating styles object
        const styles = document.createElement('style');

        // Attaching styles to Shadow DOM
        this.root.appendChild(styles);

        // Loading the  CSS
        async function loadCSS() {

            // Fetching the CSS
            const request = await fetch("./components/MenuPage.css");

            // 
            const css = await request.text();

            // Filling the styles object
            styles.textContent = css;

        }
        loadCSS();

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

    // Render method for the UI
    render() {

    }

}

customElements.define("menu-page", MenuPage);