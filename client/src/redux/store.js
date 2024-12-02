import { configureStore } from "@reduxjs/toolkit";
import forgetModalSlice from "./slices/forgetModalSlice";

const store = configureStore({
    reducer : {
        forgetModal : forgetModalSlice
    }
})

export default store;