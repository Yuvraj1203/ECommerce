const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isOpen : false,
}

const forgetModalSlice = createSlice({
    name : "forgetModal",
    initialState,
    reducers : {
        openForgetModal : (state) => {state.isOpen = true},
        
        closeForgetModal : (state) => {state.isOpen = false},
    }
})

export const {openForgetModal,closeForgetModal} = forgetModalSlice.actions
export default forgetModalSlice.reducer;