import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dishes: {
        1: [
            { id: 1, name: 'Costilla al barril', description: 'papa vapor, papa criolla, yuca frita o papa francesa, ensalada y salsas de la cada', price: '20.000' },
            { id: 2, name: 'Chicharrón al barril', description: 'papa vapor, papa criolla, yuca frita o papa francesa, ensalada y salsas de la cada', price: '20.000' },
            { id: 3, name: 'Solomito', description: 'papa vapor, papa criolla, yuca frita o papa francesa, ensalada y salsas de la cada', price: '22.000' },
            { id: 4, name: 'Bondiola', description: 'papa vapor, papa criolla, yuca frita o papa francesa, ensalada y salsas de la cada', price: '22.000' },
            { id: 5, name: 'Costilla Bbq', description: 'papa vapor, papa criolla, yuca frita o papa francesa, ensalada y salsas de la cada', price: '20.000' },
            { id: 6, name: 'Lomo', description: 'papa vapor, papa criolla, yuca frita o papa francesa, ensalada y salsas de la cada', price: '20.000' },
            { id: 7, name: 'Chuleta', description: 'papa vapor, papa criolla, yuca frita o papa francesa, ensalada y salsas de la cada', price: '18.000' },
        ],
        2: [
            { id: 1, name: 'Churrasco', description: 'papa vapor, papa criolla, yuca frita o papa francesa, ensalada y salsas de la cada', price: '22.000' },
            { id: 2, name: 'Solomito', description: 'papa vapor, papa criolla, yuca frita o papa francesa, ensalada y salsas de la cada', price: '22.000' },
            { id: 3, name: 'Res a la plancha', description: 'papa vapor, papa criolla, yuca frita o papa francesa, ensalada y salsas de la cada', price: '18.000' },
        ],
        3: [
            {
                id: 1, name: 'Hamburguesa Barril', description: 'carne artesanal, pan de orégano, queso mozzarella, queso costeño, lechuga crespa,cebolla caramelizada en vino tinto, tomate, tocineta, papa a la francesa y salsa de la casa', price: '20.000'
            },
            {
                id: 2, name: 'Hamburguesa sencilla', description: 'carne artesanal, pan de orégano, queso mozzarella, lechuga crespa, cebollaencurtida, tomate, papa a la francesa y salsa de la casa', price: '15.000'
            },
            {
                id: 3, name: 'Hamburguesa de chicharrón', description: 'chicharrón, pan de orégano, queso mozzarella, lechuga crespa, cebolla caramelizada en vino tinto, tomate, papa a la francesa y salsa de la casa', price: '20.000'
            },
            {
                id: 4, name: 'Hamburguesa de bondiola de cerdo', description: 'bondiola de cerdo, pan de orégano, queso mozzarella, queso costeño, lechuga crespa, cebolla caramelizada en vino tinto, tomate, papa a la francesa y salsa de la casa', price: '20.000'
            },
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
