import { createSlice } from "@reduxjs/toolkit";
import { IDictionaryInitial } from "../../services/types";


const initialState:IDictionaryInitial = {
    activeCategory: ''
}

const dictionarySlice = createSlice({
    name: 'dictionarySlice',
    initialState: initialState,
    reducers: {
       setActiveCategory (state, action) {
           state.activeCategory = action.payload;
       }
    }
})

export const { setActiveCategory } = dictionarySlice.actions;

export default dictionarySlice.reducer;