import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown.jsx';
import Avatar from './Avatar.jsx';

function Navbar() {
    const [user, setuser] = useState(false);
    return (
        <>
            <div className='flex items-center justify-around'>
                <div>
                    <h1 className='text-blue-700 text-2xl'>Job<span className='text-red-700'>Portal</span></h1>
                </div>
                <div className='flex gap-4 p-2'>
                    <ul className='flex gap-3 p-1'>
                        <li className='text-lg text-slate-600 font-semibold'> <Link to='/'>Home</Link></li>
                        <li className='text-lg text-slate-600 font-semibold'><Link to="/job">Jobs</Link></li>
                        <li className='text-lg text-slate-600 font-semibold'><Link to="/browse">Browse</Link></li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex gap-3 items-center'>
                                <Link to='/login'><button className='text-white bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded-md'>Login</button></Link>
                                <Link to='/register'><button className='text-white bg-red-500 hover:bg-red-700 px-2 py-1 rounded-md'>Register</button>
                                </Link>

                            </div>
                        ) : (
                            <div className='flex gap-2'>
                                <Dropdown />
                                <Avatar />
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Navbar