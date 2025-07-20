import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEye } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
export default function Table() {
    const { isDark } = useSelector((state) => state.theme.isDark);
    const Navigate = useNavigate();
    // useEffect call krege filtered company laane ke liye searchcompanybytext jo global variable bnae hai.
    const companies = useSelector((state) => state.company.allcompany || []);
    const loading = useSelector((state) => state.company.loading);
    const searchcompanybytext = useSelector((state) => state.company.searchcompanybytext);
    const [filteredcompanies, setfilteredcompanies] = useState(companies);
    useEffect(() => {
        console.log("Ye dekho table wala component useEffect call hua")
        console.log(searchcompanybytext);
        const filtercompany = companies.length >= 0 && companies.filter((company) => {
            if (!searchcompanybytext) {
                return true;
            }
            return company?.name?.toLowerCase().includes(searchcompanybytext.toLowerCase());
        })
        console.log(filtercompany);
        setfilteredcompanies(filtercompany);
    }, [companies, searchcompanybytext]);
    console.log("table ke ander wlaa companies", companies);
    if (loading) {
        return <div className={`${isDark ? 'text-white' : 'text-black'}`}>Companies Loading.......</div>
    }
    if (!companies || companies.length == 0) {
        return <div>
            Sorrry No companies Found!!
        </div>
    }
    else console.log(companies.length);
    return (
        <>
            {
                filteredcompanies.length <= 0 ?
                    (
                        <>
                            Sorry But You Haven't registered For this company.
                        </>
                    ) : (
                        <div className={`${isDark ? 'bg-slate-900' : 'bg-white'} overflow-x-auto w-full`}>
                            
                            <table className="min-w-full divide-y divide-gray-200 border border-gray-300 shadow-md rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Logo</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Company Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Date</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Action</th>

                                    </tr>
                                </thead>
                                {filteredcompanies.map((company) => {
                                    return <tbody className="divide-y divide-gray-200">
                                        <tr className={`hover:bg-gray-500`}>
                                            <td className={`px-6 py-4 text-sm ${isDark ? 'text-white' : 'text-black'} whitespace-nowrap`}>
                                                <img className='w-10 rounded-full' src={company?.logo} alt="This is pic" srcset="" />
                                            </td>
                                            <td className={`px-6 py-4 text-sm ${isDark ? 'text-white' : 'text-black'} whitespace-nowrap`}>{company?.name}</td>
                                            <td className={`px-6 py-4 text-sm ${isDark ? 'text-white' : 'text-black'} whitespace-nowrap`}>{company?.createdAt.split('T')[0]}</td>
                                            <td onClick={() => { Navigate(`/admin/companies/desc/${company?._id}`) }} className="px-6 py-4 text-sm font-medium text-yellow-500 whitespace-nowrap"><FontAwesomeIcon icon={faPencil} /><p>Edit</p></td>
                                        </tr>
                                    </tbody>
                                })}
                            </table>
                        </div>
                    )
            }
        </>
    )
}
