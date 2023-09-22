import './style.css';

document.querySelector('#app').innerHTML = `
<header>
        <h1><img src="images/logo.svg" width="140" alt="Coffee Masters"></h1>
        <nav>
            <a class="navlink material-symbols-outlined" id="linkHome" href="/">
                    local_cafe
            </a>
            <a class="navlink material-symbols-outlined" id="linkOrder" href="/order">
                    shopping_cart
            </a>
            <span id="badge" hidden></span>
        </nav>
    </header>

    <main>
    </main>

    <template id="menu-page-template">
        <section>
            <ul id="menu"></ul>
        </section>
    </template>

    <template id="product-item-template">
        <article>
            <a href="#">
                <img>
                <section>
                    <div>
                        <h4></h4>
                        <p class="price"><p>
                    </div>
                    <button>Add</button>
                </section>
            </a>
        </article>
    </template>

    <template id="order-form-template">
        <form>
            <label for="name">Your Name</label>
            <input name="name" required>
            <label for="phone">Your Phone Number</label>
            <input name="phone" type="tel">
            <label for="email">Your Email</label>
            <input name="email" type="email">
            <button type="submit">Place Order</button>
        </form>
    </template>

    <template id="details-page-template">
        <header>
            <a href="#" onclick="app.router.go('/'); event.preventDefault()">&lt; Back</a>
            <h2></h2>
            <a></a>
        </header>
        <img src="">
        <p class="description"></p>
        <p class="price"></p>
        <button>Add to cart</button>
    </template>

    <template id="cart-item-template">
        <li>
            <p class='qty'></p>
            <p class='name'></p>
            <p class='price'></p>
            <p class='toolbar'>
                <a href="#" class="delete-button">
                    🗑️
                </a>
            </p>
        </li>
    </template>
`;
