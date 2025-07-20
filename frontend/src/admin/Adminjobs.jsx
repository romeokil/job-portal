import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { setsearchjobbytext } from '../redux/jobSlice.js'
import usegetallAdminJobs from '../hooks/usegetallAdminJobs.jsx'
import AdminTable from './AdminjobsTable.jsx'

function Adminjobs() {
    usegetallAdminJobs();
    const isDark=useSelector((state)=>state.theme.isDark);
    const [searchinputbytext,setsearchinputbytext]=useState("");
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(setsearchjobbytext(searchinputbytext));
    },[searchinputbytext])
    const Navigate = useNavigate();
    const shiftpage = () => {
        Navigate('/admin/jobs/create');
    }
    return (
        <>
            <Navbar />
            <div className={`${isDark?'bg-slate-900':'bg-white'} w-full h-screen mx-auto p-5`}>
                <div className='flex justify-between items-center p-3'>
                    <div>
                        <input 
                        onChange={(e)=>setsearchinputbytext(e.target.value)}
                        className='p-1' 
                        type="text" 
                        placeholder="Filter by Name or Role" />
                    </div>
                    <div>
                        <button onClick={shiftpage} className='text-white bg-black p-2 rounded-md'>Post New Job</button>
                    </div>
                </div>
                {/* table start hai yha se */}
                <AdminTable/>
            </div>
        </>
    )
}

export default Adminjobs