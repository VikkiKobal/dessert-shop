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
                    <img :src="dessert.url" :alt="'Dessert ' + dessert.id" @click="navigateToDessertInfo(dessert.id)" />
                    <order-button :label="'Замовити'" @click="orderDessert(dessert.id)" />
                    <p class="dessert-price">{{ dessert.price }} UAH</p>
                </div>
            </div>
        </div>
        <v-pagination v-model="currentPage" :length="totalPages" :total-visible="7" @input="changePage" class="my-5" />
    </div>
</template>

<script>
import { VPagination } from 'vuetify/components'
import ButtonForCatalog from '@/components/ButtonForCatalog.vue'
import OrderButton from '@/components/OrderButton.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'DessertsPage',
    components: {
        ButtonForCatalog,
        OrderButton,
        VPagination,
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
            if (!this.getDesserts || this.getDesserts.length === 0) {
                console.warn('No desserts available for filtering.')
                return []
            }

            const desserts = !this.selectedCategory
                ? this.getDesserts
                : this.getDesserts.filter((dessert) => dessert.category.includes(this.selectedCategory))

            const extractedDesserts = desserts.map((dessert) => ({
                id: dessert.id,
                category: dessert.category,
                title: dessert.title,
                url: dessert.url,
                price: dessert.price,
            }))

            return extractedDesserts
        },
        paginatedDesserts() {
            const start = (this.currentPage - 1) * this.dessertsPerPage
            return this.filteredDesserts.slice(start, start + this.dessertsPerPage)
        },
        totalPages() {
            const total = Math.ceil(this.filteredDesserts.length / this.dessertsPerPage)
            return total
        },
    },
    methods: {
        filterDesserts(category) {
            if (this.selectedCategory === category) {
                this.selectedCategory = null
            } else {
                this.selectedCategory = category
                this.currentPage = 1
            }
        },
        orderDessert(dessertId) {
            console.log(`Замовлено десерт з ID: ${dessertId}`)
        },
        changePage(page) {
            this.currentPage = page
        },
        navigateToDessertInfo(dessertId) {
            this.$router.push({ name: 'DessertInfoView', params: { id: dessertId } })
        },
    },
    created() {
        this.$store
            .dispatch('setDesserts')
            .then(() => {
                const desserts = this.getDesserts
                if (!desserts || desserts.length === 0) {
                    console.warn('No desserts data fetched.')
                }
            })
            .catch((error) => {
                console.error('Error fetching desserts:', error)
            })
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

.dessert-images :hover {
    scale: 1.1;
    transition: 0.5s all;
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
}
@media (max-width: 1024px) {
    .dessert-item {
        flex: 1 1 calc(25% - 20px);
        max-width: calc(25% - 20px);
    }
}

@media (max-width: 768px) {
    .dessert-item {
        flex: 1 1 100%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .button-container {
        flex-direction: column;
        align-items: center;
    }
}
</style>