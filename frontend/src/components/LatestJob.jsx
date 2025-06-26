import React from 'react'
import { useSelector } from 'react-redux';

function LatestJob() {
  const Jobs=useSelector((state)=>state.job.allJobs);
  console.log("Latest job component ke ander->",Jobs)
  // let randomno=[1,2,3,4,5,6,7,8];
  return (
    <div className='w-4/5 mx-auto'>
        <h1 className='text-3xl font-semibold text-black mb-4'><span className='text-red-700'>Latest & Top </span>Job Openings</h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-x-4 md:gap-y-4'>
            {/* {job cards} */}

            {Jobs.length<=0?<span>No Jobs Available.</span>:Jobs.slice(0,6).map(job=><div className='w-full bg-blue-200 p-2 rounded-md '>
                <h1>{job.company.name}</h1>
                <h2>{job.location}</h2>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <div className='flex justify-between'>
                    <p>{job.position} Positions</p>
                    <p>{job.jobType}</p>
                    <p>{job.salary} LPA</p>
                </div>
                </div>)} 
        </div>
    </div>
  )
}

export default LatestJob