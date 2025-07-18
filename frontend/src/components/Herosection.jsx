import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setsearchJobs } from '../redux/jobSlice';
function Herosection() {
  const isDark=useSelector((state)=>state.theme.isDark);
  const Jobs=useSelector((state)=>state.job.allJobs);
  const Navigate=useNavigate();
  const dispatch=useDispatch();
  const [searchinput,setsearchinput]=useState('');
  const handleSearch=()=>{
    if(!searchinput){
      alert('Sorry Nothing is present in the searchBox')
    }
    const searchedjob=Jobs && Jobs.filter((job)=>{
      console.log("job title lowercase",job.title.toLowerCase());
      console.log("searchinput box ke ande",searchinput.toLowerCase());
        return job.title.toLowerCase().includes(searchinput.toLowerCase());
    })
    dispatch(setsearchJobs(searchedjob));
    Navigate('/browse');
  }
  return (
    <div className={`${isDark?'bg-slate-900':'bg-white'} w-full mx-auto p-4`}>
        <p className='text-center text-violet-500 text-lg font-medium mb-2'>No. 1 Job Hunt Website</p>
        <div>
            <p className={`${isDark?'text-white':'text-black'} text-center text-5xl font-semibold`}>Search, Apply &</p>
            <p className={`${isDark?'text-white':'text-black'} text-center text-5xl font-semibold`}>Get Your <span className='text-violet-500'>Dream Jobs</span></p>
            <p className={`text-center m-6 font-medium ${isDark?'text-white':'text-black'} `}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ex.</p>
            <div className='flex justify-center items-center mt-4'>
                  <input onChange={(e)=>{setsearchinput(e.target.value)}} className='p-2 rounded-lg bg-slate-100 w-3/5' placeholder='Frontend, Backend' type="search" name="" id="" />
                  <button onClick={handleSearch} className='py-2 px-3 rounded-r-xl bg-violet-500 text-white'>Search</button>
            </div>
            
        </div>
    </div>
  )
}

export default Herosection