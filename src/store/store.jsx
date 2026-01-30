import {configureStore} from "@reduxjs/toolkit";
import tabReducer from "./slices/tabSlice";

export const store = configureStore({
    reducer:{
        tabState: tabReducer,
    },
})