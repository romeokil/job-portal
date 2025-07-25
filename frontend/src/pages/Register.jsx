import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
function Register() {
  const isDark = useSelector((state) => state.theme.isDark);
  const [loading, setloading] = useState(false);
  const [input, setinput] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  }

  const changeFilehandler = (e) => {
    setinput({ ...input, file: e.target.files?.[0] });
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    const formdata = new FormData();
    formdata.append('name', input.name);
    formdata.append('email', input.email);
    formdata.append('phonenumber', input.phonenumber)
    formdata.append('password', input.password);
    formdata.append('role', input.role);
    if (input.file) formdata.append('file', input.file);
    try {
      setloading(true);
      const res = await fetch(`https://job-portal-6x2z.onrender.com/api/user/register`, {
        method: 'POST',
        body: formdata,
        credentials: 'include' // if needed for cookies; otherwise remove
      });
      const response = await res.json();
      console.log(response);
      if (res.ok) {
        toast.success(`🦄 ${response.message}`, {
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
      else {
        toast.warn(`🦄 ${response.message}` , {
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
    catch (error) {
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
      console.log("Error while registering user", error);
    }
    finally {
      setloading(false);
    }
  }
  return (
    <div>
      <Navbar />
      <div className={`${isDark ? 'bg-slate-900' : 'bg-white'} w-full h-screen flex items-center justify-center`}>
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-2 p-3 w-3/5'>
          <h1 className={`${isDark ? 'text-white' : 'text-black'} font-semibold text-center text-2xl underline`}>Register</h1>
          <label className={`${isDark ? 'text-white' : 'text-black'}`} >Full Name</label>
          <input className='p-1 rounded-sm bg-slate-100'
            name="name"
            value={input.name}
            onChange={changeEventHandler}
            type="text" placeholder="rahul" />
          <label className={`${isDark ? 'text-white' : 'text-black'}`}>Email</label>
          <input className='p-1 rounded-sm bg-slate-100'
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            type="text" placeholder="rahul@gmail.com" />
          <label className={`${isDark ? 'text-white' : 'text-black'}`}>Phone Number</label>
          <input className='p-1 rounded-sm bg-slate-100'
            name="phonenumber"
            value={input.phonenumber}
            onChange={changeEventHandler}
            type="text" placeholder="989987898" />
          <label className={`${isDark ? 'text-white' : 'text-black'}`}>Password</label>
          <input className='p-1 rounded-sm bg-slate-100'
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            type="password" placeholder="password" />
          <div className={`flex gap-2 flex-wrap ${isDark ? 'text-white' : 'text-black'}`}>
            Applicant:<input className='p-1 rounded-sm bg-slate-100' type="radio" name="role"
              onChange={changeEventHandler}
              value="Applicant" />
            Recruiter:<input className='p-1 rounded-sm bg-slate-100' type="radio" name="role"
              onChange={changeEventHandler}
              value="Recruiter" />
          </div>
          <label className={`${isDark ? 'text-white' : 'text-black'}`}>Profile</label>
          <input className='p-1 rounded-sm bg-slate-100' type="file" onChange={changeFilehandler} />
          <button className='bg-black text-white p-1 rounded-md mt-1'> Signup</button>
          <span className={`${isDark ? 'text-white' : 'text-black'}`}>Already have an account ? <Link to='/login' className='text-slate-600 hover:text-blue-900 hover:text-lg hover:font-semibold'>Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Register