import React, { useEffect, useState } from 'react'
import { setsingleJob } from '../redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Bounce, ToastContainer, toast } from 'react-toastify';


function JobDescription() {
    const isDark=useSelector((state)=>state.theme.isDark);
    const user = useSelector((state) => state.auth.user);
    const solojob = useSelector((state) => state.job.singleJob);
    solojob?.applications?.map((application) => {
        console.log(application.applicant);
    })
    console.log("user->id", user?._id);
    const initiallyApplied = solojob?.applications?.some(application => application.applicant == user?._id) || false;
    console.log("initiallyApplied->", initiallyApplied)
    const [isApplied, setisApplied] = useState(initiallyApplied);
    console.log("isApplied", isApplied);
    const dispatch = useDispatch();
    const param = useParams();
    const jobId = param.id;
    // ye hmlog backend se pata krege ki ye job me apply kiya hai ki ni.
    useEffect(() => {
        const getsingleJob = async () => {
            const response = await fetch(`http://localhost:8000/api/jobs/getjobbyid/${jobId}`, {
                method: 'GET',
                credentials: 'include'
            })
            if (response.ok) {
                const data = await response.json();
                setisApplied(data.job.applications.some(application => application.applicant == user?._id));
                console.log("singleJob hmlog get kr liye hai na", data)
                dispatch(setsingleJob(data.job));
            }
        }
        getsingleJob();
    }, [jobId, user?._id])
    // ye wale function me aaram se tm apply kr dega current job ko.
    const updatejobHandler = async () => {
        try{
            const response = await fetch(`http://localhost:8000/api/application/applyjob/${jobId}`, {
            method: 'GET',
            credentials: "include"
        })
        const data = await response.json();
        if (response.ok) {
            setisApplied(true);
            const updatedsingleJob = { ...solojob, applications: [...solojob.applications, { applicant: user?._id }] };
            dispatch(setsingleJob(updatedsingleJob));
            console.log(updatedsingleJob);
            toast.success(`🦄 ${data.message}`, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: `${isDark?'dark':'light'}`,
                      transition: Bounce,
                    });
        }
        else{
            toast.warn(`🦄 ${response.message}` , {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: `${isDark?'dark':'light'}`,
                      transition: Bounce,
                    })
        }
        }
        catch(error){
            toast.error('🦄 Error while registering the user', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: `${isDark?'dark':'light'}`,
                    transition: Bounce,
                  })
            console.log("Error while applying to Job!!");
        }
        
    }
    return (
        <div>
            <Navbar />
            <div className={`${isDark?'bg-slate-900':'bg-white'} w-full h-screen mx-auto p-8`}>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className={`${isDark?'text-white':'text-black'} font-bold text-xl`}>{solojob?.title}</h1>
                        <div className='flex gap-3 my-2 items-center'>
                            <button className={`rounded-md font-medium text-base ${isDark?'text-white':'text-black'}`}>{solojob?.position} Positions</button>
                            <button className='rounded-md font-medium text-base text-violet-500'>{solojob?.jobType}</button>
                            <button className={`rounded-md font-medium text-base ${isDark?'text-white':'text-black'}`}>{solojob?.salary} LPA</button>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={isApplied ? null : updatejobHandler}
                            disabled={isApplied}
                            className={`rounded-lg p-2 ${isApplied ? 'bg-gray-600 cursor-not-allowed text-' : 'bg-violet-500 hover:bg-violet-600'} text-white`}>
                            {isApplied ? 'Already Applied' : 'Apply Now'}
                        </button>

                    </div>
                </div>

                <h2 className={`font-bold text-2xl ${isDark?'text-white':'text-black'} mb-2`}>Job Description</h2>
                <hr />
                <div className='mt-2'>
                    <h2 className={`font-bold text-base ${isDark?'text-white':'text-black'}`}>Role:<span className='pl-1 font-normal'>{solojob?.title}</span></h2>
                    <h2 className={`font-bold text-base ${isDark?'text-white':'text-black'}`}>Location:<span className='pl-1 font-normal'>{solojob.location}</span></h2>
                    <h2 className={`font-bold text-base ${isDark?'text-white':'text-black'}`}>Description:<span className='pl-1 font-normal'>{solojob?.description}</span></h2>
                    <h2 className={`font-bold text-base ${isDark?'text-white':'text-black'}`}>Experience:<span className='pl-1 font-normal'>{solojob?.experience} yrs</span></h2>
                    <h2 className={`font-bold text-base ${isDark?'text-white':'text-black'}`}>Salary:<span className='pl-1 font-normal'>{solojob?.salary} LPA</span></h2>
                    <h2 className={`font-bold text-base ${isDark?'text-white':'text-black'}`}>Total Applicant:<span className='pl-1 font-normal'>{solojob?.applications?.length}</span></h2>
                    <h2 className={`font-bold text-base ${isDark?'text-white':'text-black'}`}>Posted Date:<span className='pl-1 font-normal'>{solojob.createdAt.split('T')[0]}</span></h2>
                </div>
            </div>
        </div>

    )
}

export default JobDescription