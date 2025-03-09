import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown.jsx';
import Avatar from './Avatar.jsx';

function Navbar() {
    const [user, setuser] = useState(false);
    return (
        <>
            <div className='w-4/5 mx-auto mt-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col sm:flex-row gap-1'>
                        <h1 className='font-semibold text-xl sm:text-3xl text-red-500'>Job</h1>
                        <h2 className='font-semibold text-xl sm:text-3xl text-blue-500' >Portal</h2>
                    </div>
                    <div className='flex font-medium text-slate-500 text-lg sm:text-xl gap-4'>
                        <ul className='flex gap-1 sm:gap-2 p-2'>
                            <li><Link to='/'>Home</Link></li>
                            <li className='px-2'><Link to='/job'>Jobs</Link></li>
                            <li><Link to='/browse'>Browse</Link></li>
                        </ul>
                        <div>
                            {!user ?(
                                <div className='flex flex-col sm:flex-row gap-1'>
                                    <button className='bg-blue-400 text-white p-2 rounded-md'>Login</button>
                                    <button className='bg-red-400 text-white p-2 rounded-md'>Register</button>
                                </div>
                            ):(
                                <div className='flex gap-1 sm:gap-2'>
                                    <Dropdown/>
                                    <Avatar/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar