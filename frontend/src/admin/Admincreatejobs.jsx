import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'

function Admincreatejobs() {
    const companies = useSelector((state) => state.company.allcompany);
    const Navigate = useNavigate();
    const [input, setinput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: "",
    })
    const changeEventHandler = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input.title);
        console.log(input.description);
        console.log(input.salary);
        console.log(input.experience);
        console.log(input.location);
        console.log(input.jobType);
        console.log(input.position);
        console.log(input.requirements);
        console.log(input.companyId);
        try {
            const response = await fetch(`http://localhost:8000/api/jobs/createjob`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input),
                credentials: 'include'
            })
            let data = await response.json();
            if (response.ok) {
                // alert('Job created Successfully!!!');
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
                console.log(data.newJob)
                Navigate('/admin/jobs');
            }
            else {
                toast.warn(`🦄 ${response.message}`, {
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
            // alert('Error while creating the job from Admin')
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
            console.log("Error while creating the job from Admin")
        }
    }
    return (
        <div>
            <Navbar />
            <div className='mt-10 w-full h-full flex items-center justify-center'>
                <form onSubmit={submitHandler} className='w-4/5 md:w-3/5 border-2 border-slate-200 shadow-xl rounded-md p-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 p-3'>
                        <div className='flex flex-wrap gap-2 justify-between items-center'>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Title</label>
                            <input className='p-1 rounded-md bg-slate-100'
                                value={input.title}
                                onChange={changeEventHandler}
                                name="title"
                                type="text" placeholder="rahul" />
                        </div>
                        <div className='flex flex-wrap gap-2 justify-between items-center'>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Description</label>
                            <input className='p-1 rounded-md bg-slate-100'
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                type="text" placeholder="This is a good company" />
                        </div>
                        <div className='flex flex-wrap gap-2 justify-between items-center'>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Requirements</label>
                            <input className='p-1 rounded-md bg-slate-100'
                                name="requirements"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                type="text" placeholder="Html,React,Node" />
                        </div>
                        <div className='flex flex-wrap gap-2 justify-between items-center'>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Salary</label>
                            <input className='p-1 rounded-md bg-slate-100'
                                name="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                type="text" placeholder="100000" />
                        </div>
                        <div className='flex flex-wrap gap-2 justify-between items-center'>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Location</label>
                            <input className='p-1 rounded-md bg-slate-100'
                                name="location"
                                value={input.value}
                                onChange={changeEventHandler}
                                type="text" placeholder="Mumbai,Bengaluru" />
                        </div>
                        <div className='flex flex-wrap gap-2 justify-between items-center'>
                            <label htmlFor="jobType" className="block mb-1 text-sm font-medium text-gray-700">Job Type</label>
                            <select
                                id="jobType"
                                value={input.jobType}
                                name="jobType"
                                onChange={changeEventHandler}
                                className="w-full p-1 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Job Type</option>
                                <option value="Full-time">Full-Time</option>
                                <option value="Part-time">Part-Time</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap gap-2 justify-between items-center'>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Experience Level</label>
                            <input className='p-1 rounded-md bg-slate-100'
                                name="experience"
                                value={input.experience}
                                onChange={changeEventHandler}
                                type="text" placeholder="1,2" />
                        </div>
                        <div className='flex flex-wrap gap-2 justify-between items-center'>
                            <label className="block mb-1 text-sm font-medium text-gray-700">No of Positions</label>
                            <input className='p-1 rounded-md bg-slate-100'
                                name="position"
                                value={input.position}
                                onChange={changeEventHandler}
                                type="number" placeholder="rahul" />
                        </div>
                        <div className='flex flex-wrap gap-1 justify-between items-center'>
                            {
                                companies.length > 0 && (
                                    <>
                                        <label htmlFor="jobType" className="block mb-1 text-sm font-medium text-gray-700">Company</label>
                                        <select
                                            id="companyId"
                                            name="companyId"
                                            onChange={changeEventHandler}
                                            className="w-full p-1 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select Company</option>
                                            {
                                                companies.map((company) => {
                                                    return <option key={company._id} value={company._id}>{company.name}</option>
                                                })
                                            }
                                        </select>
                                    </>

                                )
                            }
                        </div>
                    </div>
                    <button className='bg-black text-white p-1 rounded-md mt-1 w-2/3 block mx-auto my-2'> Signup</button>
                    {
                        companies.length <= 0 ? (
                            <>
                                <p className='text-center text-red-600 font-bold text-md'>Sorry!! You Need to Register Company First</p>
                            </>
                        ) : (
                            <>
                                <p className='text-center text-green-600 font-bold text-md'>No you have enough Companies you can post Job</p>
                            </>
                        )
                    }
                </form>
            </div>
        </div>

    )
}

export default Admincreatejobs