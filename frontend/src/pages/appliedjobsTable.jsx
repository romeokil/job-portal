import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function appliedjobsTable() {
    const isDark=useSelector((state)=>state.theme.isDark);
    const allappliedjobs = useSelector((state) => state.application.allappliedjobs);
    // console.log("allappliedjobs ke table ke ander wala hai ye.", allappliedjobs);
    return (
        <div className={`${isDark?'bg-slate-900':'bg-white'} overflow-x-auto w-full h-screen`}>
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
                    {allappliedjobs.map((appliedjob) => {
                        return <tr className="hover:bg-gray-500">
                            <td className={` ${isDark?'text-white':'text-black'} px-6 py-4 text-sm whitespace-nowrap`}>{appliedjob.createdAt.split('T')[0]}</td>
                            <td className={` ${isDark?'text-white':'text-black'} px-6 py-4 text-sm whitespace-nowrap`}>{appliedjob.job.title}</td>
                            <td className={` ${isDark?'text-white':'text-black'} px-6 py-4 text-sm whitespace-nowrap`}>{appliedjob.job.company.name}</td>
                            <td className={`px-6 py-4 text-sm font-medium ${appliedjob.status=='pending'?'text-yellow-500': appliedjob.status =='accepted' ?'text-green-500':'text-red-500'} whitespace-nowrap`}>{appliedjob.status}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
