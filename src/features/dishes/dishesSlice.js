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
        8: [
            {
                id: 1, name: 'Lyche', description: 'Bebida Refrescante', price: '12.000'
            },
            {
                id: 2, name: 'Frutos amarillos', description: 'Bebida Refrescante', price: '12.000'
            },
            {
                id: 3, name: 'Frutos rojos', description: 'Bebida Refrescante', price: '12.000'
            },
            {
                id: 4, name: 'Kiwi', description: 'Bebida Refrescante', price: '7.000'
            },
            {
                id: 5, name: 'Fresa', description: 'Bebida Refrescante', price: '7.000'
            },
            {
                id: 6, name: 'Mandarina', description: 'Bebida Refrescante', price: '7.000'
            },
            {
                id: 7, name: 'Cereza', description: 'Bebida Refrescante', price: '7.000'
            },
            {
                id: 8, name: 'La pitufo', description: 'Bebida Refrescante', price: '6.000'
            },
            {
                id: 9, name: 'Natural', description: 'Bebida Refrescante', price: '8.000'
            },
            {
                id: 10, name: 'Cereceda', description: 'Bebida Refrescante', price: '9.000'
            },
            {
                id: 11, name: 'De coco', description: 'Bebida Refrescante', price: '10.000'
            },
            {
                id: 12, name: 'Copa De Vino', description: 'Bebida Refrescante', price: '10.000'
            },
            {
                id: 13, name: 'Tinto de verano', description: 'Bebida Refrescante', price: '12.000'
            },
            {
                id: 14, name: 'Sangria', description: 'Bebida Refrescante', price: '15.000'
            },
            {
                id: 15, name: 'Coca-cola lata', description: 'Bebida Refrescante', price: '3.000'
            },
            {
                id: 16, name: 'Manzana', description: 'Bebida Refrescante', price: '3.000'
            },
            {
                id: 17, name: 'Colombiana', description: 'Bebida Refrescante', price: '3.000'
            },
            {
                id: 18, name: 'Agua', description: 'Bebida Refrescante', price: '1.000'
            },

            {
                id: 19, name: 'Agua con gas', description: 'Bebida Refrescante', price: '1.000'
            },

            {
                id: 20, name: 'Hatsu', description: 'Bebida Refrescante', price: '4.000'
            },

            {
                id: 21, name: 'Bretaña', description: 'Bebida Refrescante', price: '4.000'
            },
            {
                id: 22, name: 'Ginger', description: 'Bebida Refrescante', price: '4.000'
            },
            {
                id: 23, name: 'Coca-cola ¼', description: 'Bebida Refrescante', price: '8.000'
            },
            {
                id: 24, name: 'Corona', description: 'Bebida Refrescante', price: '5.000'
            },
            {
                id: 25, name: 'Budweiser', description: 'Bebida Refrescante', price: '4.000'
            },
            {
                id: 26, name: 'Club Colombia', description: 'Bebida Refrescante', price: '5.000'
            },
        ],
    },
    selectedDishes: [],
    totalAmount: 0
};

const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        addDishToOrder(state, action) {
            const existingDish = state.selectedDishes.find(dish => dish.id === action.payload.id);
            if (existingDish) {
                existingDish.quantity += 1;
            } else {
                state.selectedDishes.push({ ...action.payload, quantity: 1 });
            }
            state.totalAmount += Number(action.payload.price.replace('.', ''));
        },
        removeDishFromOrder(state, action) {
            const existingDish = state.selectedDishes.find(dish => dish.id === action.payload.id);
            if (existingDish) {
                if (existingDish.quantity === 1) {
                    state.selectedDishes = state.selectedDishes.filter(dish => dish.id !== action.payload.id);
                } else {
                    existingDish.quantity -= 1;
                }
                state.totalAmount -= Number(action.payload.price.replace('.', ''));
            }
        }
    }
});

export const { addDishToOrder, removeDishFromOrder } = dishesSlice.actions;

export const selectDishesByCategory = (state, categoryId) => state.dishes.dishes[categoryId];
export const selectSelectedDishes = state => state.dishes.selectedDishes;
export const selectTotalAmount = state => state.dishes.totalAmount;

export default dishesSlice.reducer;
