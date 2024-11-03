import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import DessertsPage from '../views/DessertsPage.vue';
import DessertInfoView from '../views/DessertInfoView.vue';
import CartView from '../views/CartView.vue';

const routes = [
    {
        path: '/dessert/:id',
        name: 'DessertInfoView',
        component: DessertInfoView,
        props: true,
    },
    { path: '/', name: 'home', component: MainPage },
    { path: '/desserts', name: 'desserts', component: DessertsPage },
    { path: '/cart', name: 'cart', component: CartView },
    { path: '/about', name: 'about', component: () => import('../views/AboutPage.vue') },
    { path: '/faq', name: 'faq', component: () => import('../views/FAQPage.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
