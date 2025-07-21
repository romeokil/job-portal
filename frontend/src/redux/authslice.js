import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState:{
        user:null
    },
    reducers: {
        setuser:(state,action)=>{
            state.user=action.payload;
        }

    },
});

export const { setuser } = authSlice.actions;
export default authSlice.reducer;
