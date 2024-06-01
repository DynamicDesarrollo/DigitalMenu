import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [
        { id: 1, name: 'Entrantes' },
        { id: 2, name: 'Platos Principales' },
        { id: 3, name: 'Postres' },
    ],
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
});

export const selectCategories = (state) => state.categories.categories;
export default categoriesSlice.reducer;
