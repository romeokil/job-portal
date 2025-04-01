import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { login } from '../redux/authslice.js'
import { useDispatch } from 'react-redux'
function Login() {
  const dispatch=useDispatch();
  const [input,setinput]=useState({
    email:"",
    password:"",
    role:""
  })

  const changeEventHandler=(e)=>{
    setinput({...input,[e.target.name]:e.target.value})
  }

  const submitHandler= async (e)=>{
    e.preventDefault();
    console.log("login kr rhe hai input print",input);
    try{
      const response = await fetch(`http://localhost:8000/api/user/login`, {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',  // Make sure credentials are included
      });
      if(response.ok){
        let data=await response.json();
        console.log("Login Successfull")
        dispatch(login(data.checkuser));
      }
    }
    catch(error){ 
        console.log("Error while while calling login api calling",error);
    }
    console.log(input)
  }
  return (
    <>
      <div>
      <Navbar />
      <div className='w-full h-full flex items-center justify-center'>
        <form onSubmit={submitHandler} className='flex flex-col gap-2 p-3 w-3/5'>
          <h1 className='font-semibold text-center text-black text-2xl underline'>Login</h1>
          <label>Email</label>
          <input className='p-1 rounded-sm bg-slate-100' 
            name="email"
            value={input.email}
            onChange={changeEventHandler}
          type="text" placeholder="rahul@gmail.com" />
          <label>Password</label>
          <input className='p-1 rounded-sm bg-slate-100'
            name="password"
            value={input.password}
            onChange={changeEventHandler}
          type="password" placeholder="password" />
          <div className='flex gap-2 flex-wrap'>
            Applicant:<input className='p-1 rounded-sm bg-slate-100' type="radio" name="role" 
            onChange={changeEventHandler}
            value="Applicant" />
            Recruiter:<input className='p-1 rounded-sm bg-slate-100' type="radio" name="role" 
            onChange={changeEventHandler}
            value="Recruiter" />
          </div>
          <button className='bg-black text-white p-1 rounded-md mt-1'>Login</button>
          <span>Don't have an Account ? <Link to='/register' className='text-slate-600 hover:text-blue-900 hover:text-lg hover:font-semibold'>Signup</Link></span>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login