<template>
    <div>
        <div class="banner">
            <div class="banner-content">
                <h1>
                    Ми спеціалізуємося на смачних десертах, <br />
                    виготовлених з високоякісних інгредієнтів.
                </h1>
                <MainButton class="makeOrderButton" buttonText="Оформити замовлення" />
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
                    <img :src="dessertPhotos[0]" alt="Чизкейки" />
                    <button>Чизкейки <span class="arrow">➔</span></button>
                </div>
                <div class="product">
                    <img :src="dessertPhotos[1]" alt="Еклери" />
                    <button>Торти <span class="arrow">➔</span></button>
                </div>
                <div class="product">
                    <img :src="dessertPhotos[2]" alt="Макаронс" />
                    <button>Макаронс <span class="arrow">➔</span></button>
                </div>
                <div class="product">
                    <img :src="dessertPhotos[3]" alt="Фрукти в шоколаді" />
                    <button>Фрукти в шоколаді <span class="arrow">➔</span></button>
                </div>
            </div>
        </div>
        <!-- Кнопка замовлення після асортименту -->
        <MainButton buttonText="Переглянути весь асортимент" :onClick="goToDesserts" class="view-catalog-button" />
    </div>
    <div>
        <!-- Фіолетовий контейнер для відгуків -->
        <div class="purple-container">
            <h2 class="section-title review-title">Ваші враження та солодкі історії</h2>

            <div class="review-container">
                <CustomRectangle
                    :clientPhoto="require('@/assets/women1.jpg')"
                    feedbackText="Замовляла торт на день народження, і він перевершив усі мої очікування. Смак чудовий, а оформлення просто витончене. Гості були в захваті, і запитували, де я його придбала. Дуже вдячна за якість!"
                />
                <CustomRectangle
                    :clientPhoto="require('@/assets/women2.jpg')"
                    feedbackText="Нещодавно замовляла еклери та макаруни, і це був справжній кулінарний шедевр! Кожен шматочок танув у роті, а оформлення було на найвищому рівні. Окреме дякую за швидку доставку."
                />
                <CustomRectangle
                    :clientPhoto="require('@/assets/women3.jpg')"
                    feedbackText="Десерт вийшов не тільки смачним, а й дуже гарним. Видно, що все робиться з любов’ю до деталей. Дякую за увагу до побажань і високий рівень сервісу! Обов'язково замовлятиму від вас ще!!"
                />
            </div>
        </div>

        <div class="favorites-container" @click="goToDesserts">
            <h2 class="favorites-title">Топ-5 ваших фаворитів</h2>
            <div class="favorites-grid">
                <div class="favorite-item" v-for="(url, index) in favoritePhotos" :key="index">
                    <img :src="url" :alt="'Десерт ' + (index + 1)" class="favorite-photo" />
                </div>
            </div>
        </div>
        <!-- Рецепти -->
        <div class="recipe-container">
            <h2 class="recipe-title">Книга рецептів від засновниці</h2>
            <div class="recipe-grid">
                <div class="recipe-item">
                    <a href="https://foodie-app-foodie.vercel.app/recipes/Chizkeyk-oreo--1684062324523" target="_blank">
                        <div class="recipe-photo-container">
                            <img src="../assets/recipe1.jpg" alt="Рецепт 1" class="recipe-photo" />
                            <div class="overlay">
                                <img src="../assets/kitchen.png" alt="Кухня" class="kitchen-icon" />
                                <span class="overlay-text">Хочу приготувати</span>
                            </div>
                        </div>
                    </a>
                    <div class="recipe-info">
                        <div class="recipe-icons">
                            <span class="time-icon">
                                <img src="../assets/clock.png" alt="Час приготування" class="icon" /> 60 хв
                            </span>
                            <span class="ingredients-icon">
                                <img src="../assets/agenda.png" alt="Кількість інгредієнтів" class="icon" /> 6
                                інгредієнтів
                            </span>
                        </div>
                        <h3 class="recipe-name">Холодний чизкейк "Орео"</h3>
                    </div>
                </div>

                <div class="recipe-item">
                    <a
                        href="https://foodie-app-foodie.vercel.app/recipes/Sloyki-z-vanilnim-kremom-ta-yagodami--1722597699162"
                        target="_blank"
                    >
                        <div class="recipe-photo-container">
                            <img src="../assets/recipe2.jpg" alt="Рецепт 2" class="recipe-photo" />
                            <div class="overlay">
                                <img src="../assets/kitchen.png" alt="Кухня" class="kitchen-icon" />
                                <span class="overlay-text">Хочу приготувати</span>
                            </div>
                        </div>
                    </a>
                    <div class="recipe-info">
                        <div class="recipe-icons">
                            <span class="time-icon">
                                <img src="../assets/clock.png" alt="Час приготування" class="icon" /> 60 хв
                            </span>
                            <span class="ingredients-icon">
                                <img src="../assets/agenda.png" alt="Кількість інгредієнтів" class="icon" /> 6
                                інгредієнтів
                            </span>
                        </div>
                        <h3 class="recipe-name">Слойки з ванільним кремом та ягодами</h3>
                    </div>
                </div>

                <div class="recipe-item">
                    <a
                        href="https://foodie-app-foodie.vercel.app/recipes/Bulochki-Sinnabon-1673206433425"
                        target="_blank"
                    >
                        <div class="recipe-photo-container">
                            <img src="../assets/recipe3.jpg" alt="Рецепт 3" class="recipe-photo" />
                            <div class="overlay">
                                <img src="../assets/kitchen.png" alt="Кухня" class="kitchen-icon" />
                                <span class="overlay-text">Хочу приготувати</span>
                            </div>
                        </div>
                    </a>
                    <div class="recipe-info">
                        <div class="recipe-icons">
                            <span class="time-icon">
                                <img src="../assets/clock.png" alt="Час приготування" class="icon" /> 60 хв
                            </span>
                            <span class="ingredients-icon">
                                <img src="../assets/agenda.png" alt="Кількість інгредієнтів" class="icon" /> 6
                                інгредієнтів
                            </span>
                        </div>
                        <h3 class="recipe-name">Булочки сінабон: простий рецепт приготування</h3>
                    </div>
                </div>

                <div class="recipe-item">
                    <a
                        href="https://foodie-app-foodie.vercel.app/recipes/Yagodniy-chizkeyk-1723742154845"
                        target="_blank"
                    >
                        <div class="recipe-photo-container">
                            <img src="../assets/recipe4.jpg" alt="Рецепт 4" class="recipe-photo" />
                            <div class="overlay">
                                <img src="../assets/kitchen.png" alt="Кухня" class="kitchen-icon" />
                                <span class="overlay-text">Хочу приготувати</span>
                            </div>
                        </div>
                    </a>
                    <div class="recipe-info">
                        <div class="recipe-icons">
                            <span class="time-icon">
                                <img src="../assets/clock.png" alt="Час приготування" class="icon" /> 60 хв
                            </span>
                            <span class="ingredients-icon">
                                <img src="../assets/agenda.png" alt="Кількість інгредієнтів" class="icon" /> 6
                                інгредієнтів
                            </span>
                        </div>
                        <h3 class="recipe-name">Полуничний чизкейк</h3>
                    </div>
                </div>
            </div>
        </div>
        <!-- Футер компонент -->
        <FooterComponent />
    </div>
</template>
<script>
import MainButton from '../components/MainButton.vue'
import { mapGetters } from 'vuex'
import CustomRectangle from '../components/CustomRectangle.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
    name: 'MainPage',
    components: {
        MainButton,
        CustomRectangle,
        FooterComponent,
    },
    computed: {
        ...mapGetters(['getDesserts']),
        dessertPhotos() {
            const desserts = this.getDesserts
            const extractedDesserts = desserts.map((dessert) => ({
                id: dessert.id,
                category: dessert.category,
                title: dessert.title,
                url: dessert.url,
                price: dessert.price,
            }))
            return [
                extractedDesserts.find((d) => d.id === 'nnPO9bG8Mz748OZf98nW').url,
                extractedDesserts.find((d) => d.id === 'UZMKbylaTYjFNysszmY8').url,
                extractedDesserts.find((d) => d.id === 'KTGIBxctFA9d42bwx9qH').url,
                extractedDesserts.find((d) => d.id === 'GT6gzAkJ9ZagQdi5rfxa').url,
            ]
        },
        favoritePhotos() {
            const desserts = this.getDesserts
            const extractedDesserts = desserts.map((dessert) => ({
                id: dessert.id,
                category: dessert.category,
                title: dessert.title,
                url: dessert.url,
                price: dessert.price,
            }))
            return [
                extractedDesserts[0].url,
                extractedDesserts[1].url,
                extractedDesserts[2].url,
                extractedDesserts[3].url,
                extractedDesserts[4].url,
            ]
        },
    },

    methods: {
        goToDesserts() {
            this.$router.push({ name: 'desserts' })
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
<style scoped>
.banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: url('https://i.pinimg.com/564x/99/a6/d1/99a6d1d4ad5b873ada61d53166589974.jpg') no-repeat,
        url('https://i.pinimg.com/564x/78/d4/81/78d481cb18ca148ee39e9d4350508169.jpg') no-repeat,
        url('https://heymaca.ca/wp-content/uploads/2019/08/094A9918-1440x1939.jpg') no-repeat;
    background-size: contain;
    background-position: left center, center center, right center;
    background-color: #f0f0f0;
    opacity: 0.85;
}

@media (max-width: 1024px) {
    .banner {
        height: 80vh;
        background-size: contain;
    }
}

@media (max-width: 768px) {
    .banner {
        height: 60vh;
        background-size: cover;
        background-position: center;
    }
}

@media (max-width: 480px) {
    .banner {
        height: 50vh;
        background-size: cover;
        background-position: center;
    }
}

.banner-content {
    text-align: center;
    z-index: 1;
    margin-top: 120px;
}

h1 {
    margin-top: 50px;
    font-family: 'Roboto';
    font-size: 20px;
    color: #351b33;
    line-height: 1.5;
}

.makeOrderButton {
    margin-top: 25px;
}

.info-section {
    text-align: center;
    margin: 20px 0;
}

.features {
    display: flex;
    margin-left: 80px;
    margin-right: 80px;
    justify-content: space-between;
    flex-wrap: wrap;
    font-family: 'Roboto';
    font-size: 18px;
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
    width: 70px;
    height: 75px;
}

.features li p {
    margin-right: 25px;
}

.products-section {
    margin: 40px 0;
    font-size: 19px;
}

.section-title {
    padding-left: 30px;
    font-family: 'Roboto';
    font-size: 29px;
    color: #521448;
    text-align: left;
    font-size: 30px;
    margin-top: 50px;
}

.products-section {
    margin: 40px 0;
    font-size: 20px;
}

.products {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.product {
    text-align: center;
    flex: 1 1 220px;
    margin: 10px;
}

.product button {
    width: 325px;
    height: 45px;
    background-color: #dde2d0;
    border: 1px solid rgba(75, 35, 72, 0.3);
    font-family: 'Roboto';
    font-size: 20px;
    color: #4b2348;
    cursor: pointer;
}

button .arrow {
    margin-left: 20px;
}

.product img {
    width: 325px;
    height: 450px;
    margin-bottom: 10px;
}

.view-catalog-button {
    width: 320px;
}

@media (max-width: 1024px) {
    .products {
        justify-content: center;
    }

    .product {
        flex: 1 1 180px;
    }

    .product button {
        font-size: 18px;
    }

    .products-section {
        font-size: 18px;
    }
}

@media (max-width: 768px) {
    .products-section {
        font-size: 16px;
    }

    .product button {
        font-size: 16px;
    }
}

.purple-container {
    box-sizing: border-box;
    width: 100%;
    height: 290px;
    background-color: rgba(82, 20, 72, 0.15);
    margin-top: 90px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
}

.review-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
}

.review-title {
    margin: 0;
    font-family: 'Roboto';
    font-size: 29px;
    text-align: left;
    color: rgba(47, 0, 45, 0.85);
    padding-top: 40px;
    padding-left: 30px;
    align-self: flex-start;
}

.review-container > div {
    margin: 0 5px;
}

.review-container > :first-child {
    margin-left: 0;
}

.review-container > :last-child {
    margin-right: 0;
}

.favorites-container {
    background-color: rgba(82, 20, 72, 0.15);
    width: 100%;
    height: 490px;
    margin: 20px auto;
    margin-top: 400px;
    padding-top: 10px;
}

.favorites-title {
    font-family: 'Roboto';
    font-size: 29px;
    color: #521448;
    text-align: left;
    padding-left: 30px;
    padding-bottom: 25px;
    padding-top: 15px;
}

.favorites-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 9px;
}

.favorite-item {
    width: 245px;
    height: 340px;
    margin: 0 20px 15px;
}

.favorite-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
}

.favorite-item :hover {
    scale: 1.1;
    transition: 0.5s all;
}

.recipe-container {
    width: 100%;
}

.recipe-photo-container {
    position: relative;
    display: inline-block;
    width: 100%;
    height: auto;
}

.recipe-photo-container:hover .recipe-photo {
    opacity: 0.7;
}

.recipe-photo-container:hover .overlay {
    opacity: 1;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    flex-direction: column;
    text-align: center;
}

.overlay-text {
    color: white;
    font-size: 24px;
    font-family: 'Arial';
    font-weight: normal;
    transition: opacity 0.5s ease-in-out;
}

.recipe-info {
    padding: 10px;
    text-align: center;
    margin-top: 8px;
}

.recipe-icons {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.kitchen-icon {
    width: 100px;
    height: 100px;
}

.recipe-name {
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: 300;
    letter-spacing: 1px;
    color: #2f002d;
    margin-top: 8px;
}

.recipe-title {
    font-family: 'Roboto';
    font-size: 29px;
    color: #521448;
    text-align: left;
    margin-bottom: 30px;
    padding-left: 30px;
}

.recipe-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.recipe-item {
    width: 340px;
    height: auto;
    min-height: 420px;
}

.recipe-photo {
    width: 100%;
    height: 420px;
    object-fit: cover;
}

.icon {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    vertical-align: middle;
}

@media (max-width: 1024px) {
    .recipe-grid {
        justify-content: center;
    }

    .recipe-item {
        width: 280px;
    }

    .recipe-title {
        font-size: 28px;
        padding-left: 20px;
    }

    .recipe-icons {
        margin-left: 30px;
        gap: 30px;
    }

    .recipe-name {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    .recipe-grid {
        padding: 0 10px;
    }

    .recipe-item {
        width: 100%;
        max-width: 340px;
    }

    .recipe-title {
        font-size: 24px;
        padding-left: 10px;
    }

    .recipe-icons {
        margin-left: 20px;
        gap: 20px;
    }

    .recipe-name {
        font-size: 14px;
    }
}
</style>