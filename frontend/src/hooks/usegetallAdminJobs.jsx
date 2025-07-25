import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { setalladminJobs} from '../redux/jobSlice.js';

const usegetallAdminJobs= () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchallAdminJobs= async ()=>{
        try{
            const response=await fetch(`https://job-portal-6x2z.onrender.com/api/jobs/getadminjob`,{
            method:'GET',
            credentials:'include'
            })

            if(response.ok){
            let newresponse=await response.json();
            console.log("All Admin jobs retrieved!!");
            console.log(newresponse);
            dispatch(setalladminJobs(newresponse.jobs));
            }
        }
        catch(error){
            console.log("Error while fetching all Admin jobs!!1")
        }
        }
        fetchallAdminJobs();
    },[])
}

export default usegetallAdminJobs