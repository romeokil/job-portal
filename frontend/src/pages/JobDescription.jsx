import React from 'react'

function JobDescription() {
    // ye hmlog backend se pata krege ki ye job me apply kiya hai ki ni.
    const isApplied=false;
    return (
        <div className='w-3/4 mx-auto mt-8'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-bold text-black text-xl'>Title</h1>
                    <div className='flex gap-3 my-2 items-center'>
                        <button className='border border-gray-300 rounded-md font-medium text-base text-blue-600'>12 Positions</button>
                        <button className='border border-gray-300 rounded-md font-medium text-base text-red-600'>Part-Time</button>
                        <button className='border border-gray-300 rounded-md font-medium text-base text-red-950'>24LPA</button>
                    </div>
                </div>
                <div>
                    {!isApplied?(
                        <button className='bg-blue-500 font-semibold text-lg text-white p-2 rounded-md'>Apply</button>
                    ):(
                        <button className='bg-slate-500 font-semibold text-lg text-white p-2 rounded-md'>Already Applied</button>
                    )}
                    
                </div>
            </div>

            <h2 className='font-bold text-2xl text-black mb-2'>Job Description</h2>
            <hr />
            <div className='mt-2'>
                <h2 className='font-bold text-base'>Role:<span className='pl-1 font-normal'>Frontend Developer</span></h2>
                <h2 className='font-bold text-base'>Location:<span className='pl-1 font-normal'>Bengaluru</span></h2>
                <h2 className='font-bold text-base'>Description:<span className='pl-1 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, laboriosam!</span></h2>
                <h2 className='font-bold text-base'>Experience:<span className='pl-1 font-normal'>2 yrs</span></h2>
                <h2 className='font-bold text-base'>Salary:<span className='pl-1 font-normal'>12LPA</span></h2>
                <h2 className='font-bold text-base'>Total Applicant:<span className='pl-1 font-normal'>4</span></h2>
                <h2 className='font-bold text-base'>Posted Date:<span className='pl-1 font-normal'>17/01/2002</span></h2>
            </div>
        </div>
    )
}

export default JobDescription