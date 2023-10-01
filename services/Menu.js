import API from "./API.js";

export async function loadData() {

    app.store.menu = await API.fetchMenu();

}

export async function getProductById(id) {

    // Checking if menu is null
    if (app.store.menu === null) {

        // Waiting for loadData()
        await loadData();

    }

    // Going through every category
    for (let category of app.store.name) {

        // Going through every product within the category
        for (let product of category.products) {

            // Checking if the id matches with product id
            if (product.id === id) {

                return product;

            }

        }

    }

    // If no match was found
    return null;

}