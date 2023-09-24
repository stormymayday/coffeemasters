const Router = {

    init: () => {

        document.querySelectorAll('a.navlink').forEach((a) => {

            a.addEventListener("click", event => {

                // Stopping the browser from creating new navigation
                event.preventDefault();

                console.log(`link clicked`);

            });

        });

    },

    go: (route, addToHistory = true) => {

        console.log(`Going to ${route}`);

    },


};

export default Router;