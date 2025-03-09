import { Route,Routes } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx"
import Job from "./pages/Job.jsx"
import Browse from "./pages/Browse.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path="/job" element={<Job/>}></Route>
        <Route path="/browse" element={<Browse/>}></Route>
      </Routes>

    </>
  )
}

export default App
