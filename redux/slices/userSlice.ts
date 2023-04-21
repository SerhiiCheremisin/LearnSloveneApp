import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserLogged : false,
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers : {
        setUserLogged (state, action) {
            state.isUserLogged = action.payload;
        },
    }
})

export const { setUserLogged } = userSlice.actions;

export default userSlice.reducer;