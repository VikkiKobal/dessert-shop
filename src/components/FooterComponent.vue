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
                    <p class="consultation-description">
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
        <div class="footer-bottom">
            <span class="copyright">Усі права захищено © 2024</span>
            <div class="social-icons">
                <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                    <i class="fab fa-instagram icon"></i>
                </a>
                <a href="https://www.pinterest.com" target="_blank" aria-label="Pinterest">
                    <i class="fab fa-pinterest icon"></i>
                </a>
                <a href="https://t.me/yourchannel" target="_blank" aria-label="Telegram">
                    <i class="fab fa-telegram icon"></i>
                </a>
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
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.footer-component {
    background-color: rgba(227, 180, 219, 0.1);
    padding: 20px;
    margin-top: 90px;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.consultation {
    display: flex;
    flex-direction: row;
    max-width: 800px;
    width: 100%;
}

.footer-pictures {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
}

.footer-image {
    width: 300px;
    margin: 5px;
    height: auto;
}

.footer-text {
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    margin-left: 50px;
}

.consultation-title {
    font-family: 'Roboto';
    font-size: 35px;
    color: #2f002d;
    opacity: 0.85;
    margin-bottom: 20px;
}

footer p {
    font-family: 'Roboto';
    font-size: 18px;
    color: #000000;
    width: 500px;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

form input {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #ffffff;
    border: 0.3px solid #4b2348;
    width: 300px;
}

.submit-button {
    padding: 10px;
    background-color: #521448;
    color: white;
    border: none;
    font-family: 'Roboto';
    font-size: 16px;
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
    justify-content: center;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 2px;
    margin-top: 12px;
}

.footer-bottom .copyright {
    font-family: 'Roboto';
    font-size: 16px;
    color: rgba(47, 0, 45, 0.85);
}

.social-icons {
    display: flex;
    gap: 10px;
}

.icon {
    font-size: 24px;
    color: rgba(47, 0, 45, 0.85);
    transition: transform 0.3s, color 0.3s;
}

.icon:hover {
    transform: scale(1.1);
    color: #521448;
}

@media (max-width: 1024px) {
    .footer-content {
        flex-direction: column;
        align-items: center;
    }
    .consultation {
        flex-direction: column;
        align-items: center;
    }
    .footer-pictures {
        margin-right: 0;
    }
    .footer-image {
        width: 80%;
        max-width: 300px;
    }
}

@media (max-width: 768px) {
    .consultation-title {
        font-size: 28px;
    }
    footer p {
        width: 100%;
    }
    form input {
        width: 90%;
    }
    .submit-button {
        width: 100%;
    }
}

@media (max-width: 425px) {
    .consultation-title {
        font-size: 24px;
    }
    .submit-button {
        padding: 8px;
        font-size: 14px;
    }
    .icon {
        font-size: 20px;
    }
}
</style>
