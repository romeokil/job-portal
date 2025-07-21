import { Route,Routes } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx"
import Job from "./pages/Job.jsx"
import Browse from "./pages/Browse.jsx"
import Profile from "./pages/Profile.jsx"
import JobDescription from "./pages/JobDescription.jsx"
import Adminjobs from "./admin/Adminjobs.jsx"
import Admincompanies from "./admin/Admincompanies.jsx"
import Admincreatecompanies from "./admin/Admincreatecompanies.jsx"
import Admincompaniesdesc from "./admin/Admincompaniesdesc.jsx"
import Admincreatejobs from "./admin/Admincreatejobs.jsx"
import Applicant from "./admin/Applicant.jsx"
import LandingPage from "./pages/LandingPage.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/landing' element={<LandingPage/>}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path="/job" element={<Job/>}></Route>
        <Route path="/description/:id" element={<JobDescription/>}></Route>
        <Route path="/browse" element={<Browse/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        {/* ab yha se admin walaa saara route hoga. */}
        <Route path='/admin/jobs' element={<Adminjobs/>}></Route>
        <Route path='/admin/companies' element={<Admincompanies/>}></Route>
        <Route path='/admin/companies/create' element={<Admincreatecompanies/>}></Route>
        <Route path='/admin/jobs/create' element={<Admincreatejobs/>}></Route>
        <Route path='/admin/jobs/:id/applicants' element={<Applicant/>}></Route>
        <Route path='/admin/companies/desc/:id' element={<Admincompaniesdesc/>}></Route>
      </Routes>
      <ToastContainer/>

    </>
  )
}

export default App
