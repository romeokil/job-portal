import { useState } from 'react'
import Dropdown from "./components/Dropdown.jsx"
import Avatar from "./components/Avatar.jsx"
function App() {
  const [user, setuser] = useState(false);
  return (
    <>
      <div className='flex items-center justify-around'>
        <div>
          <h1 className='text-blue-700 text-2xl'>Job<span className='text-red-700'>Portal</span></h1>
        </div>
        <div className='flex gap-4 p-2'>
          <ul className='flex gap-3 p-1'>
            <li className='text-lg text-slate-600 font-semibold'>Home</li>
            <li className='text-lg text-slate-600 font-semibold'>Jobs</li>
            <li className='text-lg text-slate-600 font-semibold'>Browse</li>
          </ul>
          {
            !user ? (
              <div className='flex gap-3 items-center'>
                <button className='text-white bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded-md'>Login</button>
                <button className='text-white bg-red-500 hover:bg-red-700 px-2 py-1 rounded-md'>Register</button>
              </div>
            ) : (
              <div className='flex gap-2'>
                <Dropdown />
                <Avatar />
              </div>
            )
          }

        </div>
      </div>

    </>
  )
}

export default App
