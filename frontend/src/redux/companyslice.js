import { createSlice } from "@reduxjs/toolkit";

const companySlice=createSlice({
    name:"company",
    initialState:{
        allcompany:[],
        singlecompany:null
    },
    reducers:{
        setallcompany:(state,action)=>{
            state.allcompany=action.payload;
        },
        setsinglecompany:(state,action)=>{
            state.singlecompany=action.payload;
        }
    }
})
export const {setallcompany,setsinglecompany}=companySlice.actions;
export default companySlice.reducer;