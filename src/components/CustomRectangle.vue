<template>
    <div class="rectangle">
        <img :src="clientPhoto" alt="Client Photo" class="client-photo" />
        <p class="client-feedback">{{ feedbackText }}</p>
        <div class="rating">
            <span v-for="star in 5" :key="star" class="star">★</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CustomRectangle',
    props: {
        clientPhoto: {
            type: String,
            required: true,
        },
        feedbackText: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped>
.rectangle {
    width: 375px;
    height: 450px;
    border-radius: 30px;
    border: 1px solid rgba(82, 20, 72, 0.3);
    background: white;
    padding: 20px;
    box-sizing: border-box;
}

.client-photo {
    width: 190px;
    height: 210px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.client-feedback {
    font-family: 'Roboto';
    font-size: 16px;
    color: #333;
}

.rating {
    margin-top: 10px;
}

.star {
    color: gold;
    font-size: 30px;
}
</style>
