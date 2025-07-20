import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"
import Navbar from '../components/Navbar.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Browse() {
  // const Jobs = useSelector((state) => state.job.allJobs);
  const isDark=useSelector((state)=>state.theme.isDark);
  const searchJobs = useSelector((state) => state.job.searchJobs);
  console.log(searchJobs);
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
  // let randomjob=[1,2,3,4,5,6,7];
  return (
    <div>
      <Navbar />
      <div className={`${isDark?'bg-slate-900':'bg-white'} w-full h-screen p-4 mx-auto`}>
        {/* yha pr jitna bhi no of jobs rhega. */}
        <h1 className={`${isDark?'text-white':'text-black'}`}>Search Result ({searchJobs.length})</h1>
        {searchJobs.length<=0?(
        <>
          <span>Sorry Searched Job is not Present</span>
        </>

      ):(
        <>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-x-4 md:gap-y-4'>
          {
            searchJobs.map((job) => {
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
                    <div className={`text-md font-bold ${isDark?'text-white':'text-black'}`}>{job?.company?.name}</div>
                    <div className={`text-sm font-semibold ${isDark?'text-white':'text-black'}`}>{job?.location}</div>
                  </div>
                </div>
                <h2 className={`text-lg font-bold ${isDark?'text-white':'text-black'}`}>{job?.title}</h2>
                <p className='text-sm text-slate-500'>{job?.description}</p>
                <div className='flex gap-3 mt-1 mb-1'>
                  <p className={`text-sm font-medium ${isDark?'text-white':'text-black'}`}>{job?.position} positions</p>
                  <p className='text-sm font-medium text-violet-500 '>{job?.jobType}</p>
                  <p className={`text-sm font-medium ${isDark?'text-white':'text-black'}`}>{job?.salary} LPA</p>
                </div>
                <div className='flex gap-3'>
                  <button className={`${isDark?'text-white':'text-black'} p-2`}><Link to={`/description/${job?._id}`}>Details</Link></button>
                  <button className='text-white bg-violet-500 p-2 rounded-md text-sm'>Save for later</button>
                </div>
              </div>
            })
          }
        </div>
        </>
      )}
        
      </div>
    </div>
  )
}

export default Browse