import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"
export default function Jobcard() {
    const jobId='fasldjffasdfsadf';
    return (
        <div>
            <div className='w-full rounded-md border-2 border-slate-300 shadow-lg shadow-slate-500/50 p-2'>
                <div className='flex gap-2 justify-between'>
                    <div>2 days ago</div>
                    <div><FontAwesomeIcon icon={faBookmark} /></div>
                </div>
                <div className='flex gap-1'>
                    <div className='w-20 border border-slate-200'>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/047/656/219/small/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"></img>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <div className='text-md font-bold text-black'>Company Name</div>
                        <div className='text-sm font-semibold text-black'>India</div>
                    </div>
                </div>
                <h2 className='text-lg font-bold'>Title</h2>
                <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rem totam, atque reiciendis dolor sunt.</p>
                <div className='flex gap-3 mt-1 mb-1'>
                    <p className='text-sm font-medium text-black border border-slate-200'>12 positions</p>
                    <p className='text-sm font-medium text-red-600  border border-slate-200'>Part-time</p>
                    <p className='text-sm font-medium text-black border border-slate-200'>24 LPA</p>
                </div>
                <div className='flex gap-3'>
                    <button className='text-slate-950 p-'><Link to={`/description/${jobId}`}>Details</Link></button>
                    <button className='text-white bg-blue-500 p-2 rounded-md text-sm'>Save for later</button>
                </div>
            </div>
        </div>
    )
}
