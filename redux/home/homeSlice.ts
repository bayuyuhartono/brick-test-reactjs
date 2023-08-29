import { createSlice } from '@reduxjs/toolkit';
import { homeType } from '../../types/homeTypes';

const initialState: homeType = {
    HomeData: {
        category: 'repositories',
        searchtext: '',
   }
 };

const homeSlice = createSlice({
   name: 'home',
   initialState,
   reducers: {
        setCategory(state, action) {
         state.HomeData.category = action.payload;
        },
        setSearchText(state, action) {
         state.HomeData.searchtext = action.payload;
        },
        setClearSearch(state) {
         state.HomeData = initialState.HomeData;
        },
   },
});
export const { setCategory, setSearchText, setClearSearch } = homeSlice.actions;

const homeReducer = homeSlice.reducer;

export default homeReducer;
