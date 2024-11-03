<template>
    <div class="form-container">
        <div class="contact-form">
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
                    <Flatpickr v-model="form.date" id="date" placeholder="Виберіть дату" required></Flatpickr>
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
                <button type="submit">Надіслати</button>
            </form>
        </div>

        <div class="cart">
            <h1>Ваше замовлення</h1>
            <ul>
                <li v-for="item in cartItems" :key="item.id" class="cart-item">
                    <img :src="item.url" alt="Dessert" class="dessert-image" />
                    <div class="dessert-details">
                        <h3>{{ item.title }}</h3>
                        <p>Ціна: {{ item.price }} грн</p>
                        <p>Кількість: {{ item.quantity }}</p>
                        <p>Сума: {{ calculateTotal(item) }} грн</p>
                        <button @click="removeFromCart(item.id)">Видалити</button>
                    </div>
                </li>
            </ul>
            <div class="total">
                <h3>Загальна сума: {{ totalPrice }} грн</h3>
            </div>
        </div>
    </div>
</template>

<script>
import Flatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import { mapGetters } from 'vuex'

export default {
    components: {
        Flatpickr,
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
    },
}
</script>

<style scoped>
.form-container {
    display: flex; /* Use flexbox for layout */
    justify-content: flex-start; /* Align items at the start */
    align-items: flex-start; /* Align items at the top */
    margin-top: 50px; /* Top margin for the entire container */
    margin-left: 70px; /* Adjusted left margin */
}

.contact-form {
    width: 40%; /* Width of the contact form */
    font-family: 'Alegreya Sans SC';
    padding-left: 20px; /* Optional left padding */
    text-align: left; /* Align text to the left */
}

.cart {
    width: 30%; /* Set a width for the cart */
    margin-left: 10px; /* Reduced left margin */
}

/* Existing styles for the contact form and cart items */
h1 {
    margin-bottom: 20px;
    font-family: 'Alegreya Sans SC';
    font-size: 30px;
    color: #4b2348;
}

p {
    margin-bottom: 20px;
    font-size: 20px;
}

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

.cart {
    margin-left: 300px; /* Adjust margin for cart */
}

.cart-item {
    display: flex;
    margin-bottom: 15px;
}

.dessert-image {
    width: 180px;
    height: 180px;
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
</style>
