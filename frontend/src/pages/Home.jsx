import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Herosection from '../components/Herosection.jsx'
function Home() {
    return (
        <>
            <div>
                <Navbar/>
                <Herosection/>
            </div>
        </>
    )
}

export default Home