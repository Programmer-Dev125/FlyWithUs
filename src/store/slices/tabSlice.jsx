import {createSlice} from "@reduxjs/toolkit";

const tabSlice = createSlice({
    name: "tabSlice",
    initialState: "flight",
    reducers: {
        onTab: (state, action) => action.payload 
    }
})

export const {onTab} = tabSlice.actions;
export default tabSlice.reducer;