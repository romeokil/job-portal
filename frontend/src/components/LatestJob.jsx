import React from 'react'
import { useSelector } from 'react-redux';
import Jobcard from './Jobcard';

function LatestJob() {
  const isDark=useSelector(state=>state.theme.isDark);
  const Jobs = useSelector((state) => state.job.allJobs);
  console.log("Latest job component ke ander->", Jobs)
  // let randomno=[1,2,3,4,5,6,7,8];
  return (
    <div className={`${isDark?'bg-slate-900':'bg-white'} w-full h-screen p-5 mx-auto`}>
      <h1 className={`text-3xl font-semibold ${isDark?'text-white':'text-black'} mb-4`}><span className='text-violet-500'>Latest & Top </span>Job Openings</h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-x-4 md:gap-y-4'>
        {/* {job cards} */}
        {
          Jobs.length <= 0 ? <span>No Latest Job available.
          </span> : <>
            {
              Jobs.slice(0,6).map(job => {
                return <div>
                  <div className={`w-full rounded-md border-2 border-slate-300 shadow-lg ${isDark?'shadow-blue-700/50':'shadow-slate-500/50'} p-2`}>
                    <div className='flex gap-1'>
                      <div className='w-20 border border-slate-200'>
                        <img src={job?.company?.logo}></img>
                      </div>
                      <div className='flex gap-1 flex-col'>
                        <div className={`text-md font-bold ${isDark?'text-white':'text-black'} `}>{job.company.name}</div>
                        <div className={`text-sm font-semibold ${isDark?'text-white':'text-black'}`}>{job.location}</div>
                      </div>
                    </div>
                    <h2 className={`text-lg font-bold ${isDark?'text-white':'text-black'}`}>{job.title}</h2>
                    <p className='text-sm text-slate-500'>{job.description}</p>
                    <div className='flex gap-3 mt-1 mb-1'>
                      <p className={`text-sm font-medium ${isDark?'text-white':'text-black'}`}>{job.position} positions</p>
                      <p className={`text-sm font-medium text-red-600 `}>{job.jobType}</p>
                      <p className={`text-sm font-medium ${isDark?'text-white':'text-black'}`}>{job.salary} LPA</p>
                    </div>
                  </div>
                </div>
              })
            }
          </>
        }

      </div>
    </div>
  )
}

export default LatestJob