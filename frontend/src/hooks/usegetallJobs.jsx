import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { setallJobs } from '../redux/jobSlice.js';

const usegetallJobs= () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchallJobs= async ()=>{
        try{
            const response=await fetch(`https://job-portal-6x2z.onrender.com/api/jobs/getalljobs`,{
            method:'GET',
            credentials:'include'
            })

            if(response.ok){
            let newresponse=await response.json();
            console.log("All jobs retrieved!!");
            console.log(newresponse);
            dispatch(setallJobs(newresponse.job));
            }
        }
        catch(error){
            console.log("Error while fetching all jobs!!1")
        }
        }
        fetchallJobs();
    },[])
}

export default usegetallJobs