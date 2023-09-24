const Router = {

    init: () => {

        document.querySelectorAll('a.navlink').forEach((anchorTag) => {

            anchorTag.addEventListener("click", event => {

                // Stopping the browser from creating new navigation
                event.preventDefault();

                // Reading the href property of the anchorTag
                // Option 1: Using Property
                // const url = anchorTag.href;
                // Option 2: Using Attribute
                // Note: The href property returns the full URL while the getAttribute method will only return the pathname if that is what's in the attribute
                const url = anchorTag.getAttribute("href");

                // Calling the go method using the url
                Router.go(url);

            });

        });

        // Checking the initial URL
        Router.go(location.pathname);

    },

    go: (route, addToHistory = true) => {

        console.log(`Going to ${route}`);

        if (addToHistory) {

            // Adding route to the History API
            history.pushState({ route }, '', route);

        }

    },


};

export default Router;