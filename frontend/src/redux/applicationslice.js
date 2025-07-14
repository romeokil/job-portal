import { createSlice } from "@reduxjs/toolkit";

const applicationSlice=createSlice({
    name:'application',
    initialState:{
        allapplications:[]
    },
    reducers:{
        setallapplications:(state,action)=>{
            state.allapplications=action.payload;
        }
    }
})

export const {setallapplications}=applicationSlice.actions;
export default applicationSlice.reducer