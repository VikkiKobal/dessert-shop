<template>
    <div class="dessert-page">
        <app-header />

        <div class="dessert-details">
            <img :src="dessert.url" :alt="dessert.title" class="dessert-image" />
            <h1>{{ dessert.title }}</h1>

            <div class="ingredients">
                <h3>Склад:</h3>
                <p>{{ dessert.ingredients }}</p>
            </div>

            <div class="nutrition-facts">
                <h3>Харчова цінність:</h3>
                <ul>
                    <li>Калорії: {{ dessert.nutrition.calories }}</li>
                    <li>Білки: {{ dessert.nutrition.proteins }} г</li>
                    <li>Жири: {{ dessert.nutrition.fats }} г</li>
                    <li>Вуглеводи: {{ dessert.nutrition.carbohydrates }} г</li>
                </ul>
            </div>

            <div class="price-section">
                <h2>Ціна: {{ dessert.price }} грн</h2>
                <div class="quantity-selector">
                    <input type="range" min="1" max="10" v-model="quantity" />
                    <span>{{ quantity }}</span>
                </div>
                <button @click="orderDessert">Замовити</button>
            </div>
        </div>

        <div class="reviews-section">
            <h2>Відгуки про цей десерт</h2>
            <div v-if="reviews.length === 0">Немає відгуків.</div>
            <ul>
                <li v-for="review in reviews" :key="review.id">
                    <strong>{{ review.user }}:</strong> {{ review.comment }} ({{ review.rating }}/5)
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dessert: {
            type: Object,
            required: true,
        },
        reviews: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            quantity: 1,
        }
    },
    methods: {
        orderDessert() {
            alert(`Замовлено ${this.quantity} порцій ${this.dessert.title}`)
        },
    },
}
</script>

<style scoped>
.dessert-page {
    padding: 20px;
}

.dessert-image {
    width: 100%;
    max-width: 400px;
}

.ingredients,
.nutrition-facts,
.price-section,
.reviews-section {
    margin-top: 20px;
}

.quantity-selector {
    display: flex;
    align-items: center;
}

input[type='range'] {
    margin-right: 10px;
}

.reviews-section {
    margin-top: 30px;
}
</style>
