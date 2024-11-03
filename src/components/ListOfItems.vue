<template>
    <div class="cart">
        <h2>Ваш Кошик</h2>
        <ul>
            <li v-for="item in cartItems" :key="item.id" class="cart-item">
                <img :src="item.url" alt="Dessert" class="dessert-image" />
                <div class="dessert-details">
                    <h3>{{ item.title }}</h3>
                    <p>Ціна: {{ item.price }} грн</p>
                    <p>Кількість: {{ item.quantity }}</p>
                    <p>Сума: {{ calculateTotal(item) }} грн</p>
                    <button @click="removeFromCart(item.id)">Видалити</button>
                </div>
            </li>
        </ul>
        <div class="total">
            <h3>Загальна сума: {{ totalPrice }} грн</h3>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['getCartItems']),
        cartItems() {
            return this.getCartItems
        },
        totalPrice() {
            return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
        },
    },
    methods: {
        calculateTotal(item) {
            return item.price * item.quantity
        },
        removeFromCart(id) {
            this.$store.commit('removeFromCart', id) // Додати мутацію для видалення елемента
        },
    },
}
</script>

<style scoped>
.cart {
    margin: 20px;
}
.cart-item {
    display: flex;
    margin-bottom: 15px;
}
.dessert-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 10px;
}
.dessert-details {
    flex-grow: 1;
}
.total {
    font-weight: bold;
    font-size: 1.2em;
}
</style>
