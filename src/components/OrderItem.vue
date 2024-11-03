<template>
    <div class="order-item">
        <img :src="dessert.url" alt="Dessert Image" class="dessert-image" />
        <h3 class="dessert-title">{{ dessert.title }}</h3>
        <p class="dessert-price">{{ dessert.price }} грн</p>
        <div class="quantity-selector">
            <button @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
            <input type="number" v-model="quantity" min="1" class="quantity-input" />
            <button @click="increaseQuantity">+</button>
        </div>
        <p class="total-price">Загальна вартість: {{ totalPrice }} грн</p>
        <button @click="addToCart" class="add-to-cart-button">Додати в кошик</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        dessertId: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            quantity: 1,
        }
    },
    computed: {
        ...mapGetters(['getDessertById']),
        dessert() {
            return this.getDessertById(this.dessertId)
        },
        totalPrice() {
            return this.dessert.price * this.quantity
        },
    },
    methods: {
        increaseQuantity() {
            this.quantity++
        },
        decreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--
            }
        },
        addToCart() {
            this.$store.commit('addToCart', { ...this.dessert, quantity: this.quantity })
            this.$store.dispatch('triggerSuccessMessage')
        },
    },
}
</script>

<style lang="scss" scoped>
.order-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    padding: 16px;
    margin: 8px;
    border-radius: 8px;
    text-align: center;

    .dessert-image {
        width: 100%;
        max-width: 200px;
        height: auto;
        border-radius: 8px;
    }

    .dessert-title {
        font-size: 1.5rem;
        margin: 8px 0;
    }

    .dessert-price {
        font-size: 1.2rem;
        color: #555;
    }

    .quantity-selector {
        display: flex;
        align-items: center;
        margin: 12px 0;

        button {
            width: 30px;
            height: 30px;
            border: none;
            background-color: #007bff;
            color: white;
            cursor: pointer;
            border-radius: 4px;
        }

        .quantity-input {
            width: 50px;
            text-align: center;
            margin: 0 8px;
        }
    }

    .total-price {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .add-to-cart-button {
        background-color: #28a745;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;

        &:hover {
            background-color: #218838;
        }
    }
}
</style>
