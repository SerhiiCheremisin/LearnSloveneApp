import { createSlice } from "@reduxjs/toolkit";
import { IUserSliceInitial } from "../../services/types";

const initialState:IUserSliceInitial = {
    isUserLogged : false,
    userName: '',
    userDictionary: []
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers : {
        setUserLogged (state, action) {
            state.isUserLogged = action.payload;
        },
        setUserName (state, action) {
            state.userName = action.payload;
        },
        setUserDictionary (state, action) {
            state.userDictionary = action.payload;
        }
    }
})

export const { setUserLogged, setUserName, setUserDictionary } = userSlice.actions;

export default userSlice.reducer;