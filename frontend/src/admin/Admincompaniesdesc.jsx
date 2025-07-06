import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons"
import { useNavigate, useParams } from 'react-router-dom'
import { setsinglecompany } from '../redux/companyslice.js'
import { useDispatch } from 'react-redux'
function Admincompaniesdesc() {
  const dispatch=useDispatch();
  const params = useParams();
  const companyid = params.id;
  console.log(companyid)
  const [companyname, setcompanyname] = useState('');
  const [companydesc, setcompanydesc] = useState('');
  const [companywebsite, setcompanywebsite] = useState('');
  const [companylocation, setcompanylocation] = useState('');
  const [companylogo, setcompanylogo] = useState('');
  const Navigate = useNavigate();
  const previousPage = () => {
    Navigate('/admin/companies/create')
  }
  useEffect(() => {
    const getcompanybyid=async()=>{
      try{
          const response=await fetch(`http://localhost:8000/api/company/getcompanybyid/${companyid}`,{
            method:'GET',
            credentials:'include'
          })
          if(response.ok){
            const data=await response.json();
            console.log(data.company);
            setcompanyname(data.company.name);
          }
      }
      catch(error){
        console.log("Error while fetching the particular company by id")
      }
    }
    getcompanybyid();

  }, [companyid])
  const submitHandler = async(e) => {
    e.preventDefault();
    console.log(companyname);
    console.log(companydesc);
    console.log(companywebsite);
    console.log(companylocation);
    console.log(companylogo)

    const formdata=new FormData();
    formdata.append('name',companyname);
    formdata.append('description',companydesc);
    formdata.append('website',companywebsite);
    formdata.append('location',companylocation);
    if(companylogo){
      formdata.append('file',companylogo);
    }
    // console.log(formdata);
    for( let pair of formdata.entries()){
      console.log(pair[0]+" : "+pair[1]);
    }
    try{
      const response=await fetch(`http://localhost:8000/api/company/updatecompanybyid/${companyid}`,{
        method:'PUT',
        body:formdata,
        credentials:'include'
      });
      if(response.ok){
        const data=await response.json();
        console.log(data.updatedcompany);
        dispatch(setsinglecompany(data.updatedcompany));
      }
    }
    catch(error){
      console.log("Error while updating the company by id",error);
    }
  }
  return (
    <div>
      <>
        <Navbar />
        <div className='w-full h-screen flex justify-center items-center'>
          <div className='w-4/5 mx-auto'>
            <div>
              <div className='flex gap-2 mb-2'>
                <button onClick={previousPage} className='bg-black px-2 py-1 text-white rounded-lg'>
                  <FontAwesomeIcon className='pr-1' icon={faArrowAltCircleLeft} />
                  Back</button>
                <h2 className='font-semibold text-medium text-lg'>Company Setup</h2>
              </div>
              <form onSubmit={submitHandler} className='flex flex-col gap-2 p-2'>
                <p>Company Name</p>
                <input className='w-full p-1' value={companyname} onChange={(e) => setcompanyname(e.target.value)} type="text" placeholder="Enter Your Company Name" />
                <p>Description</p>
                <input className='w-full p-2' onChange={(e) => setcompanydesc(e.target.value)} type="text" placeholder="Enter Description about the Company" />
                <p>Website</p>
                <input className='w-full p-2' onChange={(e) => setcompanywebsite(e.target.value)} type="text" placeholder='Enter Your website link' />
                <p>Location</p>
                <input className='w-full p-2' onChange={(e) => setcompanylocation(e.target.value)} type='text' placeholder='Enter Your location' />
                <p>Logo</p>
                <input onChange={(e) => setcompanylogo(e.target.files[0])} type="file" name="file" id="file" />
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