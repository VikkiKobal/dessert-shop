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
            message: 'Товар успішно додано до кошика!',
            isVisible: true,
        }
    },
    methods: {
        closeMessage() {
            this.isVisible = false
        },
    },
}
</script>

<style scoped>
.success-message {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #4caf50;
    color: white;
    padding: 15px;
    border-radius: 5px;
    z-index: 1000;
}

.message-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-button {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
}
</style>
