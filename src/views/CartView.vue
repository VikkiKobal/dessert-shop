<template>
    <div class="form-container">
        <div v-if="cartItems.length > 0" class="contact-form">
            <h1>Заповніть контактну форму</h1>
            <p>Ваші контактні дані:</p>
            <form @submit.prevent="submitForm" class="form-content">
                <div class="form-group">
                    <input type="text" id="fullName" v-model="form.fullName" placeholder="Прізвище та ім'я" required />
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="tel" id="phone" v-model="form.phone" placeholder="Номер телефону" required />
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" v-model="form.email" placeholder="E-mail" required />
                    </div>
                </div>
                <div class="form-group">
                    <label for="date">Виберіть дату, на яку вам потрібно десерт:</label>
                    <Flatpickr v-model="form.date" id="date" placeholder="Виберіть дату" required />
                </div>
                <div class="form-group">
                    <p>Виберіть спосіб оплати:</p>
                    <label>
                        <input type="radio" v-model="form.paymentMethod" value="card" required />
                        Карта
                    </label>
                    <label>
                        <input type="radio" v-model="form.paymentMethod" value="cash" required />
                        Готівка
                    </label>
                </div>
                <button type="submit">Оформити замовлення</button>
            </form>
        </div>

        <div v-else class="empty-cart">
            <img src="@/assets/empty-cart.png" alt="Empty Cart" class="empty-cart-icon" />
            <p class="empty-cart-text">Ваш кошик порожній. Час додати щось смачненьке!</p>
            <router-link to="/desserts" class="catalog-button">
                <MainButton buttonText="Переглянути каталог" />
            </router-link>
        </div>

        <div class="cart" v-if="cartItems.length > 0">
            <h1>Ваше замовлення</h1>
            <div class="cart-items-container">
                <ul>
                    <li v-for="item in cartItems" :key="item.id" class="cart-item">
                        <img :src="item.url" alt="Dessert" class="dessert-image" />
                        <div class="dessert-details">
                            <h3>{{ item.title }}</h3>
                            <p>Ціна: {{ item.price }} грн</p>
                            <p>
                                Кількість:
                                <button @click="decreaseQuantity(item.id)" class="quantity-button">-</button>
                                {{ item.quantity }}
                                <button @click="increaseQuantity(item.id)" class="quantity-button">+</button>
                            </p>
                            <p>Сума: {{ calculateTotal(item) }} грн</p>
                            <button @click="removeFromCart(item.id)">Видалити</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="total">
                <h3>Загальна сума: {{ totalPrice }} грн</h3>
            </div>
        </div>
    </div>
</template>



<script>
import MainButton from '@/components/MainButton.vue'
import Flatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import { mapGetters } from 'vuex'

export default {
    components: {
        Flatpickr,
        MainButton,
    },
    computed: {
        ...mapGetters(['getCartItems']),
        cartItems() {
            return this.getCartItems
        },
        totalPrice() {
            return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
        },
    },
    data() {
        return {
            form: {
                fullName: '',
                phone: '',
                email: '',
                date: null,
                paymentMethod: '',
            },
        }
    },
    methods: {
        submitForm() {
            console.log(this.form)
            // Додати логіку для обробки форми
            this.form = {
                fullName: '',
                phone: '',
                email: '',
                date: null,
                paymentMethod: '',
            }
        },
        calculateTotal(item) {
            return item.price * item.quantity
        },
        removeFromCart(id) {
            this.$store.commit('removeFromCart', id) // Додати мутацію для видалення елемента
        },

        increaseQuantity(id) {
            this.$store.commit('increaseQuantity', id) // Додати мутацію для збільшення кількості
        },
        decreaseQuantity(id) {
            this.$store.commit('decreaseQuantity', id) // Додати мутацію для зменшення кількості
        },
    },
}
</script>

<style scoped>
.form-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 50px;
    margin-left: 70px;
}

.dessert-details {
    text-align: left; /* Вирівнювання тексту по лівому краю */
    margin-left: 20px;
}

.dessert-details h3 {
    margin: 10px 0; /* Відстань під назвою товару */
}

.dessert-details p:nth-of-type(1),
.dessert-details p:nth-of-type(2),
.dessert-details p:nth-of-type(3) {
    margin-bottom: 3px; /* Зменшення відстані між цими елементами */
}

.contact-form {
    width: 40%;
    font-family: 'Roboto';
    padding-left: 20px;
    text-align: left;
}

.cart {
    width: 50%; /* Збільшення ширини контейнера кошика */
    margin-left: 100px; /* Зменшення лівого відступу для переміщення правіше */
    max-height: 800px; /* Додати максимальну висоту для прокручування */
    overflow-y: auto; /* Додати прокручування для вертикальної осі */
}

/* Новий стиль для контейнера з товарами */
.cart-items-container {
    max-height: 450px; /* Висота контейнера з замовленням */
    overflow-y: auto; /* Додати прокрутку вертикально */
    background-color: rgba(227, 180, 219, 0.1); /* Зміна кольору фону */
    border: 1px solid rgba(227, 180, 219, 0.5); /* Обрамлення */
    border-radius: 10px; /* Закруглення кутів */
    padding: 10px; /* Внутрішні відступи */
}

h1 {
    margin-bottom: 20px;
    font-family: 'Roboto';
    font-size: 30px;
    color: #4b2348;
}

p {
    margin-bottom: 20px;
    font-size: 20px;
}

/* Інші стилі залишаються без змін */
.form-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-row {
    display: flex;
    gap: 10px;
}

.form-group {
    flex: 1;
}

input[type='text'],
input[type='tel'],
input[type='email'],
.flatpickr-input {
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #521448;
    background-color: white;
    font-size: 16px;
    width: 100%;
}

button {
    padding: 10px;
    background-color: #4b2348;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}

button:hover {
    background-color: #3b1a3c;
}

label {
    font-size: 18px;
    display: flex;
    align-items: center;
}

input[type='radio'] {
    transform: scale(1.5);
    margin-right: 10px;
}

.cart-item {
    display: flex;
    margin-bottom: 15px;
}

.dessert-image {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    object-fit: cover;
    margin-right: 10px;
}

.dessert-details {
    flex-grow: 1;
}

.total {
    font-weight: bold;
    font-size: 1.2em;
}

.empty-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 87vh;
    width: 87vw;
}

.empty-cart-icon {
    width: 250px;
    height: 250px;
}

.empty-cart-text {
    font-family: 'Roboto';
    font-size: 22px;
    color: #4b2348;
    margin: 20px 0;
}

.catalog-button {
    margin-top: 20px;
}

.quantity-button {
    width: 40px;
    height: 40px;
}

/* Стилі для екранів шириною до 1200px */
@media (max-width: 1200px) {
    .form-container {
        flex-direction: column; /* Вирівнювання елементів вертикально */
        align-items: center; /* Центрування елементів */
        margin-left: 0; /* Прибираємо лівий відступ */
    }

    .contact-form {
        width: 90%; /* Збільшуємо ширину для менших екранів */
        margin-bottom: 20px; /* Додаємо відступ знизу */
    }

    .cart {
        width: 90%; /* Збільшуємо ширину для менших екранів */
    }
}

/* Стилі для екранів шириною до 768px */
@media (max-width: 768px) {
    .cart-item {
        flex-direction: column; /* Вертикальне вирівнювання елементів замовлення */
        align-items: center; /* Центрування зображення і деталей десерту */
    }

    .dessert-image {
        width: 100%; /* Збільшуємо ширину зображення */
        height: auto; /* Автоматичне висота для збереження пропорцій */
    }

    .dessert-details {
        text-align: center; /* Центруємо текст */
        margin-left: 0; /* Прибираємо лівий відступ */
    }

    input[type='text'],
    input[type='tel'],
    input[type='email'],
    .flatpickr-input {
        font-size: 14px; /* Зменшення шрифту для менших екранів */
    }

    button {
        font-size: 16px; /* Зменшення шрифту для кнопок */
    }

    .empty-cart-icon {
        width: 150px; /* Зменшуємо розмір іконки для порожнього кошика */
        height: 150px;
    }

    .empty-cart-text {
        font-size: 18px; /* Зменшення шрифту для тексту */
    }

    .quantity-button {
        width: 30px; /* Зменшення кнопок для зміни кількості */
        height: 30px;
    }
}

/* Стилі для екранів шириною до 480px */
@media (max-width: 480px) {
    h1 {
        font-size: 24px; /* Зменшення шрифту заголовка */
    }

    p {
        font-size: 16px; /* Зменшення шрифту абзаців */
    }

    .form-group,
    .form-row {
        flex-direction: column; /* Вертикальне вирівнювання елементів форми */
        width: 100%; /* Вирівнювання до повної ширини */
    }

    button {
        width: 100%; /* Кнопки на всю ширину */
    }

    .total {
        font-size: 1em; /* Зменшення шрифту для підсумку */
    }
}
</style>
