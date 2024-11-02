<template>
    <div class="dessert-info">
        <div v-if="dessert">
            <img :src="dessert.url" alt="Dessert Image" class="dessert-image" />
            <h1 class="dessert-title">{{ dessert.title }}</h1>
            <p class="dessert-price">{{ dessert.price }} грн</p>
            <p class="dessert-category">Категорія: {{ dessert.category }}</p>
        </div>
        <router-link to="/" class="back-link">Назад до списку десертів</router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['getDessertById']),
        dessert() {
            // Get the dessert ID from the route parameters
            const dessertId = this.$route.params.id
            // Fetch the dessert by ID
            return this.getDessertById(dessertId)
        },
    },
}
</script>

<style scoped>
.dessert-info {
    text-align: left;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dessert-content {
    display: flex;
    align-items: center;
    gap: 20px; /* Відстань між зображенням та текстом */
    max-width: 800px; /* Максимальна ширина контейнера */
    width: 100%;
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
    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 35px;
    color: #4b2348;
    margin: 0 0 15px;
    border-bottom: 2px solid #521448;
    padding-bottom: 10px;
}

.dessert-price {
    font-size: 20px;
    color: green;
}

.dessert-category {
    font-size: 16px;
    color: gray;
}

.back-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #4caf50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.back-link:hover {
    background-color: #45a049;
}
</style>
