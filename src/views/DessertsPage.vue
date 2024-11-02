<template>
    <div class="desserts-page">
        <div class="button-container">
            <button-for-catalog label="Фрукти в шоколаді" @click="filterDesserts('фрукти в шоколаді')" />
            <button-for-catalog label="Чизкейки" @click="filterDesserts('чизкейки')" />
            <button-for-catalog label="Торти" @click="filterDesserts('торти')" />
            <button-for-catalog label="Еклери" @click="filterDesserts('еклери')" />
        </div>
        <div class="dessert-images-container">
            <div class="dessert-images">
                <div v-for="dessert in filteredDesserts" :key="dessert.id" class="dessert-item">
                    <img :src="dessert.url" :alt="'Dessert ' + dessert.id" />
                    <order-button :label="'Замовити'" @click="orderDessert(dessert.id)" />
                    <p class="dessert-price">{{ dessert.price }} UAH</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonForCatalog from '@/components/ButtonForCatalog.vue'
import OrderButton from '@/components/OrderButton.vue' // Імпорт кнопки "Замовити"
import { mapGetters } from 'vuex'

export default {
    name: 'DessertsPage',
    components: {
        ButtonForCatalog,
        OrderButton, // Додаємо компонент для кнопки замовлення
    },
    data() {
        return {
            selectedCategory: null,
        }
    },
    computed: {
        ...mapGetters(['getDesserts']),
        filteredDesserts() {
            if (!this.selectedCategory) {
                return this.getDesserts
            }
            return this.getDesserts.filter((dessert) => dessert.category === this.selectedCategory)
        },
    },
    methods: {
        filterDesserts(category) {
            if (this.selectedCategory === category) {
                this.selectedCategory = null
            } else {
                this.selectedCategory = category
            }
        },
        orderDessert(dessertId) {
            // Логіка замовлення десерту
            console.log(`Замовлено десерт з ID: ${dessertId}`)
        },
    },
}
</script>

<style>
body {
    background-color: #eef3e0;
}

.button-container {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
}

.desserts-page {
    background-color: #eef3e0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
}

.dessert-images-container {
    width: 1250px;
}

.dessert-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
}

.dessert-item {
    margin: 15px;
}

img {
    width: 215px;
    height: 285px;
}
</style>
