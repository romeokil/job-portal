import React from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft} from "@fortawesome/free-regular-svg-icons"
import { useNavigate } from 'react-router-dom'
function Admincompaniesdesc() {
  const [companydetails,setcompanydetails]=useState({
    companyname,
    companydesc,
    companywebsite,
    companylocation,
    
  })
  const Navigate=useNavigate();
  const previousPage=()=>{
    Navigate('/admin/companies/create')
  }
  const submitHandler=(e)=>{
    e.preventDefault();

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
                  <FontAwesomeIcon  className='pr-1' icon={faArrowAltCircleLeft} />
                  Back</button>
                <h2 className='font-semibold text-medium text-lg'>Company Setup</h2>
              </div>
              <form onSubmit={submitHandler} className='flex flex-col gap-2 p-2'>
                <p>Company Name</p>
                <input className='w-full p-1' type="text" placeholder="Enter Your Company Name" />
                <p>Description</p>
                <input className='w-full p-2' type="text" placeholder="Enter Description about the Company" />
                <p>Website</p>
                <input className='w-full p-2' type="text" placeholder='Enter Your website link' />
                <p>Location</p>
                <input className='w-full p-2' type='text' placeholder='Enter Your location' />
                <p>Logo</p>
                <input type="file" name="file" id="file" />
                <button className='px-2 py-1 rounded-lg text-white bg-black mt-2'>Register Company</button>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>

  )
}

export default Admincompaniesdesc