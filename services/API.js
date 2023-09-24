const API = {

    url: "/src/menu.json",
    fetchMenu: async () => {

        const result = await fetch(API.url);

        return await result.json();

    }

};

export default API;