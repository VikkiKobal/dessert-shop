<template>
    <v-app>
        <SuccessMessage v-if="showSuccessMessage" />
        <AppHeader @toggle-cart="toggleCart" />
        <v-container>
            <router-view />
            <CartView v-if="isCartVisible" />
            <!-- Тут кошик має з'явитися, коли isCartVisible === true -->
        </v-container>
    </v-app>
</template>


<script>
import AppHeader from './components/AppHeader.vue'
import CartView from './views/CartView.vue'

export default {
    name: 'App',
    components: {
        AppHeader,
        CartView,
    },
    data() {
        return {
            isCartVisible: false, // Стан видимості кошика
        }
    },
    methods: {
        toggleCart() {
            this.isCartVisible = !this.isCartVisible // Перемикаємо видимість кошика
        },
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
}
</style>
