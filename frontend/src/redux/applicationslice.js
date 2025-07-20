import { createSlice } from "@reduxjs/toolkit";

const applicationSlice=createSlice({
    name:'application',
    initialState:{
        allapplications:[],
        allappliedjobs:[]
    },
    reducers:{
        setallapplications:(state,action)=>{
            state.allapplications=action.payload;
        },
        setallappliedjobs:(state,action)=>{
            state.allappliedjobs=action.payload;
        }
    }
})

export const {setallapplications,setallappliedjobs}=applicationSlice.actions;
export default applicationSlice.reducer