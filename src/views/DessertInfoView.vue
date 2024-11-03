<template>
    <div class="dessert-info">
        <div class="dessert-content">
            <img :src="dessert.url" alt="Dessert Image" class="dessert-image" />
            <div class="dessert-details">
                <h1 class="dessert-title">{{ dessert.title }}</h1>
                <p class="dessert-ingredients">Склад: {{ dessert.ingredients }}</p>
                <p class="dessert-nutrition">Харчова цінність: {{ dessert.nutrition }}</p>
                <div class="divider"></div>
                <div class="price-and-button">
                    <p class="dessert-price">{{ dessert.price }} UAH</p>
                    <main-button @click="orderDessert" buttonText="Замовити" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainButton from '@/components/MainButton.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        MainButton,
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
    font-family: 'Alegreya Sans SC';
    font-size: 35px;
    color: #4b2348;
    margin: 0 0 15px;
    padding-bottom: 10px;
}

.dessert-ingredients,
.dessert-nutrition {
    font-size: 20px;
    font-family: 'Alegreya Sans SC';
    color: #4b2348;
    font-weight: bold;
    margin: 10px 0;
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
    font-family: 'Alegreya Sans SC';
    margin-right: 50px;
}
</style>
