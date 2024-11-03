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
                <div class="cart-count" v-if="$store.state.cart.length > 0">
                    {{ $store.state.cart.length }}
                </div>
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
    font-family: 'Roboto';
}

.icon {
    width: 47px;
    height: 40px;
}

.cart-icon {
    position: relative; /* Встановлюємо відносне позиціонування */
    cursor: pointer;
}

.cart-count {
    position: absolute; /* Встановлюємо абсолютне позиціонування */
    top: -10px; /* Регулюємо вертикальне позиціонування */
    right: -10px; /* Регулюємо горизонтальне позиціонування */
    background-color: #60456b; /* Фіолетовий колір */
    color: white; /* Білий колір тексту */
    border: 2px solid white; /* Білий бордер */
    border-radius: 50%; /* Робимо кружечком */
    width: 30px; /* Ширина кружечка */
    height: 30px; /* Висота кружечка */
    display: flex; /* Вирівнюємо текст по центру */
    align-items: center; /* Центруємо по вертикалі */
    justify-content: center; /* Центруємо по горизонталі */
    font-size: 16px; /* Розмір шрифту */
}

@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@600&display=swap');
</style>
