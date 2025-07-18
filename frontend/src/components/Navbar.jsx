import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown.jsx';
import Avatar from './Avatar.jsx';
import { useSelector,useDispatch } from 'react-redux';
import Logo from './Logo.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { setisDark } from '../redux/theme.js';

function Navbar() {
    const user = useSelector((state) => state.auth.user);
    const isDark=useSelector((state)=>state.theme.isDark);
    const dispatch=useDispatch();
    const isToggle=()=>{
        dispatch(setisDark(!isDark));
        console.log("isToggled function called",isDark);
    }
    return (
        <>
            <div className={`${isDark?'bg-slate-900':'bg-white'} w-full p-3`}>
                <div className='flex items-center justify-between'>
                    <div className={`flex flex-wrap sm:flex-row gap-1 text-violet-500`}>
                        <Logo user={user}/>
                    </div>
                    <div className='flex font-medium text-slate-500 text-lg sm:text-xl gap-4 items-center'>
                        <ul className='flex gap-1 sm:gap-2 p-2'>
                            {user && user.role === "Recruiter" ?
                                (
                                    <>
                                        <li><Link to='/admin/jobs'>Jobs</Link></li>
                                        <li className='px-2'><Link to='/admin/companies'>Companies</Link></li>
                                    </>
                                ) :
                                user && user.role==='Applicant' ?
                                (
                                    <>
                                        <li className='hover:text-violet-500'><Link to='/'>Home</Link></li>
                                        <li className='px-2 hover:text-violet-500'><Link to='/job'>Jobs</Link></li>
                                        {/* <li className='hover:text-violet-500'><Link to='/browse'>Browse</Link></li> */}
                                    </>
                                ):
                                (
                                    <>

                                    </>
                                )

                            }
                        </ul>
                        <div>
                            {!user ? (
                                <div className='flex flex-col sm:flex-row gap-1'>
                                    <Link to='/login' className='bg-violet-500 text-white p-2 rounded-md'>Login</Link>
                                    <Link to='/register' className={`${isDark?'text-white hover:bg-violet-500':'hover:bg-slate-200 text-black'} p-2 rounded-md`}>Register</Link>
                                </div>
                            ) : (
                                <div className='flex gap-1 sm:gap-2'>
                                    <Dropdown />
                                    <Avatar />
                                </div>
                            )}
                        </div>
                        <div>
                            <div>
                                <button onClick={isToggle}>
                                    <FontAwesomeIcon className={`${isDark===true ? 'text-white':'text-black'}
                                    ${isDark===true ?'hidden':'block'} p-3 rounded-lg box-shadow shadow-md`} icon={faSun}></FontAwesomeIcon>
                                </button>
                                <button onClick={isToggle}>
                                    <FontAwesomeIcon className={`${isDark===true ? 'text-white':'text-black'}
                                    ${isDark===true ?'block':'hidden'} p-3 rounded-lg box-shadow shadow-md`} icon={faMoon}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar