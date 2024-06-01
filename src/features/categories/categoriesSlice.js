import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [
        { id: 1, name: 'Cortes de Cerdo' },
        { id: 2, name: 'Cortes de Res' },
        { id: 3, name: 'Hamburguesas' },
        { id: 4, name: 'Choriperro' },
        { id: 5, name: 'Picadas' },
        { id: 6, name: 'Tacos' },
        { id: 7, name: 'Hamburguesas' },
        { id: 8, name: 'Menú Infantil' },
        { id: 9, name: 'Sodas Artesanales' },
        { id: 10, name: 'Sodas Saborizadas' },
        { id: 11, name: 'Limonadas' },
        { id: 12, name: 'Vinos' },
        { id: 13, name: 'Gaseosas' },
        { id: 14, name: 'Cervezas' },
    ],
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
});

export const selectCategories = (state) => state.categories.categories;
export default categoriesSlice.reducer;
