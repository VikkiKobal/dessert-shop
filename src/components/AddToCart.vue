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
            quantity: 1, // Default quantity
        }
    },
    methods: {
        handleClick() {
            if (this.onClick) {
                this.onClick(this.quantity) // Pass quantity to onClick handler
            }
        },
        incrementQuantity() {
            this.quantity++ // Increase quantity by 1
        },
        decrementQuantity() {
            if (this.quantity > 1) {
                this.quantity-- // Decrease quantity by 1 if greater than 1
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
    position: relative; /* Positioning for the quantity */
}

.main-button:hover {
    background-color: #3c0f0f;
}

.quantity {
    background: rgba(255, 255, 255, 0.8); /* Background for quantity */
    border-radius: 50%; /* Make quantity circular */
    width: 40px; /* Fixed width for circular shape */
    height: 40px; /* Fixed height for circular shape */
    display: flex; /* Use flexbox to center text */
    align-items: center; /* Center vertically */
    justify-content: center; /* Center horizontally */
    margin-left: 10px; /* Space between button text and quantity */
    position: absolute; /* Position inside button */
    top: 7px; /* Adjust as needed */
    right: 10px; /* Adjust as needed */
    font-size: 14px; /* Adjust font size as needed */
    color: #2f002d; /* Color for the text */
}

.quantity-controls {
    display: flex;
    align-items: center;
    margin-left: 10px; /* Space between button and controls */
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
    margin: 0 5px; /* Space between buttons */
    opacity: 0.85;
}

.control-button:hover {
    background-color: #3c0f0f;
}

.quantity-display {
    font-size: 18px; /* Font size for quantity display */
    color: #2f002d; /* Color for quantity */
}
</style>
