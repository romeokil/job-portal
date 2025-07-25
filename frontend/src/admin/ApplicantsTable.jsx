import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
function ApplicantsTable() {
    const isDark = useSelector((state) => state.theme.isDark);
    const allapplications = useSelector((state) => state.application.allapplications);
    console.log(allapplications);
    console.log(allapplications.length);
    const shortlistingstatus = ["accepted", "rejected"];
    const statusHandler = async (status, id) => {
        try {
            const response = await fetch(`https://job-portal-6x2z.onrender.com/api/application/updatestatus/${id}`, {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
                credentials: 'include'
            })
            if (response.ok) {
                let data = await response.json();
                console.log("Application updated successfully!", data.updatedapplication);
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
            console.log("Error while updating application");
            // alert('Application updation Failed!!')
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
        }
    }
    return (
        <div className={`${isDark ? 'bg-slate-900' : 'bg-white'} overflow-x-auto w-full h-screen`}>
            <table className="min-w-full divide-y divide-gray-200 border border-gray-300 shadow-md rounded-lg">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Full Name</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Email</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Contact</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Resume</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Date</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Actions</th>

                    </tr>
                </thead>
                {allapplications && allapplications.map((application) => {
                    return <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                            <td className={`${isDark ? 'text-white' : 'text-black'} px-6 py-4 text-sm text-gray-600 whitespace-nowrap`}>{application.applicant.name}</td>
                            <td className={`${isDark ? 'text-white' : 'text-black'} px-6 py-4 text-sm text-gray-600 whitespace-nowrap`}>{application.applicant.email}</td>
                            <td className={`${isDark ? 'text-white' : 'text-black'} px-6 py-4 text-sm text-gray-600 whitespace-nowrap`}>{application.applicant.phonenumber}</td>
                            {
                                application?.applicant?.profile?.resume ?
                                    <td className={`${isDark ? 'text-white' : 'text-black'} px-6 py-4 text-sm text-gray-600 whitespace-nowrap`}>
                                        <a href={application?.applicant?.profile?.resume} target="_blank">{application?.applicant?.profile?.resumename}</a>
                                    </td> : <td className={`${isDark ? 'text-white' : 'text-black'} px-6 py-4 text-sm text-gray-600 whitespace-nowrap`}>NA</td>
                            }

                            <td className={`${isDark ? 'text-white' : 'text-black'} px-6 py-4 text-sm text-gray-600 whitespace-nowrap`}>{application.applicant.createdAt.split('T')[0]}</td>
                            <td className={`px-6 py-4 text-sm text-gray-600 whitespace-nowrap`}>
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                            Explore
                                            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                                        </MenuButton>
                                    </div>
                                    <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none">
                                        <div className="py-1">
                                            {
                                                shortlistingstatus.map((status, index) => (
                                                    <MenuItem key={index}>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={() => statusHandler(status, application._id)}
                                                                className={`block w-full text-left px-4 py-2 text-sm ${status === 'accepted' ? 'text-blue-700' : 'text-red-700'
                                                                    } ${active ? 'bg-gray-100 text-gray-900' : ''}`}
                                                            >
                                                                {status}
                                                            </button>
                                                        )}
                                                    </MenuItem>
                                                ))
                                            }
                                        </div>
                                    </MenuItems>

                                </Menu>
                            </td>

                        </tr>
                    </tbody>
                })}
            </table>
        </div>
    )
}

export default ApplicantsTable