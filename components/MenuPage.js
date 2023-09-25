export default class MenuPage extends HTMLElement {

    constructor() {

        super();

    }

    // When component is attached to the DOM
    connectedCallback() {

        // Getting the template from the DOM
        // At this point template is not usable
        // It must be clone first
        const template = document.getElementById('menu-page-template');

        // Cloning the template
        // true = deep clone (template might contain other templates / elements inside)
        const content = template.content.cloneNode(true);

        // 
        this.appendChild(content);

    }

}

customElements.define("menu-page", MenuPage);