<template>
    <div class="desserts-page">
        <div class="button-container">
            <button-for-catalog label="Фрукти в шоколаді" @click="filterDesserts('фрукти в шоколаді')" />
            <button-for-catalog label="Чизкейки" @click="filterDesserts('чизкейки')" />
            <button-for-catalog label="Торти" @click="filterDesserts('торти')" />
            <button-for-catalog label="Макаронс" @click="filterDesserts('макаронс')" />
        </div>
        <div class="dessert-images-container">
            <div class="dessert-images">
                <div v-for="dessert in paginatedDesserts" :key="dessert.id" class="dessert-item">
                    <img :src="dessert.url" :alt="'Dessert ' + dessert.id" />
                    <order-button :label="'Замовити'" @click="orderDessert(dessert.id)" />
                    <p class="dessert-price">{{ dessert.price }} UAH</p>
                </div>
            </div>
        </div>
        <div class="pagination">
            <button @click="previousPage" :disabled="currentPage === 1">Попередня</button>
            <span>Сторінка {{ currentPage }} з {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Наступна</button>
        </div>
    </div>
</template>

<script>
import ButtonForCatalog from '@/components/ButtonForCatalog.vue'
import OrderButton from '@/components/OrderButton.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'DessertsPage',
    components: {
        ButtonForCatalog,
        OrderButton,
    },
    data() {
        return {
            selectedCategory: null,
            currentPage: 1,
            dessertsPerPage: 15,
        }
    },
    computed: {
        ...mapGetters(['getDesserts']),
        filteredDesserts() {
            if (!this.selectedCategory) {
                return this.getDesserts
            }
            return this.getDesserts.filter((dessert) => dessert.category.includes(this.selectedCategory))
        },
        paginatedDesserts() {
            const start = (this.currentPage - 1) * this.dessertsPerPage
            return this.filteredDesserts.slice(start, start + this.dessertsPerPage)
        },
        totalPages() {
            return Math.ceil(this.filteredDesserts.length / this.dessertsPerPage)
        },
    },
    methods: {
        filterDesserts(category) {
            if (this.selectedCategory === category) {
                this.selectedCategory = null
            } else {
                this.selectedCategory = category
                this.currentPage = 1 // Скидаємо на першу сторінку при фільтрації
            }
        },
        orderDessert(dessertId) {
            console.log(`Замовлено десерт з ID: ${dessertId}`)
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++
            }
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

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>
