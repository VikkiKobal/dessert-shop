<template>
    <button class="custom-button">{{ label }}</button>
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
        label: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped>
.custom-button {
    width: 290px;
    height: 60px;
    background-color: rgba(82, 20, 72, 0.1);
    border: 0.5px solid #521448;
    border-radius: 30px;
    font-family: Alegreya Sans SC;
    font-size: 20px;
    color: rgb(0, 0, 0);
    cursor: pointer;
    transition: background-color 0.3s;
}

.custom-button:hover {
    background-color: rgba(82, 20, 72, 0.2);
}
</style>
