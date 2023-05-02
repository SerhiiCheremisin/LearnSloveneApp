import { createSlice } from "@reduxjs/toolkit";
import { IGrammarInitial } from "../../services/types";

const initialGrammarState:IGrammarInitial = {
    activeGrammarBlock: ""
}

const grammarSlice = createSlice({
    name: "grammarSlice",
    initialState: initialGrammarState,
    reducers: {
       setActiveGrammarCategory (state, action) {
         state.activeGrammarBlock = action.payload
       }
    }
})

export const { setActiveGrammarCategory } = grammarSlice.actions;

export default grammarSlice.reducer;