import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons"
import { useNavigate, useParams } from 'react-router-dom'
import { setsinglecompany } from '../redux/companyslice.js'
import { useDispatch,useSelector } from 'react-redux'
import { Bounce, ToastContainer, toast } from 'react-toastify';
function Admincompaniesdesc() {
  const isDark=useSelector((state)=>state.theme.isDark);
  const dispatch=useDispatch();
  const params = useParams();
  const companyid = params.id;
   useEffect(() => {
    const getcompanybyid=async()=>{
      try{
          const response=await fetch(`https://job-portal-6x2z.onrender.com/api/company/getcompanybyid/${companyid}`,{
            method:'GET',
            credentials:'include'
          })
          if(response.ok){
            const data=await response.json();
            console.log(data.company);
            dispatch(setsinglecompany(data.company));
          }
      }
      catch(error){
        console.log("Error while fetching the particular company by id")
      }
    }
    getcompanybyid();

  }, [companyid])
  const singleCompany=useSelector((store)=>store.company.singlecompany);
  console.log(companyid);
  const Navigate = useNavigate();
  const previousPage = () => {
    Navigate('/admin/companies')
  }
 
  const [input,setinput]=useState({
    name:"",
    description:"",
    website:"",
    location:"",
    file:null
  })

   useEffect(()=>{
    setinput({
      name:singleCompany.name || "",
      description:singleCompany.description || "",
      website:singleCompany.website || "",
      location:singleCompany.location || "",
      file:singleCompany.logo || ""
  })
  },[singleCompany])

  const changeEventHandler=(e)=>{
    setinput({...input,[e.target.id]:e.target.value});
  }
  
  const changeFileHandler=(e)=>{
    setinput({...input,[e.target.id]:e.target.files?.[0]})
  }
  
  const submitHandler = async(e) => {
    e.preventDefault();
    console.log(input);
    const formdata=new FormData();
    formdata.append('name',input.name);
    formdata.append('description',input.description);
    formdata.append('website',input.website);
    formdata.append('location',input.location);
    if(input.file){
      formdata.append('file',input.file);
    }
    // console.log(formdata);
    for( let pair of formdata.entries()){
      console.log(pair[0]+" : "+pair[1]);
    }
    try{
      const response=await fetch(`https://job-portal-6x2z.onrender.com/updatecompanybyid/${companyid}`,{
        method:'PUT',
        body:formdata,
        credentials:'include'
      });
      const data=await response.json();
      if(response.ok){
        console.log(data.updatedcompany);
        dispatch(setsinglecompany(data.updatedcompany));
        toast.success(`🦄 ${data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: `${isDark?'dark':'light'}`,
          transition: Bounce,
        });
      }
      else{
        toast.warn(`🦄 ${data.message}` , {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: `${isDark?'dark':'light'}`,
          transition: Bounce,
        })
      }
    }
    catch(error){
      console.log("Error while updating the company by id",error);
      toast.error('🦄 Error while registering the user', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: `${isDark?'dark':'light'}`,
        transition: Bounce,
      })
    }
  }
  return (
    <div>
      <>
        <Navbar />
        <div className={`${isDark?'bg-slate-900':'bg-white'} w-full h-screen flex justify-center items-center`}>
          <div className='w-4/5 mx-auto'>
            <div>
              <div className='flex gap-2 mb-2'>
                <button onClick={previousPage} className='bg-black px-2 py-1 text-white rounded-lg'>
                  <FontAwesomeIcon className='pr-1' icon={faArrowAltCircleLeft} />
                  Back</button>
                <h2 className={`${isDark?'text-white':'text-black'} font-semibold text-medium text-lg`}>Company Setup</h2>
              </div>
              <form onSubmit={submitHandler} className='flex flex-col gap-2 p-2'>
                <p className={`${isDark?'text-white':'text-black'}`}>Company Name</p>
                <input className='w-full p-1' id="name" value={input.name} onChange={changeEventHandler} type="text" placeholder="Enter Your Company Name" />
                <p className={`${isDark?'text-white':'text-black'}`}>Description</p>
                <input className='w-full p-2' id="description" value={input.description} onChange={changeEventHandler} type="text" placeholder="Enter Description about the Company" />
                <p className={`${isDark?'text-white':'text-black'}`}>Website</p>
                <input className='w-full p-2' id="website" value={input.website} onChange={changeEventHandler} type="text" placeholder='Enter Your website link' />
                <p className={`${isDark?'text-white':'text-black'}`}>Location</p>
                <input className='w-full p-2' id="location" value={input.location} onChange={changeEventHandler} type='text' placeholder='Enter Your location' />
                <p className={`${isDark?'text-white':'text-black'}`}>Logo</p>
                <input onChange={changeFileHandler} type="file" name="file" id="file" />
                <button className='px-2 py-1 rounded-lg text-white bg-black mt-2'>Update Company</button>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>

  )
}

export default Admincompaniesdesc