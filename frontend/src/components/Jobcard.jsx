import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"
import { useSelector } from 'react-redux'
export default function Jobcard() {
    const isDark=useSelector((state)=>state.theme.isDark);
    const Jobs = useSelector((state) => state.job.allJobs);
    // console.log("allappliedjobs seciton", allappliedjobs);
    const selectedFilters = useSelector((state) => state.job.selectFilters);
    const [filterjob, setfilterjob] = useState(Jobs || []);
    useEffect(() => {
        const filterdata = Jobs.filter((job) => {

            const matchLocation =
                selectedFilters.Location.length === 0 || selectedFilters.Location.includes(job.location);

            const matchTitle =
                selectedFilters.Title.length === 0 || selectedFilters.Title.includes(job.title);

            const matchSalary =
                selectedFilters.Salary.length === 0 ||  selectedFilters.Salary.some((range) => {
                if (range === "0-5 LPA") return job.salary >= 0 && job.salary <= 5;
                if (range === "6-10 LPA") return job.salary >= 6 && job.salary <= 10;
                if (range === "10 or more LPA") return job.salary >= 10;
                return false;
            });

            return matchLocation && matchTitle && matchSalary;
        });
        console.log("filterdata", filterdata)
        setfilterjob(filterdata);
    }, [selectedFilters])

    // const jobId='fasldjffasdfsadf';
    const dayagoFunction = (mongoTime) => {
        // console.log("mongoTime argument->", mongoTime);
        const createdAt = new Date(mongoTime);
        // console.log("createAt", createdAt);
        const currentTime = new Date();
        // console.log("currentTime", currentTime);
        const timeDifference = currentTime - createdAt;
        // console.log("timeDifference", timeDifference);
        // console.log("timeDifference when divided", Math.floor(timeDifference / (1000 * 24 * 60 * 60)));
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }
    return (
        filterjob.length <= 0 ? (
            <>
                <span>Sorry No Jobs Available.</span>
            </>
        ) : (
            <>
                <div className='p-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-x-4 md:gap-y-4'>
                    {
                        filterjob.map((job) => {
                            return <div className='w-full rounded-md border-2 border-slate-300 shadow-lg shadow-slate-500/50 p-2'>
                                <div className='flex gap-2 justify-between'>
                                    <div className='text-red-500'>{dayagoFunction(job?.createdAt) === 0 ? "Today" : `${dayagoFunction(job?.createdAt)} days ago`}</div>
                                    <div className={`${isDark?'text-white':'text-black'}`}><FontAwesomeIcon icon={faBookmark} /></div>
                                </div>
                                <div className='flex gap-1'>
                                    <div className='w-20 border border-slate-200'>
                                        <img src={job?.company?.logo}></img>
                                    </div>
                                    <div className='flex gap-1 flex-col'>
                                        <div className={`${isDark?'text-white':'text-black'} text-md font-bold text-black`}>{job?.company?.name}</div>
                                        <div className={`${isDark?'text-white':'text-black'} text-sm font-semibold text-black`}>{job?.location}</div>
                                    </div>
                                </div>
                                <h2 className={`${isDark?'text-white':'text-black'} text-lg font-bold`}>{job?.title}</h2>
                                <p className={`text-sm text-slate-500`}>{job?.description}</p>
                                <div className='flex gap-3 mt-1 mb-1'>
                                    <p className={`text-sm font-medium ${isDark?'text-white':'text-black'}`}>{job?.position} positions</p>
                                    <p className={`text-sm font-medium text-violet-500`}>{job?.jobType}</p>
                                    <p className={`text-sm font-medium ${isDark?'text-white':'text-black'}`}>{job?.salary} LPA</p>
                                </div>
                                <div className='flex gap-3'>
                                    <button className={`${isDark?'text-white':'text-black'} p-1`}><Link to={`/description/${job?._id}`}>Details</Link></button>
                                    <button className='text-white bg-violet-500 p-2 rounded-md text-sm'>Save for later</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </>
        )

    )
}
