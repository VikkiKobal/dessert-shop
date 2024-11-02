<template>
    <v-app>
        <AppHeader />
        <v-container>
            <router-view />
        </v-container>
    </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue' // імпортуйте заголовок, якщо він є

export default {
    name: 'App',
    components: {
        AppHeader, // зареєструйте компонент заголовка
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
}
</style>
