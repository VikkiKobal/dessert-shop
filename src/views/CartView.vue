<template>
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
</template>

<script>
import Flatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default {
    components: {
        Flatpickr,
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
            this.form = {
                fullName: '',
                phone: '',
                email: '',
                date: null,
                paymentMethod: '',
            }
        },
    },
}
</script>

<style scoped>
.contact-form {
    text-align: left;
    margin-top: 50px;
    width: 40%; /* Задаємо ширину форми 30% */
    font-family: 'Alegreya Sans SC';
    padding-left: 100px; /* Лівий відступ */
}

h1 {
    margin-bottom: 20px;
}

p {
    margin-bottom: 20px;
    font-family: 'Alegreya Sans SC';
    font-size: 20px;
}

.form-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-row {
    display: flex;
    gap: 10px; /* Зменшуємо відстань між полями */
}

.form-group {
    flex: 1; /* Дозволяє елементам займати доступний простір */
}

input[type='text'],
input[type='tel'],
input[type='email'],
.flatpickr-input {
    padding: 10px;
    border-radius: 20px;
    font-family: 'Alegreya Sans SC';
    border: 1px solid #521448;
    background-color: white;
    font-size: 16px;
    width: 100%;
}

button {
    padding: 10px;
    font-family: 'Alegreya Sans SC';
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

h1 {
    font-size: 30px;
    color: #4b2348;
}

/* Нові стилі для радіокнопок */
label {
    font-size: 18px; /* Збільшуємо розмір шрифту для тексту */
    display: flex; /* Для вирівнювання кружечка з текстом */
    align-items: center; /* Вертикальне вирівнювання */
}

input[type='radio'] {
    transform: scale(1.5); /* Збільшуємо розмір радіокнопок */
    margin-right: 10px; /* Відступ праворуч для кружечка */
}
</style>
