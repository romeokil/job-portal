import React,{useEffect,useState} from 'react'
import { setsingleJob } from '../redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function JobDescription() {
    const user=useSelector((state)=>state.auth.user);
    const solojob=useSelector((state)=>state.job.singleJob);
    solojob?.applications?.map((application)=>{
        console.log(application.applicant);
    })
    console.log("user->id",user?._id);
    const initiallyApplied=solojob?.applications?.some(application=>application.applicant==user?._id) || false;
    console.log("initiallyApplied->",initiallyApplied)
    const [isApplied,setisApplied]=useState(initiallyApplied);
    console.log("isApplied",isApplied);
    const dispatch=useDispatch();
    const param=useParams();
    const jobId=param.id;
    // ye hmlog backend se pata krege ki ye job me apply kiya hai ki ni.
    useEffect(()=>{
        const getsingleJob=async()=>{
            const response=await fetch(`http://localhost:8000/api/jobs/getjobbyid/${jobId}`,{
                method:'GET',
                credentials:'include'
            })
            if(response.ok){
                const data=await response.json();
                setisApplied(data.job.applications.some(application=>application.applicant==user?._id));
                console.log("singleJob hmlog get kr liye hai na",data)
                dispatch(setsingleJob(data.job));
            }
        }
        getsingleJob();
    },[jobId,user?._id])
    // ye wale function me aaram se tm apply kr dega current job ko.
    const updatejobHandler=async()=>{
        const response=await fetch(`http://localhost:8000/api/application/applyjob/${jobId}`,{
            method:'GET',
            credentials:"include"
        })
        if(response.ok){
            const data=await response.json();
            setisApplied(true);
            const updatedsingleJob={...solojob,applications:[...solojob.applications,{applicant:user?._id}]};
            dispatch(setsingleJob(updatedsingleJob));
            console.log(updatedsingleJob);
            alert(`${data.message}`);
        }
    }
    return (
        <div className='w-3/4 mx-auto mt-8'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-bold text-black text-xl'>{solojob?.title}</h1>
                    <div className='flex gap-3 my-2 items-center'>
                        <button className='border border-gray-300 rounded-md font-medium text-base text-blue-600'>{solojob?.position} Positions</button>
                        <button className='border border-gray-300 rounded-md font-medium text-base text-red-600'>{solojob?.jobType}</button>
                        <button className='border border-gray-300 rounded-md font-medium text-base text-red-950'>{solojob?.salary} LPA</button>
                    </div>
                </div>
                <div>
                <button
                onClick={isApplied ? null : updatejobHandler}
                    disabled={isApplied}
                    className={`rounded-lg p-2 ${isApplied ? 'bg-gray-600 cursor-not-allowed text-white' : 'bg-[#276fcc] hover:bg-[#5f32ad] text-black'}`}>
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </button>
                    
                </div>
            </div>

            <h2 className='font-bold text-2xl text-black mb-2'>Job Description</h2>
            <hr />
            <div className='mt-2'>
                <h2 className='font-bold text-base'>Role:<span className='pl-1 font-normal'>{solojob?.title}</span></h2>
                <h2 className='font-bold text-base'>Location:<span className='pl-1 font-normal'>{solojob.location}</span></h2>
                <h2 className='font-bold text-base'>Description:<span className='pl-1 font-normal'>{solojob?.description}</span></h2>
                <h2 className='font-bold text-base'>Experience:<span className='pl-1 font-normal'>{solojob?.experience} yrs</span></h2>
                <h2 className='font-bold text-base'>Salary:<span className='pl-1 font-normal'>{solojob?.salary} LPA</span></h2>
                <h2 className='font-bold text-base'>Total Applicant:<span className='pl-1 font-normal'>{solojob?.applications?.length}</span></h2>
                <h2 className='font-bold text-base'>Posted Date:<span className='pl-1 font-normal'>{solojob.createdAt.split('T')[0]}</span></h2>
            </div>
        </div>
    )
}

export default JobDescription