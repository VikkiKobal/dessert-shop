<template>
    <header class="header">
        <nav class="navbar">
            <ul class="nav-links">
                <li><router-link :to="{ name: 'home' }">ГОЛОВНА</router-link></li>
                <li><router-link :to="{ name: 'desserts' }">ДЕСЕРТИ</router-link></li>
                <li><router-link :to="{ name: 'about' }">ПРО НАС</router-link></li>
                <li><router-link :to="{ name: 'faq' }">Q&A</router-link></li>
            </ul>
            <div @click="openCart" class="cart-icon">
                <img src="@/assets/shopping-cart.png" alt="Icon" class="icon" />
                <div class="cart-count" v-if="$store.state.cart.length > 0">
                    {{ $store.state.cart.length }}
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    methods: {
        openCart() {
            this.$router.push('/cart')
        },
    },
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(204, 194, 204);
    padding: 30px 0;
    width: 100%;
    background-size: cover;
    background-position: center;
}

.navbar {
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
}

.nav-links {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    flex-grow: 1;
    justify-content: center;
}

.nav-links li {
    margin: 0 15px;
}

.nav-links a {
    position: relative;
    text-decoration: none;
    font-size: 22px;
    color: rgba(47, 0, 45, 0.85);
    font-weight: bold;
    font-family: 'Roboto';
    padding: 4px 0;
    transition: color 0.3s;
}

.nav-links a::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: rgba(47, 0, 45, 0.85);
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.5s ease;
}

.nav-links a:hover::before {
    transform: scaleX(1);
}

.nav-links a:hover {
    color: rgba(47, 0, 45, 1);
}

.icon {
    width: 47px;
    height: 40px;
}

.cart-icon {
    position: relative;
    cursor: pointer;
}

.cart-count {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #60456b;
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
}

@media (max-width: 1024px) {
    .icon {
        width: 40px;
        height: 35px;
    }

    .nav-links a {
        font-size: 22px;
    }

    .navbar {
        padding: 0 10px;
    }
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        padding: 10px;
    }

    .nav-links {
        flex-direction: column;
    }

    .nav-links li {
        margin: 10px 0;
    }

    .icon {
        width: 30px;
        height: 30px;
    }

    .nav-links a {
        font-size: 20px;
    }
}

@media (max-width: 480px) {
    .icon {
        width: 25px;
        height: 25px;
    }

    .nav-links a {
        font-size: 18px;
    }
}
</style>
