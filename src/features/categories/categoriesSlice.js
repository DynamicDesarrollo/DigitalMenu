import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [
        { id: 1, name: 'Cortes de Cerdo' },
        { id: 2, name: 'Cortes de Res' },
        { id: 3, name: 'Hamburguesas' },
        { id: 4, name: 'Choriperro' },
        { id: 5, name: 'Picadas' },
        { id: 6, name: 'Tacos' },
        { id: 7, name: 'Menú Infantil' },
        { id: 8, name: 'Sodas Artesanales' },
        { id: 9, name: 'Sodas Saborizadas' },
        { id: 10, name: 'Limonadas' },
        { id: 11, name: 'Vinos' },
        { id: 12, name: 'Gaseosas' },
        { id: 13, name: 'Cervezas' },
    ],
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
});

export const selectCategories = (state) => state.categories.categories;
export default categoriesSlice.reducer;
