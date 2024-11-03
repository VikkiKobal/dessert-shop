<template>
    <button @click="handleClick" class="order-button">
        {{ label }}
        <img src="@/assets/shopping-bag.png" alt="Icon" class="button-icon" />
    </button>
</template>

<script>
export default {
    name: 'OrderButton',
    props: {
        label: {
            type: String,
            default: 'Замовити',
        },
    },
    methods: {
        handleClick() {
            this.$emit('click')
        },
    },
}
</script>

<style scoped>
.order-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #deddd1;
    color: black;
    padding: 15px 25px;
    width: 215px;
    height: 50px;
    font-size: 20px;
    font-family: 'Roboto';
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.order-button:hover {
    background-color: #cfcfc2;
}

.button-icon {
    margin-left: 10px;
    width: 20px;
    height: 20px;
}
</style>
