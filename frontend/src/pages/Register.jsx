import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
function Register() {
  const [loading,setloading]=useState(false);
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

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    console.log(input);
    const formdata=new FormData();
    formdata.append('name',input.name);
    formdata.append('email',input.email);
    formdata.append('phonenumber',input.phonenumber)
    formdata.append('password',input.password);
    formdata.append('role',input.role);
    if(input.file) formdata.append('file',input.file);
    try{
      setloading(true);
      const res = await fetch(`http://localhost:8000/api/user/register`, {
        method: 'POST',
        body: formdata,
        credentials: 'include' // if needed for cookies; otherwise remove
      });      
      const response=await res.json();
      console.log(response);
    }
    catch(error){
      console.log("Error while registering user",error);
    }
    finally{
      setloading(false);
    }
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
            value={input.name}
            onChange={changeEventHandler}
           type="text" placeholder="rahul" />
          <label>Email</label>
          <input className='p-1 rounded-sm bg-slate-100' 
             name="email"
             value={input.email}
             onChange={changeEventHandler}
          type="text" placeholder="rahul@gmail.com" />
          <label>Phone Number</label>
          <input className='p-1 rounded-sm bg-slate-100'
             name="phonenumber"
             value={input.phonenumber}
             onChange={changeEventHandler}
          type="text" placeholder="989987898" />
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