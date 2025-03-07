import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Herosection from '../components/Herosection.jsx'
import LatestJob from '../components/LatestJob.jsx'
function Home() {
    return (
        <>
            <div>
                <Navbar/>
                <Herosection/>
                <LatestJob/>
            </div>
        </>
    )
}

export default Home