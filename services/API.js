import menu from '../src/menu.js';

const API = {

    // url: "/src/menu.json",
    fetchMenu: async () => {

        // const result = await fetch(API.url);

        // return await result.json();

        return await menu;

    }

};

export default API;