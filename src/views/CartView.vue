<template>
    <div class="cart-container">
        <div v-if="$store.state.cart && $store.state.cart.length > 0">
            <p>У вашому кошику є {{ $store.state.cart.length }} товарів.</p>
            <!-- Додатковий код для відображення товарів у кошику -->
        </div>
        <div v-else class="empty-cart">
            <img src="@/assets/empty-cart.png" alt="Empty Cart" class="empty-cart-icon" />
            <p class="empty-cart-text">Ваш кошик порожній. Час додати щось смачненьке!</p>
            <!-- Додано клас для тексту -->
            <!-- Використання router-link для навігації з вашою кнопкою -->
            <router-link to="/desserts" class="catalog-button">
                <MainButton buttonText="Переглянути каталог" />
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MainButton from '@/components/MainButton.vue'

export default {
    components: {
        MainButton, // Додавання кнопки до компонентів
    },
    computed: {
        ...mapGetters(['cartItems']),
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@400&display=swap');

.cart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Висота вікна перегляду */
}

.empty-cart {
    text-align: center; /* Центрування тексту */
}

.empty-cart-icon {
    width: 250px; /* Збільшена ширина іконки */
    height: 250px; /* Збільшена висота іконки */
}

.empty-cart-text {
    font-family: 'Alegreya Sans SC'; /* Використання шрифту */
    font-size: 22px; /* Розмір шрифту */
    color: #4b2348; /* Колір тексту */
    margin: 20px 0; /* Відступи зверху та знизу */
}

.catalog-button {
    margin-top: 50px; /* Додатковий відступ зверху для кнопки */
}
</style>
