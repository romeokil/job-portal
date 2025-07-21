import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { setuser } from '../redux/authslice.js'
import { useDispatch, useSelector } from 'react-redux'
import { Bounce, ToastContainer, toast } from 'react-toastify';
function Login() {
  const isDark = useSelector((state) => state.theme.isDark);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setinput] = useState({
    email: "",
    password: "",
    role: ""
  })

  const changeEventHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("login kr rhe hai input print", input);
    try {
      const response = await fetch(`http://localhost:8000/api/user/login`, {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',  // Make sure credentials are included
      });
      let data = await response.json();
      console.log("Login Successfull")
      if (response.ok) {
        toast.success(`🦄 ${data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: `${isDark ? 'dark' : 'light'}`,
          transition: Bounce,
        });
        dispatch(setuser(data.checkuser));
        Navigate('/')
      }
      else {
        toast.warn(`🦄 ${data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: `${isDark ? 'dark' : 'light'}`,
          transition: Bounce,
        })
      }
    }
    catch (error) {
      toast.error('🦄 Error while registering the user', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: `${isDark ? 'dark' : 'light'}`,
        transition: Bounce,
      })
      console.log("Error while while calling login api calling", error);
    }
    console.log(input)
  }
  return (
    <>
      <div>
        <Navbar />
        <div className={`${isDark ? 'bg-slate-900' : 'bg-white'} w-full h-screen flex items-center justify-center`}>
          <form onSubmit={submitHandler} className='flex flex-col gap-2 p-3 w-3/5'>
            <h1 className={`font-semibold ${isDark ? 'text-white' : 'text-black'} text-center  text-2xl underline`}>Login</h1>
            <label className={`${isDark ? 'text-white' : 'text-black'}`}>Email</label>
            <input className='p-1 rounded-sm bg-slate-100'
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              type="text" placeholder="rahul@gmail.com" />
            <label className={`${isDark ? 'text-white' : 'text-black'}`}>Password</label>
            <input className='p-1 rounded-sm bg-slate-100'
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              type="password" placeholder="password" />
            <div className={`${isDark ? 'text-white' : 'text-black'} flex gap-2 flex-wrap`}>
              Applicant:<input className='p-1 rounded-sm bg-slate-100' type="radio" name="role"
                onChange={changeEventHandler}
                value="Applicant" />
              Recruiter:<input className='p-1 rounded-sm bg-slate-100' type="radio" name="role"
                onChange={changeEventHandler}
                value="Recruiter" />
            </div>
            <button className='bg-black text-white p-1 rounded-md mt-1'>Login</button>
            <span className={`${isDark ? 'text-white' : 'text-black'}`}>Don't have an Account ? <Link to='/register' className='text-slate-600 hover:text-blue-900 hover:text-lg hover:font-semibold'>Signup</Link></span>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login