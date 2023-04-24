import { configureStore } from '@reduxjs/toolkit';

//reducers
import userSlice from './slices/userSlice';
import dictionarySlice from './slices/dictionarySlice';


const reduxStore = configureStore({
    reducer: {
        userSlice,
        dictionarySlice,
    }
})

export type RootState = ReturnType <typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;