import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            desserts: [
                { id: 1, url: "https://i.pinimg.com/736x/18/9b/2e/189b2efa4278b5ff2ccff8c283eee3c6.jpg", category: "фрукти в шоколаді", title: "Полуниця в бельгійському шоколаді" },
                { id: 2, url: "https://i.pinimg.com/564x/74/6b/99/746b99a584a76e0a0e8065e09f161f1d.jpg", category: "чизкейки", title: "Шоколадний чизкейк" },
                { id: 3, url: "https://i.pinimg.com/736x/54/a4/3b/54a43b07bff54c0acc7854a8057222e9.jpg", category: "фрукти в шоколаді", title: "Полуниця в італійському шоколаді" },
                { id: 4, url: "https://i.pinimg.com/564x/ed/d1/5f/edd15f3d368fff160830ccf1279415d6.jpg", category: "чизкейки", title: "Карамельний чизкейк" },
                { id: 5, url: "https://i.pinimg.com/564x/3f/73/5d/3f735dfa1fa4f04490eb353e801a9764.jpg", category: "чизкейки", title: "Ягодний чизкейк" },
                { id: 6, url: "https://i.pinimg.com/564x/54/05/12/54051222a5751f8c368e8933e2097a30.jpg", category: "торти", title: "Фруктовий торт" },
                { id: 7, url: "https://i.pinimg.com/736x/dd/bd/93/ddbd936caa5a2fee239ac7eda7fd54ef.jpg", category: "фрукти в шоколаді", title: "Вишня в шоколаді" },
                { id: 8, url: "https://i.pinimg.com/enabled_lo/564x/7e/91/a3/7e91a34ec12ec02f92ef241a654b88f6.jpg", category: "фрукти в шоколаді", title: "Полуниця в шоколаді" },
                { id: 9, url: "https://i.pinimg.com/enabled_lo/564x/01/fb/2f/01fb2f81d986b3844b899a6358e773a8.jpg", category: "торти", title: "Шоколадний торт з вишнею" },
                { id: 10, url: "https://i.pinimg.com/564x/f5/39/53/f539537f23f20272b738bfbfbdd5b932.jpg", category: "торти", title: "Ванільний торт" },
                { id: 11, url: "https://i.pinimg.com/564x/b9/d8/e7/b9d8e73d5ec3e9321676b5bb3448ce9a.jpg", category: "еклери", title: "Еклери зі смаком тирамісу" },
                { id: 12, url: "https://i.pinimg.com/736x/24/33/36/243336f743db2701d60719a64eac0743.jpg", category: "макаронс", title: "Макарон ванільний" },
                { id: 13, url: "https://i.pinimg.com/564x/1d/2c/a0/1d2ca05d1b7cf9e5bf17a250c1a1ae7a.jpg", category: "чизкейки", title: "Полуничний чизкейк" },
                { id: 14, url: "https://i.pinimg.com/564x/b9/55/9d/b9559d5c22fbf2dc83afcf9bbab4991b.jpg", category: "чизкейки", title: "Карамельний чизкейк" },
                { id: 15, url: "https://i.pinimg.com/564x/0b/0c/40/0b0c40fed19c83094fe4017150e688d8.jpg", category: "макаронс", title: "Макарон шоколадний" },
            ],

            selectedCategory: null,  // New state to track the selected category
        };
    },
    mutations: {
        setSelectedCategory(state, category) {
            state.selectedCategory = category; // Mutation to set selected category
        }
    },
    getters: {
        getDesserts(state) {
            if (state.selectedCategory) {
                return state.desserts.filter(dessert => dessert.category === state.selectedCategory); // Filter desserts by selected category
            }
            return state.desserts; // Return all desserts if no category is selected
        },
        getDessertById: (state) => (id) => {
            return state.desserts.find(dessert => dessert.id === id);
        }
    }
});

export default store;
