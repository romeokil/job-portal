import React from 'react'
import Jobcard from '../components/Jobcard.jsx';
import Navbar from '../components/Navbar.jsx';

function Browse() {
    let randomjob=[1,2,3,4,5,6,7];
  return (
    <div>
        <Navbar/>
        <div className='w-4/5 mx-auto'>
        {/* yha pr jitna bhi no of jobs rhega. */}
        <h1>Search Result ({randomjob.length})</h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-x-4 md:gap-y-4'>
            {randomjob.map((item)=>{
                return <Jobcard/>
            })}
        </div>
        </div>
    </div>
  )
}

export default Browse