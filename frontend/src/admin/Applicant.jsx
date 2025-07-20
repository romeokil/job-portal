import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import ApplicantsTable from './ApplicantsTable'
import { useParams } from 'react-router-dom'
import { setallapplications } from '../redux/applicationslice'
import { useDispatch, useSelector } from 'react-redux'
export default function Applicant() {
    const isDark=useSelector((state)=>state.theme.isDark);
    const [applicationlength,setapplicationlength]=useState(0);
    const params=useParams();
    const jobId=params.id;
    console.log(params.id);
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchallApplicant=async()=>{
            console.log("andr useeffect ke fetchallapplicant call ho gy")
            try{
                let response =await fetch(`http://localhost:8000/api/application/getapplicant/${jobId}`,{
                method:'GET',
                credentials:'include'
            })
            if(response.ok){
                let data=await response.json();
                console.log("kon kon log ye job ke liye apply kiye hai.",data.job);
                dispatch(setallapplications(data.job.applications));
                setapplicationlength(data.job.applications.length)
            }
            }
            catch(error){
                console.log("Error while fetching all applicants for the particular job");
            }
        }
        fetchallApplicant();
    },[jobId])
    return (
        <>
            <Navbar />
            <div className={`${isDark?'bg-slate-900':'bg-white'} w-full mx-auto p-5`}>
                <h1 className={`m-4 font-semibold ${isDark?'text-white':'text-black'} text-xl `}>Applicants ({applicationlength})</h1>
                <ApplicantsTable />
            </div>
        </>
    )
}
