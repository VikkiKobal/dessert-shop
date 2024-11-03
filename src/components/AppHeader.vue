<template>
    <header class="header">
        <nav class="navbar">
            <ul class="nav-links">
                <li><router-link :to="{ name: 'home' }">ГОЛОВНА</router-link></li>
                <li><router-link :to="{ name: 'desserts' }">ДЕСЕРТИ</router-link></li>
                <li><router-link :to="{ name: 'about' }">ПРО НАС</router-link></li>
                <li><router-link :to="{ name: 'faq' }">Q&A</router-link></li>
            </ul>
            <div @click="openCart" class="cart-icon">
                <img src="@/assets/shopping-cart.png" alt="Icon" class="icon" />
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    methods: {
        openCart() {
            this.$router.push('/cart') // або інший спосіб відкриття кошика
        },
    },
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(204, 194, 204);
    padding: 30px 0;
    width: 100%;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.nav-links {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    flex-grow: 1;
    justify-content: center;
}

.nav-links li {
    margin: 0 15px;
}

.nav-links a {
    text-decoration: none;
    font-size: 28px;
    color: rgba(47, 0, 45, 0.85);
    font-weight: bold;
    font-family: 'Alegreya Sans SC', sans-serif;
}

.icon {
    width: 47px;
    height: 40px;
    margin-right: -80px;
}

.cart-icon {
    cursor: pointer;
}

@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@600&display=swap');
</style>