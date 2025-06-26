import { createSlice } from "@reduxjs/toolkit";

const jobSlice=createSlice({
    name:"job",
    initialState:{
        allJobs:[]
    },
    reducers:{
        setallJobs:(state,action)=>{
            state.allJobs=action.payload;
        }
    }
})
export const {setallJobs}=jobSlice.actions;
export default jobSlice.reducer;