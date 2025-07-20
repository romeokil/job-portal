import { createSlice } from "@reduxjs/toolkit";

const companySlice=createSlice({
    name:"company",
    initialState:{
        allcompany:[],
        singlecompany:null,
        loading:true,
        searchcompanybytext:""
    },
    reducers:{
        setallcompany:(state,action)=>{
            state.allcompany=action.payload;
            state.loading=false;
        },
        setsinglecompany:(state,action)=>{
            state.singlecompany=action.payload;
        },
        setloading:(state,action)=>{
            state.loading=action.payload;
        },
        setsearchcompanybytext:(state,action)=>{
            state.searchcompanybytext=action.payload;
        }
    }
})
export const {setallcompany,setsinglecompany,setloading,setsearchcompanybytext}=companySlice.actions;
export default companySlice.reducer;