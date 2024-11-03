<template>
    <div class="success-message" v-if="isVisible">
        <div class="message-content">
            <p>{{ message }}</p>
            <button @click="closeMessage" class="close-button">✖</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Товар успішно додано до кошика!', // Повідомлення, яке потрібно показати
            isVisible: true, // Встановлюємо видимість на true
        }
    },
    methods: {
        closeMessage() {
            this.isVisible = false // Закриваємо повідомлення при натисканні на хрестик
        },
    },
}
</script>

<style scoped>
.success-message {
    position: fixed; /* Фіксована позиція */
    top: 20px; /* Відстань від верху */
    left: 50%; /* Центрування по горизонталі */
    transform: translateX(-50%); /* Центрування по горизонталі */
    background-color: #4caf50; /* Зелений фон */
    color: white; /* Білий текст */
    padding: 15px;
    border-radius: 5px;
    z-index: 1000; /* Високий z-index, щоб бути зверху */
}

.message-content {
    display: flex; /* Використання flexbox для вирівнювання вмісту */
    justify-content: space-between; /* Простір між текстом і кнопкою закриття */
    align-items: center; /* Центрування по вертикалі */
}

.close-button {
    background: none; /* Без фону */
    border: none; /* Без рамки */
    color: white; /* Білий текст */
    font-size: 20px; /* Розмір шрифта для кнопки */
    cursor: pointer; /* Курсор при наведенні */
}
</style>
