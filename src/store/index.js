import { createStore } from 'vuex';

export default createStore({
    state: {
        system: {
            version: '0.1',
            baseCurrency: 'RUB',
            color1: {
                h: 210,
                s: 74,
                l: 53,
            },
            color2: {
                h: 210,
                s: 89,
                l: 18,
            },
            colorBg: {
                h: 0,
                s: 0,
                l: 88,
            },
            lastWallet: 'wallet1',
            lastCategory: 'category1',
        },
        wallets: [
            {
                id: 'wallet1',
                name: 'Cash',
                currency: 'RUB',
                icon: false,
                balance: 12345,
                order: 0,
                visibleOnIndex: true,
            },
        ],
        categories: {
            income: [
                {
                    id: 'category1',
                    name: 'Salary',
                    icon: false,
                    order: 0,
                    subCategories: [],
                },
            ],
            expence: [
                {
                    id: 'category2',
                    name: 'Food',
                    icon: false,
                    order: 0,
                    subCategories: [
                        {
                            id: 'category3',
                            name: 'Milk',
                            icon: false,
                            order: 0,
                        },
                        {
                            id: 'category4',
                            name: 'Fruit',
                            icon: false,
                            order: 1,
                        },
                    ],
                },
            ],
        },
        transactions: [
            {
                id: 'transaction1',
                date: '17.07.2023',
                wallet: 'wallet1',
                value: 1234,
                type: 'income',
                convertedTo: false,
                category: 'category1',
            },
        ]
    },
    mutations: {
        setColorHue(state, data) {
            state.system[data.colorName].h = data.newValue;
        },
        setColorSaturation(state, data) {
            state.system[data.colorName].s = data.newValue;
        },
        setColorLightness(state, data) {
            state.system[data.colorName].l = data.newValue;
        },
    },
    actions: {
        passColorHue({ commit }, data) {
            commit('setColorHue', data);
        },
        passColorSaturation({ commit }, data) {
            commit('setColorSaturation', data);
        },
        passColorLightness({ commit }, data) {
            commit('setColorLightness', data);
        },
    },
    getters: {

    },
    modules: {

    }
});
