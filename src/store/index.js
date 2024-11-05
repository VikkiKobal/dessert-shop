import { createStore } from "vuex";
import 'firebase/database';
import { database } from '../firebase-config';
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
        showSuccessMessage(state) {
            state.showSuccessMessage = true
            setTimeout(() => {
                state.showSuccessMessage = false
            }, 4000)
        },
        hideSuccessMessage(state) {
            state.showSuccessMessage = false
        },
        addToCart(state, dessert) {
            const existingItem = state.cart.find(item => item.id === dessert.id);
            if (existingItem) {
                existingItem.quantity += 1; // Збільшуємо кількість, якщо вже в кошику
            } else {
                state.cart.push({ ...dessert, quantity: 1 }); // Додаємо новий елемент з кількістю
            }
        },
        removeFromCart(state, dessertId) {
            state.cart = state.cart.filter(item => item.id !== dessertId); // Видаляємо елемент з кошика
        },
        increaseQuantity(state, id) {
            const item = state.cart.find(item => item.id === id); // Changed from state.cartItems to state.cart
            if (item) {
                item.quantity++;
            }
        },
        decreaseQuantity(state, id) {
            const item = state.cart.find(item => item.id === id); // Changed from state.cartItems to state.cart
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        SET_DESSERTS(state, items) {
            state.desserts = items;
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
            return state.cart; // Повертає елементи кошика
        }
    }


});

export default store;