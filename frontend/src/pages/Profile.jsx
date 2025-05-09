import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faMessage, faAddressBook } from "@fortawesome/free-regular-svg-icons"
import Dialogbox from './Dialogbox.jsx'
function Profile() {
    let skills = ['HTML', 'CSS', 'JAVSCRIPT', 'REACT', 'NODEJS']
    const [showDialog, setShowDialog] = useState(false);
    return (
        <div>
            <Navbar />
            <div className='mt-5 w-3/5 mx-auto'>
                {/* ye pehla dibba hai. */}
                <div className='border border-b-lime-950 p-2'>
                    <div className='flex justify-between items-center'>
                        <div className='w-24'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg" alt="" />
                        </div>
                        <div>
                            <h3>Full Name</h3>
                            <p className='text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolores.</p>
                        </div>
                        {/* ye edit wala button ke liye div */}
                        <div>
                            <button
                                onClick={() => setShowDialog(true)}
                                className="bg-green-600 text-white px-4 py-2 rounded"
                            ><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <Dialogbox show={showDialog} onClose={() => setShowDialog(false)} />
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FontAwesomeIcon icon={faMessage} />
                        <p>rahul@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FontAwesomeIcon icon={faAddressBook} />
                        <p>9334417768</p>
                    </div>
                    <h2>Skills</h2>
                    <div className='flex flex-wrap gap-1 font-semibold'>
                        {skills.map((skill, index) => (
                            <h3 key={index}>
                                {skill}
                            </h3>
                        ))}
                    </div>
                    <div>
                        <h1>Resume</h1>
                        <a href='www.youtube.com' target='_blank'>Rahul Kumar</a>
                    </div>
                </div>
                {/* ye second dibba hai. */}
                <div className='mt-3'>
                    <h2 className='mb-2'>Applied Jobs</h2>
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-full divide-y divide-gray-200 border border-gray-300 shadow-md rounded-lg">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Date</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Job Role</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Company</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">17-01-2002</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">Backend Developer</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">Microsoft</td>
                                    <td className="px-6 py-4 text-sm font-medium text-red-500 whitespace-nowrap">Rejected</td>
                                </tr>
                                <tr className="hover:bg-gray-50 bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">19-02-2003</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">Frontend Developer</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">Google</td>
                                    <td className="px-6 py-4 text-sm font-medium text-green-600 whitespace-nowrap">Selected</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">15-02-2004</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">DevOps Engineer</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">Facebook</td>
                                    <td className="px-6 py-4 text-sm font-medium text-green-600 whitespace-nowrap">Selected</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile