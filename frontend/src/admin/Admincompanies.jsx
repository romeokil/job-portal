import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencil} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function Admincompanies() {
    const Navigate=useNavigate();
    const shiftpage=()=>{
        Navigate('/admin/companies/create');
    }   
    return (
        <div>
            <Navbar />
            <div className='w-4/5 mx-auto mt-5'>
                <div className='flex justify-between items-center p-2 mb-3'>
                    <div>
                        <input className='p-1' type="text" placeholder="Filter by Name"/>
                    </div>
                    <div>
                        <button onClick={shiftpage}className='text-white bg-black p-2 rounded-md'>New Company</button>
                    </div>
                </div>
                {/* table start hai yha se */}
                <div className="overflow-x-auto w-full">
                        <table className="min-w-full divide-y divide-gray-200 border border-gray-300 shadow-md rounded-lg">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Logo</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Name</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Date</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"  className="inline-block size-10 rounded-full ring-2 ring-white" alt="userpic" />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">Google</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">17-01-2002</td>
                                    <td className="px-6 py-4 text-sm font-medium text-red-500 whitespace-nowrap"><FontAwesomeIcon icon={faPencil} /><p>Edit</p></td>
                                </tr>
                                <tr className="hover:bg-gray-50 bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"  className="inline-block size-10 rounded-full ring-2 ring-white" alt="userpic" />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">Microsoft</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">19-02-2003</td>
                                    <td className="px-6 py-4 text-sm font-medium text-green-600 whitespace-nowrap"><FontAwesomeIcon icon={faPencil} /><p>Edit</p></td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"  className="inline-block size-10 rounded-full ring-2 ring-white" alt="userpic" />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">Facebook</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">15-02-2004</td>
                                    <td className="px-6 py-4 text-sm font-medium text-green-600 whitespace-nowrap"><FontAwesomeIcon icon={faPencil} /><p>Edit</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    )
}

export default Admincompanies