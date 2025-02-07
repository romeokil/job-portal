import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
function Register() {
  const [input,setinput]=useState({
    name:"",
    email:"",
    phonenumber:"",
    password:"",
    role:"",
  });

  const changeEventHandler=(e)=>{
    setinput({...input,[e.target.name]:e.target.value});
  }

  const changeFilehandler=(e)=>{
    setinput({...input,file:e.target.files?.[0]});
  }

  const onSubmitHandler=(e)=>{
    e.preventDefault();
    console.log(input);
  }
  return (
    <div>
      <Navbar />
      <div className='w-full h-full flex items-center justify-center'>
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-2 p-3 w-3/5'>
          <h1 className='font-semibold text-center text-black text-2xl underline'>Register</h1>
          <label>Full Name</label>
          <input className='p-1 rounded-sm bg-slate-100'
            name="name"
            onChange={changeEventHandler}
           type="text" placeholder="rahul" />
          <label>Email</label>
          <input className='p-1 rounded-sm bg-slate-100' 
             name="email"
             onChange={changeEventHandler}
          type="text" placeholder="rahul@gmail.com" />
          <label>Phone Number</label>
          <input className='p-1 rounded-sm bg-slate-100'
             name="phonenumber"
             onChange={changeEventHandler}
          type="text" placeholder="989987898" />
          <label>Password</label>
          <input className='p-1 rounded-sm bg-slate-100'
             name="password"
             onChange={changeEventHandler}
          type="password" placeholder="password" />
          <div className='flex gap-2 flex-wrap'>
            Applicant:<input className='p-1 rounded-sm bg-slate-100' type="radio" name="role"
               onChange={changeEventHandler}
            value="applicant" />
            Recruiter:<input className='p-1 rounded-sm bg-slate-100' type="radio" name="role" 
             onChange={changeEventHandler}
            value="recruiter" />
          </div>
          <label>Profile</label>
          <input className='p-1 rounded-sm bg-slate-100' type="file" onChange={changeFilehandler} />
          <button className='bg-black text-white p-1 rounded-md mt-1'> Signup</button>
          <span>Already have an account ? <Link to='/login' className='text-slate-600 hover:text-blue-900 hover:text-lg hover:font-semibold'>Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Register