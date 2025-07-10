import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Table from '../assets/Table.jsx'
import usegetallCompanies from '../hooks/usegetallCompanies.jsx'
import {setsearchcompanybytext} from '../redux/companyslice.js'

function Admincompanies() {
    usegetallCompanies();
    const [searchinputbytext,setsearchinputbytext]=useState("");
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(setsearchcompanybytext(searchinputbytext));
    },[searchinputbytext])
    const Navigate = useNavigate();
    const shiftpage = () => {
        Navigate('/admin/companies/create');
    }
    return (
        <>
            <Navbar />
            <div className='w-4/5 mx-auto mt-5'>
                <div className='flex justify-between items-center p-2 mb-3'>
                    <div>
                        <input 
                        onClick={(e)=>setsearchinputbytext(e.target.value)}
                        className='p-1' 
                        type="text" 
                        placeholder="Filter by Name" />
                    </div>
                    <div>
                        <button onClick={shiftpage} className='text-white bg-black p-2 rounded-md'>New Company</button>
                    </div>
                </div>
                {/* table start hai yha se */}
                <Table/>
            </div>
        </>
    )
}

export default Admincompanies