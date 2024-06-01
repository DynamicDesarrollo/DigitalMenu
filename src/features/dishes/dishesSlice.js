import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dishes: {
        1: [
            { id: 1, name: 'Bruschetta', description: 'Tostada con tomate y albahaca', price: 5 },
            { id: 2, name: 'Patatas Bravas', description: 'Patatas fritas con salsa picante', price: 4 },
        ],
        2: [
            { id: 3, name: 'Paella', description: 'Arroz con mariscos', price: 12 },
            { id: 4, name: 'Lasaña', description: 'Pasta con carne y queso', price: 10 },
        ],
        3: [
            { id: 5, name: 'Tiramisú', description: 'Postre italiano con café y mascarpone', price: 6 },
            { id: 6, name: 'Helado', description: 'Helado artesanal de varios sabores', price: 4 },
        ],
    },
};

const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {},
});

export const selectDishesByCategory = (state, categoryId) => state.dishes.dishes[categoryId];
export default dishesSlice.reducer;
