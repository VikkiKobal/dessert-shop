<template>
    <v-app>
        <SuccessMessage v-if="showSuccessMessage" />
        <AppHeader @toggle-cart="toggleCart" />
        <v-container>
            <router-view />
            <CartView v-if="isCartVisible" />
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
            isCartVisible: false,
        }
    },
    methods: {
        toggleCart() {
            this.isCartVisible = !this.isCartVisible
        },
    },
}
</script>

<style>
#app {
    font-family: 'Roboto';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
}
</style>