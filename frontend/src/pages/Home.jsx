import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Herosection from '../components/Herosection.jsx'
import LatestJob from '../components/LatestJob.jsx'
import usegetallJobs from '../hooks/usegetallJobs.jsx'
import usegetallCompanies from '../hooks/usegetallCompanies.jsx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Home() {
    usegetallJobs();
    // ab aisa hai hmlog check krege ki user recruiter toh ni agr hai toh hmlog usko
    //admin ke home page pe render kr dege.
    const user = useSelector(state => state.auth.user);
    const Navigate = useNavigate();
    useEffect(() => {
        if(!user){
            Navigate('/landing');
        }
        if (user && user?.role === 'Recruiter') {
            Navigate('/admin/companies');
        }
    }, [user])
    return (
        <>
            <div>
                <Navbar />
                <Herosection />
                <LatestJob />
            </div>
        </>
    )
}

export default Home