import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            desserts: [
                { id: 1, url: "https://i.pinimg.com/736x/18/9b/2e/189b2efa4278b5ff2ccff8c283eee3c6.jpg", category: "фрукти в шоколаді", title: "Полуниця в бельгійському шоколаді", price: 360 },
                { id: 2, url: "https://i.pinimg.com/564x/74/6b/99/746b99a584a76e0a0e8065e09f161f1d.jpg", category: "чизкейки", title: "Шоколадний чизкейк", price: 850 },
                { id: 3, url: "https://i.pinimg.com/736x/54/a4/3b/54a43b07bff54c0acc7854a8057222e9.jpg", category: "фрукти в шоколаді", title: "Полуниця в італійському шоколаді", price: 280 },
                { id: 4, url: "https://i.pinimg.com/564x/ed/d1/5f/edd15f3d368fff160830ccf1279415d6.jpg", category: "чизкейки", title: "Шоколадний чизкейк", price: 955 },
                { id: 5, url: "https://i.pinimg.com/564x/3f/73/5d/3f735dfa1fa4f04490eb353e801a9764.jpg", category: "чизкейки", title: "Ягодний чизкейк", price: 960 },
                { id: 6, url: "https://i.pinimg.com/564x/54/05/12/54051222a5751f8c368e8933e2097a30.jpg", category: "торти", title: "Фруктовий торт", price: 1200 },
                { id: 7, url: "https://i.pinimg.com/736x/dd/bd/93/ddbd936caa5a2fee239ac7eda7fd54ef.jpg", category: "фрукти в шоколаді", title: "Вишня в шоколаді", price: 410 },
                { id: 8, url: "https://i.pinimg.com/enabled_lo/564x/7e/91/a3/7e91a34ec12ec02f92ef241a654b88f6.jpg", category: "фрукти в шоколаді", title: "Полуниця в шоколаді", price: 425 },
                { id: 9, url: "https://i.pinimg.com/enabled_lo/564x/01/fb/2f/01fb2f81d986b3844b899a6358e773a8.jpg", category: "торти", title: "Шоколадний торт з вишнею", price: 910 },
                { id: 10, url: "https://i.pinimg.com/564x/f5/39/53/f539537f23f20272b738bfbfbdd5b932.jpg", category: "торти", title: "Ванільний торт", price: 1090 },
                { id: 11, url: "https://i.pinimg.com/564x/55/d1/1b/55d11b6a4f22a70f163c8a36597bc0d9.jpg", category: ["макаронс", "торти"], title: "Еклери зі смаком тирамісу", price: 112 },
                { id: 12, url: "https://i.pinimg.com/736x/24/33/36/243336f743db2701d60719a64eac0743.jpg", category: "макаронс", title: "Макарон ванільний", price: 70 },
                { id: 13, url: "https://i.pinimg.com/564x/1d/2c/a0/1d2ca05d1b7cf9e5bf17a250c1a1ae7a.jpg", category: "чизкейки", title: "Полуничний чизкейк", price: 950 },
                { id: 14, url: "https://i.pinimg.com/564x/b9/55/9d/b9559d5c22fbf2dc83afcf9bbab4991b.jpg", category: "чизкейки", title: "Карамельний чизкейк", price: 760 },
                { id: 15, url: "https://i.pinimg.com/564x/0b/0c/40/0b0c40fed19c83094fe4017150e688d8.jpg", category: "макаронс", title: "Макарон шоколадний", price: 65 },
                { id: 16, url: "https://i.pinimg.com/736x/19/02/53/1902539125e7a1a6c56ef329371f410c.jpg", category: ["фрукти в шоколаді", "торти"], title: "Банани в шоколаді", price: 360 },
                { id: 17, url: "https://i.pinimg.com/564x/81/08/bf/8108bfa47b1ea635496beccb17a254f6.jpg", category: "чизкейки", title: "Чизкейк з лимоном", price: 850 },
                { id: 18, url: "https://i.pinimg.com/564x/22/5b/64/225b64b83c653d5a69323894c781bc93.jpg", category: "чизкейки", title: "Чизкейк з персиком", price: 950 },
                { id: 29, url: "https://i.pinimg.com/564x/ac/8f/3e/ac8f3e4ae3dd78b00f57edf04cebef36.jpg", category: "чизкейки", title: "Ягодно-ванільний чизкейк", price: 780 },
                { id: 20, url: "https://i.pinimg.com/736x/cb/ce/e2/cbcee299f5644e8aa9b65005a18166c3.jpg", category: "торти", title: "Шоколадний торт з горіхами", price: 1150 },
                { id: 21, url: "https://i.pinimg.com/736x/f6/a5/bc/f6a5bca8d2ceb74167cd4f6567d0ad03.jpg", category: "торти", title: "Медовик", price: 1000 },
                { id: 22, url: "https://i.pinimg.com/564x/97/e8/a6/97e8a668d26ad858be17840015d26a48.jpg", category: "торти", title: "Торт з малини", price: 980 },
                { id: 23, url: "https://i.pinimg.com/736x/a4/73/21/a47321ddb089e497b2cd689fc859e4c1.jpg", category: "макаронс", title: "Еклери з кремом", price: 120 },
                { id: 24, url: "https://i.pinimg.com/736x/73/6c/6a/736c6a114a265d9b601810ffcb2f4e2f.jpg", category: "макаронс", title: "Макарон малиновий", price: 75 },
                { id: 25, url: "https://i.pinimg.com/564x/1f/64/0e/1f640e12b22021ccb1e40ba8379f378d.jpg", category: "чизкейки", title: "Чизкейк з шоколадом", price: 920 },
            ],

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
                existingItem.quantity += 1; // Increase quantity if already in cart
            } else {
                state.cart.push({ ...dessert, quantity: 1 }); // Add new item with quantity
            }
        },
    },
    actions: {
        triggerSuccessMessage({ commit }) {
            commit('showSuccessMessage')
        }
    },
    getters: {
        getDesserts(state) {
            if (state.selectedCategory) {
                return state.desserts.filter(dessert => {
                    // Перевіряємо, чи є dessert.category масивом
                    if (Array.isArray(dessert.category)) {
                        // Повертаємо true, якщо масив містить обрану категорію
                        return dessert.category.includes(state.selectedCategory);
                    } else {
                        // В іншому випадку, просто порівнюємо рядок
                        return dessert.category === state.selectedCategory;
                    }
                });
            }
            return state.desserts;
        },
        getDessertById: (state) => (id) => {
            return state.desserts.find(dessert => dessert.id === Number(id));
        },
        getCartItems(state) {
            return state.cart; // Повертає елементи кошика
        }

    }


});

export default store;