<template>
    <div class="add-to-cart">
        <button @click="handleClick" class="main-button">
            Додати до кошика
            <span class="quantity">{{ quantity }}</span>
        </button>
        <div class="quantity-controls">
            <button @click="decrementQuantity" class="control-button">-</button>
            <span class="quantity-display">{{ quantity }}</span>
            <button @click="incrementQuantity" class="control-button">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddToCartButton',
    props: {
        buttonText: {
            type: String,
            default: 'Додати до кошика',
        },
        onClick: {
            type: Function,
            default: null,
        },
    },
    data() {
        return {
            quantity: 1,
        }
    },
    methods: {
        handleClick() {
            if (this.onClick) {
                this.onClick(this.quantity)
            }
        },
        incrementQuantity() {
            this.quantity++
        },
        decrementQuantity() {
            if (this.quantity > 1) {
                this.quantity--
            }
        },
    },
}
</script>

<style scoped>
.add-to-cart {
    display: flex;
    align-items: center;
}

.main-button {
    background-color: #2f002d;
    color: white;
    font-size: 18px;
    font-family: 'Roboto';
    border: none;
    border-radius: 30px;
    cursor: pointer;
    opacity: 0.85;
    width: 300px;
    height: 55px;
    position: relative;
}

.main-button:hover {
    background-color: #3c0f0f;
}

.quantity {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    position: absolute;
    top: 7px;
    right: 10px;
    font-size: 14px;
    color: #2f002d;
}

.quantity-controls {
    display: flex;
    align-items: center;
    margin-left: 10px;
}

.control-button {
    width: 35px;
    height: 35px;
    font-size: 20px;
    background-color: #2f002d;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 5px;
    opacity: 0.85;
}

.control-button:hover {
    background-color: #3c0f0f;
}

.quantity-display {
    font-size: 18px;
    color: #2f002d;
}
</style>
