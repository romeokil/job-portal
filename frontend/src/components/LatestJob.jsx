import React from 'react'

function LatestJob() {
    let randomno=[1,2,3,4,5,6,7,8];
  return (
    <div className='w-4/5 mx-auto'>
        <h1 className='text-3xl font-semibold text-black mb-4'><span className='text-red-700'>Latest & Top </span>Job Openings</h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-x-4 md:gap-y-4'>
            {/* {job cards} */}
            {randomno.slice(0,6).map(item=><div className='w-full bg-blue-300 p-2 rounded-md '>
                <h1>Company Name</h1>
                <h2>India</h2>
                <h3>Job Title</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, blanditiis?</p>
                <div className='flex justify-between'>
                    <p>12 positions</p>
                    <p>Part time</p>
                    <p>24 LPA</p>
                </div>
                </div>)} 
        </div>
    </div>
  )
}

export default LatestJob