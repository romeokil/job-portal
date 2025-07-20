import { createSlice } from "@reduxjs/toolkit";

const themeSlice=createSlice({
    name:'theme',
    initialState:{
        isDark:"false",
    },
    reducers:{
        setisDark:(state,action)=>{
            state.isDark=action.payload;
        }
    }
})

export const {setisDark}=themeSlice.actions;
export default themeSlice.reducer;