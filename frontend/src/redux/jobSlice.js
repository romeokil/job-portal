import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        singleJob: null,
    },
    reducers: {
        setallJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setsingleJob: (state, action) => {
            state.singleJob = action.payload;
        }
    }
})
export const { setallJobs, setsingleJob } = jobSlice.actions;
export default jobSlice.reducer;