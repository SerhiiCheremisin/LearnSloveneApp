import { configureStore } from '@reduxjs/toolkit';

//reducers
import userSlice from './slices/userSlice';


const reduxStore = configureStore({
    reducer: {
        userSlice
    }
})

export type RootState = ReturnType <typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

export default reduxStore;