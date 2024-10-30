<template>
    <div class="desserts-page">
        <div class="button-container">
            <button-for-catalog label="Полуниця в шоколаді" />
            <button-for-catalog label="Чизкейки" />
            <button-for-catalog label="Торти" />
            <button-for-catalog label="Еклери" />
        </div>
        <div class="dessert-images-container">
            <div class="dessert-images">
                <div v-for="dessert in desserts" :key="dessert.id" class="dessert-item">
                    <img :src="dessert.url" :alt="'Dessert ' + dessert.id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonForCatalog from '@/components/ButtonForCatalog.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'DessertsPage',
    components: {
        ButtonForCatalog,
    },
    computed: {
        ...mapGetters(['getDesserts']),
        desserts() {
            return this.getDesserts
        },
    },
}
</script>

<style>
body {
    background-color: #eef3e0;
}

.button-container {
    display: flex; /* вирівнювання кнопок в ряд */
    gap: 20px; /* відстань між кнопками */
    margin-top: 20px; /* відступ зверху для кнопок */
    justify-content: center; /* вирівнювання кнопок по центру */
    flex-wrap: wrap; /* щоб кнопки могли переходити на новий ряд, якщо не вистачає місця */
    margin-bottom: 40px;
}

.desserts-page {
    background-color: #eef3e0;
    height: 100vh; /* висота сторінки на весь екран */
    display: flex;
    flex-direction: column; /* вертикальне вирівнювання */
    align-items: center; /* вирівнювання по центру */
    justify-content: flex-start; /* вирівнювання зліва */
    padding: 20px; /* відступи для контейнера */
}

.dessert-images-container {
    width: 1250px; /* Ширина контейнера для 5 картинок, з урахуванням відступів */
}

.dessert-images {
    display: flex; /* вирівнювання картинок в ряд */
    flex-wrap: wrap; /* картинкам дозволено переходити на новий ряд */
    justify-content: space-between; /* вирівнювання картинок по центру з відстанями */
    margin-bottom: 20px; /* відступ між картинками та кнопками */
}

.dessert-item {
    margin: 15px; /* однаковий відступ між картинками */
}

img {
    width: 215px; /* ширина картинок */
    height: 285px; /* висота картинок */
}
</style>
