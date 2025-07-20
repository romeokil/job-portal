import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        alladminJobs:[],
        singleJob: null,
        searchjobbytext:"",
        selectFilters:{
            Location:[],
            Industry:[],
            Salary:[]
        },
        searchJobs:[],
    },
    reducers: {
        setallJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setsingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setalladminJobs:(state,action)=>{
            state.alladminJobs=action.payload;
        },
        setsearchjobbytext:(state,action)=>{
            state.searchjobbytext=action.payload;  
        },
        setselectFilters:(state,action)=>{
            state.selectFilters=action.payload;
        },
        setsearchJobs:(state,action)=>{
            state.searchJobs=action.payload;
        }
    }
})
export const { setallJobs, setsingleJob, setalladminJobs,setsearchjobbytext,setselectFilters,setsearchJobs } = jobSlice.actions;
export default jobSlice.reducer;