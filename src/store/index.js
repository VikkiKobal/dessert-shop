import { createStore } from "vuex";
import { database } from '../firebase-config'; // Використовуйте цей імпорт для налаштувань Firebase
import { collection, getDocs } from 'firebase/firestore';

const store = createStore({
    state() {
        return {
            desserts: [],
            selectedCategory: null,
            cart: [],
        };
    },
    mutations: {
        setSelectedCategory(state, category) {
            state.selectedCategory = category;
        },
        addToCart(state, dessert) {
            const existingItem = state.cart.find(item => item.id === dessert.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...dessert, quantity: 1 });
            }
        },
        removeFromCart(state, dessertId) {
            state.cart = state.cart.filter(item => item.id !== dessertId);
        },
        increaseQuantity(state, id) {
            const item = state.cart.find(item => item.id === id);
            if (item) {
                item.quantity++;
            }
        },
        decreaseQuantity(state, id) {
            const item = state.cart.find(item => item.id === id);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        clearCart(state) {
            state.cart = [];  // Виправлено тут
        },
        SET_DESSERTS(state, items) {
            // Якщо дані змінюються, оновлюємо state
            if (JSON.stringify(state.desserts) !== JSON.stringify(items)) {
                state.desserts = items;
            }
        }
    },
    actions: {
        triggerAddToCart({ commit }, dessert) {
            commit('addToCart', dessert);
        },
        async setDesserts({ commit }) {
            try {
                const querySnapshot = await getDocs(collection(database, 'desserts'));

                if (!querySnapshot.empty) {
                    const items = [];
                    querySnapshot.forEach((doc) => {
                        items.push({ id: doc.id, ...doc.data() });
                    });
                    commit('SET_DESSERTS', items);
                } else {
                    console.warn("No data available in 'desserts' collection.");
                }
            } catch (error) {
                console.error("Error fetching desserts:", error);
            }
        }
    },

    getters: {
        getDesserts(state) {
            return state.desserts;
        },
        getDessertById: (state) => (id) => {
            return state.desserts.find(dessert => dessert.id === id);
        },
        getCartItems(state) {
            return state.cart;
        }
    }
});

export default store;
