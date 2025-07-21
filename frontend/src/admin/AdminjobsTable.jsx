import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil,faEye } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
export default function AdminTable() {
    const Navigate=useNavigate();
    const isDark=useSelector((state)=>state.theme.isDark);
    // useEffect call krege filtered company laane ke liye searchcompanybytext jo global variable bnae hai.
    const companies = useSelector((state) => state.company.allcompany || []);
    const allAdminJobs = useSelector((state)=> state.job.alladminJobs || []);
    const loading = useSelector((state) => state.company.loading);
    const searchcompanybytext=useSelector((state)=>state.company.searchcompanybytext);
    const searchjobbytext=useSelector((state)=>state.job.searchjobbytext);
    const [filteredcompanies,setfilteredcompanies]=useState(companies);
    const [filteredAdminjobs,setfilteredAdminjobs]=useState(allAdminJobs);
    useEffect(()=>{
        console.log("Ye dekho table wala component useEffect call hua")
        console.log(searchcompanybytext);
        console.log(searchjobbytext);
        const filteradminjob=allAdminJobs.length>=0 && allAdminJobs.filter((adminjob)=>{
            if(!searchjobbytext){
                return true;
            }
            return adminjob?.title?.toLowerCase().includes(searchjobbytext.toLowerCase()) || adminjob?.company?.name.toLowerCase().includes(searchjobbytext.toLowerCase());
        })
        console.log(filteradminjob);
        setfilteredAdminjobs(filteradminjob);
    },[allAdminJobs,searchjobbytext]);
    console.log("table ke ander wlaa companies", companies);
    if (loading) {
        return <div>Admin Jobs Loading.......</div>
    }
    if (!allAdminJobs || allAdminJobs.length == 0) {
        return <div>
            Sorrry No Admin Jobs Found!!
        </div>
    }
    else console.log(companies.length);
    return (
        <>
            {
                !filteredAdminjobs || filteredAdminjobs.length <= 0 ?
                (
                    <>
                        Sorry But You Haven't registered For this company.
                    </>
                ) : (
                        <div className={`${isDark?'bg-slate-900':'bg-white'} overflow-x-auto w-full`}>
                            <table className="min-w-full divide-y divide-gray-200 border border-gray-300 shadow-md rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Company Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Role</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Date</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Action</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">See Applicants</th>

                                    </tr>
                                </thead>
                                {filteredAdminjobs.map((adminjob) => {
                                    return <tbody className="divide-y divide-gray-200">
                                        <tr className={`hover:bg-gray-500`}>
                                            <td className={`px-6 py-4 text-sm ${isDark?'text-white':'text-black'} whitespace-nowrap`}>{adminjob?.company?.name}</td>
                                            <td className={`px-6 py-4 text-sm ${isDark?'text-white':'text-black'} whitespace-nowrap`}>{adminjob?.title}</td>
                                            <td className={`px-6 py-4 text-sm ${isDark?'text-white':'text-black'} whitespace-nowrap`}>{adminjob?.createdAt.split('T')[0]}</td>
                                            <td onClick={()=>{Navigate(`/admin/companies/desc/${adminjob?._id}`)}}className="px-6 py-4 text-sm font-medium text-yellow-500 whitespace-nowrap"><FontAwesomeIcon icon={faPencil} /><p>Edit</p></td>
                                            <td onClick={()=>{Navigate(`/admin/jobs/${adminjob?._id}/applicants`)}}className="px-6 py-4 text-sm font-medium text-green-500 whitespace-nowrap"><FontAwesomeIcon icon={faEye} /><p>Applicants</p></td>
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
