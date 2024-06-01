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
        4: [
            {
                id: 1, name: 'Choriperro', description: 'chorizo de cerdo artesanal, pan de orégano, cebolla encurtida, queso costeño y salsa de la casa', price: '10.000'
            },
            {
                id: 2, name: 'Choriperro gourmet', description: 'chorizo de cerdo artesanal, pan de orégano, cebolla caramelizada en vino tinto, queso costeño, queso mozzarella, tocineta y salsa de la casa', price: '15.000'
            },
        ],
        5: [
            {
                id: 1, name: 'Picada para 4 personas', description: 'chorizo artesanal, butifarra artesanal, bondiola de cerdo, chicharrón, costilla de cerdo, bastones de yuca y papa francesa', price: '60.000'
            },
            {
                id: 2, name: 'Picada para 6 personas', description: 'chorizo artesanal, butifarra artesanal, bondiola de cerdo, chicharrón, costilla de cerdo, bastones de yuca y papa francesa', price: '80.000'
            },
            {
                id: 2, name: 'Picada para 8 personas', description: 'chorizo artesanal, butifarra artesanal, bondiola de cerdo, chicharrón, costilla de cerdo, bastones de yuca y papa francesa', price: '100.000'
            },
        ],
        6: [
            {
                id: 1, name: 'Tacos x 3', description: 'tortilla, chicharrón, bondiola, piña asada, cebolla caramelizada, cebolla encurtida, limón y salsas de la casa', price: '15.000'
            },
        ],
        7: [
            {
                id: 1, name: 'Mini Hamburguesa', description: 'carne artesanal, pan de orégano, tocineta, queso mozzarella, hit en cajita, papas francesa, salsa de la casa y sorpresa', price: '15.000'
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
