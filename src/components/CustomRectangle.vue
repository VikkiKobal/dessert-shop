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
    width: 190px; /* Width of the image */
    height: 210px; /* Height of the image */
    border-radius: 50%; /* Makes the image circular */
    object-fit: cover; /* Ensures the image covers the entire area */
    margin-bottom: 10px; /* Space below the image */
}

.client-feedback {
    font-family: 'Roboto'; /* Set the font to Alegreya Sans SC */
    font-size: 16px; /* Set the font size to 15px */
    color: #333;
}

.rating {
    margin-top: 10px; /* Adds space between feedback and rating */
}

.star {
    color: gold; /* Set color for stars */
    font-size: 30px; /* Adjust size as necessary */
}
</style>
