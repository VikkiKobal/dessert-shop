<template>
    <div>
        <div class="banner">
            <AppHeader />
            <div class="banner-content">
                <h1>
                    Ми спеціалізуємося на смачних десертах, <br />
                    виготовлених з високоякісних інгредієнтів.
                </h1>
                <MainButton buttonText="Оформити замовлення" />
            </div>
        </div>
        <!-- Додатковий вміст -->
        <div class="info-section">
            <ul class="features">
                <li>
                    <img src="@/assets/natural-ingredients.png" alt="Натуральні інгредієнти" />
                    <p>
                        Використовуємо натуральні <br />
                        інгредієнти
                    </p>
                </li>
                <li>
                    <img src="@/assets/fast-delivery.png" alt="Можливівсть доставки" />
                    <p>
                        Можливість вибору дати <br />
                        доставки
                    </p>
                </li>
                <li>
                    <img src="@/assets/best-price.png" alt="Акції" />
                    <p>
                        Акції та знижки для постійних <br />
                        клієнтів
                    </p>
                </li>
                <li>
                    <img src="@/assets/consultation.png" alt="Консультації" />
                    <p>
                        Консультації щодо вибору <br />
                        десертів
                    </p>
                </li>
            </ul>
        </div>

        <!-- Асортимент десертів -->
        <div class="products-section">
            <h2 class="section-title">Наш асортимент</h2>
            <div class="products">
                <div class="product">
                    <img :src="dessertPhotos[0]" alt="Полуниця в шоколаді" />
                    <button>Чизкейки <span class="arrow">➔</span></button>
                </div>
                <div class="product">
                    <img :src="dessertPhotos[1]" alt="Чизкейки" />
                    <button>Полуниця в шоколаді <span class="arrow">➔</span></button>
                </div>
                <div class="product">
                    <img :src="dessertPhotos[2]" alt="Торти" />
                    <button>Макаронс <span class="arrow">➔</span></button>
                </div>
                <div class="product">
                    <img :src="dessertPhotos[3]" alt="Еклери" />
                    <button>Мусові тістечка <span class="arrow">➔</span></button>
                </div>
            </div>
        </div>
        <!-- Кнопка замовлення після асортименту -->
        <MainButton buttonText="Переглянути весь асортимент" :onClick="goToDesserts" class="view-catalog-button" />
    </div>

    <div>
        <!-- Новий прямокутник -->
        <div class="colored-rectangle"></div>
        <!-- Заголовок для відгуків -->
        <h2 class="section-title">Ваші враження та солодкі історії</h2>
        <!-- Контейнер для прямокутників -->
        <div class="review-container">
            <ReviewComponent />
            <ReviewComponent />
            <ReviewComponent />
        </div>
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import MainButton from '../components/MainButton.vue'
import { mapGetters } from 'vuex'
import ReviewComponent from '../components/ReviewComponent.vue'

export default {
    name: 'MainPage',
    components: {
        AppHeader,
        MainButton,
        ReviewComponent,
    },
    computed: {
        ...mapGetters(['getDesserts']),
        dessertPhotos() {
            const desserts = this.getDesserts
            return [desserts[0].url, desserts[14].url, desserts[1].url, desserts[3].url]
        },
    },
    methods: {
        goToDesserts() {
            this.$router.push({ name: 'desserts' })
        },
    },
}
</script>

<style scoped>
.banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: url('https://i.pinimg.com/564x/99/a6/d1/99a6d1d4ad5b873ada61d53166589974.jpg') no-repeat,
        url('https://i.pinimg.com/564x/78/d4/81/78d481cb18ca148ee39e9d4350508169.jpg') no-repeat,
        url('https://heymaca.ca/wp-content/uploads/2019/08/094A9918-1440x1939.jpg') no-repeat;
    background-size: 33.1% 100%;
    background-position: left center, center center, right center;
    background-color: #f0f0f0;
    opacity: 0.85;
}

.banner-content {
    text-align: center;
    z-index: 1;
    margin-top: 120px;
}

h1 {
    font-family: 'Arsenal SC', sans-serif;
    font-size: 23px;
    color: black;
    line-height: 1.5;
}

/* Стилі для нового блоку */
.info-section {
    text-align: center;
    margin: 40px 0;
}

.features {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-family: 'Alegreya Sans SC';
    font-size: 20px;
    color: #4b2348;
}

.features li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}

.features li img {
    margin-right: 25px;
    width: 70px; /* Встановлення ширини іконки */
    height: 75px; /* Встановлення висоти іконки */
}

.features li p {
    margin-right: 25px;
}

.products-section {
    margin: 40px 0;
    font-size: 20px;
}

.section-title {
    text-align: left;
    padding-left: 20px;
    font-family: 'Alegreya Sans SC';
    color: #2f002d;
    stroke: #4b2348;
    font-size: 30px;
    margin-top: 50px;
}

.products {
    display: flex;
    justify-content: space-around;
}

.product {
    text-align: center;
}

.product button {
    width: 325px;
    height: 45px;
    background-color: #dde2d0;
    border: 1px solid rgba(75, 35, 72, 0.3); /* Колір бордера з прозорістю 0.3 */
    font-family: 'Alegreya Sans SC';
    font-size: 20px;
    color: #4b2348;
    cursor: pointer;
}

button .arrow {
    margin-left: 20px; /* Відступ між текстом і стрілкою */
}

.product img {
    width: 325px;
    height: 450px;
    margin-bottom: 10px;
}

.view-catalog-button {
    width: 320px;
}

/* Стилі для контейнера відгуків */

/* Контейнер для відгуків */
.review-container {
    display: flex; /* Використовуємо flexbox для розташування в ряд */
    justify-content: space-around; /* Вирівнює елементи з відступами між ними */
}

.review-container > :first-child {
    margin-left: 100px; /* Лівий блок без зсуву */
}

/* Зсув правого блоку */
.review-container > :last-child {
    margin-right: 100px; /* Правий блок без зсуву */
}

.colored-rectangle {
    width: 100%; /* Ширина прямокутника */
    height: 290px; /* Висота прямокутника */
    background-color: rgba(82, 20, 72, 0.15); /* Колір з насиченістю 15% */
    margin-top: 40px; /* Відступ зверху від попередніх блоків */
    z-index: 1;
}
</style>
