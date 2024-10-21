import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            desserts: [
                { id: 1, url: "https://i.pinimg.com/enabled_lo/564x/52/9a/42/529a4269b6d92bbb9079401e4723b126.jpg" },
                { id: 2, url: "https://i.pinimg.com/enabled_lo/564x/0b/0c/40/0b0c40fed19c83094fe4017150e688d8.jpg" },
                { id: 3, url: "https://i.pinimg.com/736x/06/6a/08/066a0892ed220186e476e5728dc4f4eb.jpg" },
                { id: 4, url: "https://i.pinimg.com/enabled_lo/564x/9c/d3/2f/9cd32fff8641b8b3a683a610e446830f.jpg" },
                { id: 5, url: "https://i.pinimg.com/564x/ff/ea/c2/ffeac226b46a7456fecdfc3b2ebf1054.jpg" },
                { id: 6, url: "https://i.pinimg.com/enabled_lo/564x/2b/94/5e/2b945e89b8897ae031665d02377240f8.jpg" },
                { id: 7, url: "https://i.pinimg.com/736x/b6/49/a3/b649a3f2c6a46a04c5c3a6d5770dcc00.jpg" },
                { id: 8, url: "https://i.pinimg.com/enabled_lo/564x/7e/91/a3/7e91a34ec12ec02f92ef241a654b88f6.jpg" },
                { id: 9, url: "https://i.pinimg.com/enabled_lo/564x/01/fb/2f/01fb2f81d986b3844b899a6358e773a8.jpg" },
                { id: 10, url: "https://i.pinimg.com/enabled_lo/564x/ca/cb/63/cacb6368fceac6619dd053ac74d1047d.jpg" },
                { id: 11, url: "https://i.pinimg.com/enabled_lo/564x/de/42/f3/de42f3e06455076a4fb889d828c3f1d2.jpg" },
                { id: 12, url: "https://i.pinimg.com/736x/9d/05/59/9d05598ff4267b4c37a2a3319c53256e.jpg" },
                { id: 13, url: "https://i.pinimg.com/564x/1d/2c/a0/1d2ca05d1b7cf9e5bf17a250c1a1ae7a.jpg" },
                { id: 14, url: "https://i.pinimg.com/564x/b9/55/9d/b9559d5c22fbf2dc83afcf9bbab4991b.jpg" },
                { id: 15, url: "https://i.pinimg.com/736x/84/12/30/841230801096a859332fad2974832ba0.jpg" },
            ],
        };
    },
    getters: {
        getDesserts(state) {
            return state.desserts;
        },
        getDessertById: (state) => (id) => {
            return state.desserts.find(dessert => dessert.id === id);
        }
    }
});

export default store;
