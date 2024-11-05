<template>
    <div class="dessert-info">
        <div class="dessert-content">
            <img :src="dessert.url" alt="Dessert Image" class="dessert-image" />
            <div class="dessert-details">
                <h1 class="dessert-title">{{ dessert.title }}</h1>
                <p class="dessert-description"><strong>Опис десерту:</strong> {{ dessert.description }}</p>
                <p class="dessert-ingredients"><strong>Інгредієнти:</strong> {{ dessert.ingredients }}</p>
                <div class="divider"></div>
                <div class="price-and-button">
                    <p class="dessert-price">{{ dessert.price }} UAH</p>
                    <add-to-cart @click="orderDessert" buttonText="Замовити" />
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import AddToCart from '@/components/AddToCart.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        AddToCart,
    },
    data() {
        return {
            showSuccessMessage: false, // Керує видимістю повідомлення
        }
    },
    computed: {
        ...mapGetters(['getDessertById']),
        dessert() {
            const dessertId = this.$route.params.id
            return this.getDessertById(dessertId)
        },
    },
    methods: {
        orderDessert() {
            this.$store.commit('addToCart', this.dessert) // Додаємо товар до кошика
            this.$store.dispatch('triggerSuccessMessage') // Викликаємо повідомлення
            this.showSuccessMessage = true // Optionally show success message
        },
    },
}
</script>

<style scoped>
.dessert-info {
    text-align: left;
    margin: 20px;
    width: 100%;
}

.dessert-content {
    display: flex;
    margin-left: 50px;
    margin-top: 60px;
    align-items: flex-start;
    gap: 50px;
}

.dessert-image {
    width: 485px;
    height: 615px;
    border-radius: 15px;
    object-fit: cover;
}

.dessert-details {
    flex: 1;
}

.dessert-title {
    font-family: 'Roboto';
    font-size: 35px;
    color: #4b2348;
    margin: 0 0 15px;
    padding-bottom: 10px;
}

.dessert-description {
    font-size: 17px; /* Зменшуємо розмір шрифту */
    font-family: 'Roboto';
    color: #4b2348;
    margin-right: 50px;
    margin-bottom: 10px;
}

.dessert-ingredients {
    font-size: 17px; /* Залишаємо цей розмір без змін */
    font-family: 'Roboto';
    color: #4b2348;
    margin-right: 50px;
}

.divider {
    border-top: 2px solid rgba(0, 0, 0, 0.5);
    width: 70%;
    margin-top: 30px;
}

.price-and-button {
    display: flex;
    align-items: center;
    margin-top: 30px;
}

.dessert-price {
    font-size: 30px;
    color: black;
    font-family: 'Roboto';
    margin-right: 50px;
}
</style>
