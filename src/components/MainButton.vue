<template>
    <button @click="handleClick">{{ buttonText }}</button>
</template>

<script>
export default {
    name: 'MainButton',
    props: {
        buttonText: {
            type: String,
            default: 'Натисніть',
        },
        onClick: {
            type: Function,
            default: null,
        },
    },
    methods: {
        handleClick() {
            if (this.onClick) {
                this.onClick()
            } else {
                alert('Кнопка натиснута!')
            }
        },
    },
}
</script>



<style scoped>
button {
    background-color: #2f002d;
    color: white;
    font-size: 18px;
    font-family: 'Alegreya Sans SC';
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    opacity: 0.85;
    width: 245px;
    height: 55px;
}

button:hover {
    background-color: #3c0f0f;
}
</style>
