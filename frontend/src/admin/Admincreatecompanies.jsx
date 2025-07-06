import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setsinglecompany} from '../redux/companyslice.js'

function Admincreatecompanies() {
    const dispatch=useDispatch();
    const [loading,setloading]=useState(false);
    const [companyname,setcompanyname]=useState('');
    const Navigate=useNavigate();
    const backtoadmin=()=>{
        Navigate('/admin/companies')
    }
    const registercompany= async ()=>{
        try {
            setloading(true);
            const response=await fetch('http://localhost:8000/api/company/register',{
                method:'POST',
                headers:{
                    'Content-Type':'application/JSON'
                },
                body:JSON.stringify({companyname}),
                credentials:'include'
            })
            if(response.ok){
                const data=await response.json();
                const registeredcompany=data.newCompany;
                console.log(registeredcompany);
                dispatch(setsinglecompany(registeredcompany))
                Navigate(`/admin/companies/desc/${registeredcompany._id}`);
            }
        } catch (error) {
            console.log("Error while registering company");
        }
        finally{
            setloading(false);
        }
    }
  return (
    <>
        <Navbar/>
        <div className='w-4/5 mx-auto m-5'>
            <div className='mt-6 mb-3'>
                <h2 className='text-black font-semibold text-2xl'>Your Company Name</h2>
                <p className='text-slate-600 font-medium text-xs'>What would you like to give your company name? you can change this later.</p>
            </div>
            <div className='mt-6'>
                <p className='text-black font-medium mb-1'>Company Name</p>
                <input onChange={(e)=>setcompanyname(e.target.value)}className='p-1 w-full' type="text"  placeholder="JobHunt,Microsoft"/>
            </div>
            <div className='my-5 flex gap-3'>
                <button className='text-black p-2 font-medium' onClick={backtoadmin}>Cancel</button>
                <button className='text-white bg-black p-2 font-medium rounded-lg' onClick={registercompany}>Continue</button>
            </div>

        </div>
    
    </>
  )
}

export default Admincreatecompanies