import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook, faBarChart, faCalendar, faClock, faEye } from "@fortawesome/free-regular-svg-icons"
import Navbar from '../components/Navbar'

export default function LandingPage() {
    return (
        <div className='w-4/5 mx-auto m-2'>
            <Navbar />
            {/* hero section text */}
            <div className="flex flex-col-reverse md:flex-row justify-around p-2 mt-4 gap-2">
                {/* Hero Text Section */}
                <div className="flex flex-wrap w-full md:w-2/5 gap-2">
                    <h1 className="font-bold text-4xl md:text-6xl mt-6 md:mt-10">
                        Streamline Your <span className="text-violet-500 pl-2">Hiring Process</span>
                    </h1>
                    <p className="text-slate-900 dark:text-slate-900 font-normal text-lg md:text-xl">
                        The complete job portal management system that connects top talent with leading companies. Manage applications, track candidates, and make better hiring decisions.
                    </p>
                </div>

                {/* Hero Image Section */}
                <div className="flex flex-wrap w-full md:w-3/5 justify-center gap-2">
                    <img
                        className="w-4/5 rounded-lg"
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                        alt="This is Hero Section image"
                    />
                </div>
            </div>


            <div className='mt-10 p-4 gap-4'>
                <h1 className="font-bold text-4xl md:text-6xl mt-6 md:mt-10 text-center">
                        Everything you need to know<span className="text-violet-500 pl-2">Hire Better</span>
                    </h1>
                    <p className="text-slate-900 dark:text-slate-900 font-normal text-lg md:text-xl pt-2 text-center">
                        Comprehensive tools designed to make your hiring process more efficient , transport and successful.
                    </p>
            </div>
            {/* cards section  */}
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 mt-8'>
                <div className='flex flex-col gap-2 p-2 rounded-xl shadow-lg'>
                    <p><FontAwesomeIcon className='border-1 border-slate-500 rounded-md bg-indigo-700 text-white p-2' icon={faClock} /></p>
                    <h1 className='text-xl font-semibold'>Candidate Management </h1>
                    <p className='mb-4'>Organize and track candidates throughout the hiring process with advanced filtering and search capabilities.</p>
                </div>
                <div className='flex flex-col gap-2 p-2 rounded-xl shadow-lg'>
                    <p><FontAwesomeIcon className='border-1 border-slate-500 rounded-md bg-indigo-700 text-white p-2' icon={faCalendar} /></p>
                    <h1 className='text-xl font-semibold'>Interview Scheduling </h1>
                    <p className='mb-4'>Streamline interview scheduling with automated calendar integration and candidate notifications.</p>
                </div>
                <div className='flex flex-col gap-2 p-2 rounded-xl shadow-lg'>
                    <p><FontAwesomeIcon className='border-1 border-slate-500 rounded-md bg-indigo-700 text-white p-2' icon={faBarChart} /></p>
                    <h1 className='text-xl font-semibold'>Analytics Dashboard</h1>
                    <p className='mb-4'>Get insights into your hiring process with comprehensive analytics and performance metrics.</p>
                </div>
                <div className='flex flex-col gap-2 p-2 rounded-xl shadow-lg'>
                    <p><FontAwesomeIcon className='border-1 border-slate-500 rounded-md bg-indigo-700 text-white p-2' icon={faAddressBook} /></p>
                    <h1 className='text-xl font-semibold'>Resume Database</h1>
                    <p className='mb-4'>Build and search through a comprehensive database of candidate resumes and profiles.</p>
                </div>
                <div className='flex flex-col gap-2 p-2 rounded-xl shadow-lg'>
                    <p><FontAwesomeIcon className='border-1 border-slate-500 rounded-md bg-indigo-700 text-white p-2' icon={faEye} /></p>
                    <h1 className='text-xl font-semibold'>Smart Job Matching</h1>
                    <p className='mb-4'>AI-powered job matching that connects the right candidates with the right opportunities.</p>
                </div>
                <div className='flex flex-col gap-2 p-2 rounded-xl shadow-lg'>
                    <p><FontAwesomeIcon className='border-1 border-slate-500 rounded-md bg-indigo-700 text-white p-2' icon={faClock} /></p>
                    <h1 className='text-xl font-semibold'>Secure & Compliant </h1>
                    <p className='mb-4'>Enterprise-grade security with GDPR compliance and data protection measures.</p>
                </div>
            </div>
            {/* Banner Part */}
           <div className='mt-10 p-4 gap-4'>
                <h1 className="font-bold text-4xl md:text-6xl mt-6 md:mt-10 text-center">
                        Trusted By <span className="text-violet-500 pl-2">Industry Leaders</span>
                    </h1>
                    <p className="text-slate-900 dark:text-slate-900 font-normal text-lg md:text-xl pt-2 text-center">
                        Join Thousands of companies that have transformed their hiring process.
                    </p>
            </div>
            <div className='flex flex-wrap justify-around gap-5'>
                <div className='flex flex-col gap-2 p-2 '>
                    <h1 className='text-xl font-semibold'>10000+</h1>
                    <p className='mb-4'>Companies Trust Us</p>
                </div>
                <div className='flex flex-col gap-2 p-2'>
                    <h1 className='text-xl font-semibold'>500K+</h1>
                    <p className='mb-4'>Jobs Posted</p>
                </div>
                <div className='flex flex-col gap-2 p-2 '>
                    <h1 className='text-xl font-semibold'>2M+</h1>
                    <p className='mb-4'>Candidates</p>
                </div>
                <div className='flex flex-col gap-2 p-2'>
                    <h1 className='text-xl font-semibold'>95%</h1>
                    <p className='mb-4'>Client Satisfaction</p>
                </div>
                
            </div>
            

        </div>
    )
}
