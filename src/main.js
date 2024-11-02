import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify'; // імпорт Vuetify

createApp(App)
    .use(store)
    .use(router)
    .use(vuetify) // використання Vuetify
    .mount('#app');
