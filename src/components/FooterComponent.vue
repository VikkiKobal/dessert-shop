<template>
    <footer class="footer-component">
        <div class="footer-content">
            <div class="consultation">
                <div class="footer-pictures">
                    <img src="../assets/cafe.jpg" alt="Консультація" class="footer-image" />
                    <img src="../assets/footer2.jpg" alt="Консультація" class="footer-image" />
                </div>
                <div class="footer-text">
                    <h2 class="consultation-title">Записатися на консультацію</h2>
                    <p>
                        Не впевнені у виборі десерта? Запишіться на консультацію! Ми допоможемо вам вибрати ідеальний
                        десерт для вашого свята. Просто заповніть форму, і ми зв'яжемося з вами для узгодження деталей.
                    </p>
                    <form @submit.prevent="submitForm">
                        <input type="text" v-model="name" placeholder="Введіть ім'я" required />
                        <input type="email" v-model="email" placeholder="Введіть електронну пошту" required />
                        <button type="submit" class="submit-button">Записатися</button>
                    </form>
                </div>
            </div>
            <div class="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10639.568980841437!2d22.279988334693112!3d48.6223385471801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919b944b6e3d9%3A0xda6ae0130042a3c!2z0KPQttCz0L7RgNC-0LQsINCX0LDQutCw0YDQv9Cw0YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sua!4v1730037017492!5m2!1sru!2sua"
                    width="100%"
                    height="350"
                    style="border: 1"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
        }
    },

    methods: {
        submitForm() {
            console.log(`Запис на консультацію: ${this.name}, ${this.email}`)
            this.name = ''
            this.email = ''
        },
    },
}
</script>

<style scoped>
.footer-component {
    background-color: rgba(227, 180, 219, 0.1);
    padding: 20px;
    margin-top: 200px;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to the left */
}

.consultation {
    display: flex;
    flex-direction: row; /* Keep image and text/form side by side */
    max-width: 800px;
    width: 100%;
}

.footer-pictures {
    display: flex;
    flex-direction: row;
    margin-right: 100px;
}

.footer-image {
    width: 300px;
    margin: 5px;
    height: 500px;
}

.footer-text {
    text-align: left;
    display: flex; /* Keep text and form aligned */
    flex-direction: column; /* Stack title, paragraph, and form */
    margin-top: 50px;
}

.consultation-title {
    font-family: 'Alegreya Sans SC';
    font-size: 35px;
    color: #2f002d;
    opacity: 0.85;
    margin-bottom: 20px;
}

footer p {
    font-family: 'Alegreya Sans SC';
    font-size: 18px;
    width: 500px;
}

form {
    display: flex;
    flex-direction: column;
}

form input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #521448;
    width: 300px;
}

.submit-button {
    padding: 10px;
    background-color: #521448;
    color: white;
    border: none;
    font-family: 'Alegreya Sans SC';
    font-size: 15px;
    width: 120px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #3c0f0f;
}

.map-container {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center; /* Center the map */
}
</style>
