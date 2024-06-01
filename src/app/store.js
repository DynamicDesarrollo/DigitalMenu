import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categories/categoriesSlice';
import dishesReducer from '../features/dishes/dishesSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        dishes: dishesReducer,
    },
});
