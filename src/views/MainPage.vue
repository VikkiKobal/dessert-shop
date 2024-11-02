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
                    feedbackText="Замовляла торт на день народження, і він перевершив усі мої очікування. Смак чудовий, а оформлення просто витончене. Гості були в захваті, і запитували, де я його придбала. Дуже вдячна за якість та оперативність!"
                />
                <CustomRectangle
                    :clientPhoto="require('@/assets/women2.jpg')"
                    feedbackText="Нещодавно замовляла еклери та макаруни, і це був справжній кулінарний шедевр! Кожен шматочок танув у роті, а оформлення було на найвищому рівні. Окреме дякую за швидку доставку та приємний сервіс."
                />
                <CustomRectangle
                    :clientPhoto="require('@/assets/women3.jpg')"
                    feedbackText="Десерт вийшов не тільки смачним, а й дуже гарним. Видно, що все робиться з любов’ю до деталей. Дякую за увагу до побажань і високий рівень сервісу!"
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
                        <img src="../assets/recipe1.jpg" alt="Рецепт 1" class="recipe-photo" />
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
                        <img src="../assets/recipe2.jpg" alt="Рецепт 2" class="recipe-photo" />
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
                        <img src="../assets/recipe3.jpg" alt="Рецепт 3" class="recipe-photo" />
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
                        <img src="../assets/recipe4.jpg" alt="Рецепт 4" class="recipe-photo" />
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
            return [
                desserts.find((d) => d.id === 4).url,
                desserts.find((d) => d.id === 10).url,
                desserts.find((d) => d.id === 15).url,
                desserts.find((d) => d.id === 7).url,
            ]
        },
        favoritePhotos() {
            const desserts = this.getDesserts
            return [desserts[12].url, desserts[7].url, desserts[9].url, desserts[11].url, desserts[10].url]
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
    margin-top: 50px;
    font-family: 'Arsenal SC', sans-serif;
    font-size: 23px;
    color: black;
    line-height: 1.5;
}

.makeOrderButton {
    margin-top: 25px;
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
    width: 70px;
    /* Встановлення ширини іконки */
    height: 75px;
    /* Встановлення висоти іконки */
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
    border: 1px solid rgba(75, 35, 72, 0.3);
    /* Колір бордера з прозорістю 0.3 */
    font-family: 'Alegreya Sans SC';
    font-size: 20px;
    color: #4b2348;
    cursor: pointer;
}

button .arrow {
    margin-left: 20px;
    /* Відступ між текстом і стрілкою */
}

.product img {
    width: 325px;
    height: 450px;
    margin-bottom: 10px;
}

.view-catalog-button {
    width: 320px;
}

.purple-container {
    box-sizing: border-box;
    /* Includes padding and border in the total width and height */
    width: 100%;
    /* Width of the container */
    height: 290px;
    /* Fixed height */
    background-color: rgba(82, 20, 72, 0.15);
    /* Purple background */
    margin-top: 90px;
    /* Increased top margin */
    color: white;
    /* Text color */
    display: flex;
    /* Use flexbox for alignment */
    flex-direction: column;
    /* Vertical alignment */
    align-items: center;
    /* Center content horizontally */
    padding: 0 20px;
    /* Left and right padding, no top padding */
}

.review-container {
    display: flex;
    flex-wrap: wrap;
    /* Дозволяємо переноси елементів */
    justify-content: center;
    /* Центруємо, щоб зменшити простір */
    gap: 10px;
    /* Встановлюємо простір між блоками відгуків */
    margin-top: 40px;
    /* Відступ зверху, щоб розділити заголовок і блоки */
}

.review-title {
    margin: 0;
    /* Видаляємо зайві відступи */
    font-family: 'Alegreya Sans SC';
    /* Шрифт заголовка */
    font-size: 35px;
    /* Розмір шрифту заголовка */
    text-align: left;
    /* Вирівнювання тексту по лівому краю */
    color: rgba(47, 0, 45, 0.85);
    /* Колір заголовка */
    padding-top: 40px;
    /* Відступ зверху */
    padding-left: 10px;
    /* Відступ зліва */
    align-self: flex-start;
    /* Вирівнювання заголовка по лівому краю контейнера */
}

.review-container > div {
    margin: 0 5px;
    /* Зменшуємо зовнішній відступ між блоками */
}

.review-container > :first-child {
    margin-left: 0;
    /* Лівий блок без зсуву */
}

.review-container > :last-child {
    margin-right: 0;
    /* Правий блок без зсуву */
}

.favorites-container {
    background-color: rgba(82, 20, 72, 0.15);
    width: 100%;
    height: 490px;
    margin: 20px auto;
    margin-top: 400px;
    padding-top: 10px;
    /* Додаємо верхній внутрішній відступ */
}

.favorites-title {
    font-family: 'Alegreya Sans SC';
    font-size: 35px;
    color: #521448;
    text-align: left;
    /* Вирівнюємо заголовок зліва */
    padding-left: 25px;
}

.favorites-grid {
    display: flex;
    justify-content: flex-start;
    /* Вирівнюємо елементи на початку */
    flex-wrap: wrap;
    gap: 10px;
    /* Додаємо відступ між елементами */
}

.favorite-item {
    width: 240px;
    height: 340px;
    margin: 0 25px 15px;
    /* Встановлюємо однакові відступи зліва і справа по 30px, 15px знизу */
}

.favorite-photo {
    width: 100%;
    /* Змінюємо ширину на 100%, щоб фото заповнювало контейнер */
    height: 100%;
    /* Змінюємо висоту на 100% */
    object-fit: cover;
    margin-bottom: 10px;
    /* Додаємо відступ знизу між фото */
}

.recipe-container {
    width: 100%;
}

.recipe-title {
    font-family: 'Alegreya Sans SC';
    font-size: 35px;
    color: #521448;
    text-align: left;
    margin-bottom: 30px;
    padding-left: 30px;
}

.recipe-grid {
    display: flex;
    justify-content: flex-start;
    /* Вирівнюємо елементи до початку */
    flex-wrap: wrap;
    gap: 25px;
    /* Встановлюємо рівномірний відступ між фото */
    padding: 0 30px;
    /* Встановлюємо рівномірний відступ зліва і справа */
}

.recipe-item {
    width: 340px;
    height: 420px;
}

.recipe-photo {
    width: 100%;
    height: 480px;
    object-fit: cover;
}

.recipe-info {
    margin-top: 10px;
}

.recipe-icons {
    display: flex;
    justify-content: flex-start;
    /* Вирівнювання елементів на початку */
    margin-left: 50px;
    gap: 50px;
    /* Встановлює відступ між іконками */
    margin-bottom: 5px;
}

.time-icon,
.ingredients-icon {
    display: flex;
    align-items: center;
    font-size: 14px;
    /* Зменшений розмір тексту */
    margin-right: 10px;
}

.icon {
    width: 30px;
    /* Розмір кожної іконки */
    height: 30px;
    margin-right: 5px;
    vertical-align: middle;
}

.recipe-name {
    font-size: 18px;
    font-family: 'Alegreya Sans SC';
    font-weight: 300;
    /* Тонший текст */
    letter-spacing: 1px;
    /* Відступи між літерами трохи більші */
    color: #2f002d;
}
</style>
