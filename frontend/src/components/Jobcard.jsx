import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"
export default function Jobcard({ job }) {
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
        <div>
            <div className='w-full rounded-md border-2 border-slate-300 shadow-lg shadow-slate-500/50 p-2'>
                <div className='flex gap-2 justify-between'>
                    <div>{dayagoFunction(job?.createdAt) === 0 ? "Today" : `${dayagoFunction(job?.createdAt)} days ago`}</div>
                    <div><FontAwesomeIcon icon={faBookmark} /></div>
                </div>
                <div className='flex gap-1'>
                    <div className='w-20 border border-slate-200'>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/047/656/219/small/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"></img>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <div className='text-md font-bold text-black'>{job.company.name}</div>
                        <div className='text-sm font-semibold text-black'>{job.location}</div>
                    </div>
                </div>
                <h2 className='text-lg font-bold'>{job.title}</h2>
                <p className='text-sm text-slate-500'>{job.description}</p>
                <div className='flex gap-3 mt-1 mb-1'>
                    <p className='text-sm font-medium text-black border border-slate-200'>{job.position} positions</p>
                    <p className='text-sm font-medium text-red-600  border border-slate-200'>{job.jobType}</p>
                    <p className='text-sm font-medium text-black border border-slate-200'>{job.salary} LPA</p>
                </div>
                <div className='flex gap-3'>
                    <button className='text-slate-950 p-'><Link to={`/description/${job._id}`}>Details</Link></button>
                    <button className='text-white bg-blue-500 p-2 rounded-md text-sm'>Save for later</button>
                </div>
            </div>
        </div>
    )
}
