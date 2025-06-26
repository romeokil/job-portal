import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Jobcard from "../components/Jobcard.jsx";
import { useSelector } from "react-redux";
function Job() {
    const Jobs=useSelector((state)=>state.job.allJobs);
    const filterdata = [
        {
            filtertype: "Location",
            array: ["Delhi", "Hyderabad", "Bangalore", "Pune", "Mumbai"]
        },
        {
            filtertype: "Industry",
            array: ["Frontend Developer", "Backend Developer", "Full Stack Developer"]
        },
        {
            filtertype: "Salary",
            array: ["0-30k", "31k-60k", "60k-100k"]
        }
    ];

    const [selectedFilters, setSelectedFilters] = useState({
        Location: [],
        Industry: [],
        Salary: []
    });

    const handleCheckboxChange = (filterType, value) => {
        setSelectedFilters(prevState => ({
            ...prevState,
            [filterType]: prevState[filterType].includes(value)
                ? prevState[filterType].filter(item => item !== value) // Remove if already selected
                : [...prevState[filterType], value] // Add if not selected
        }));
    };

    return (
        <div>
            <Navbar />
            <div className="w-4/5 mx-auto mt-5 flex">
                {/* Sidebar with Filters */}
                <div className="w-2/5 sm:w-1/5 p-2 border-r border-gray-300">
                    <h1 className="text-xl font-semibold mb-4">Filter Jobs</h1>
                    {filterdata.map((item) => (
                        <div key={item.filtertype} className="mb-4">
                            <h2 className="text-lg font-medium">{item.filtertype}</h2>
                            <div className="flex flex-col mt-2">
                                {item.array.map((element) => (
                                    <label key={element} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            value={element}
                                            checked={selectedFilters[item.filtertype].includes(element)}
                                            onChange={() => handleCheckboxChange(item.filtertype, element)}
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <span>{element}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Jobs Display Section */}
                <div className="flex-1 p-2">
                    {/* <h2 className="text-lg font-semibold">Filtered Jobs</h2>
                    <pre>{JSON.stringify(selectedFilters, null, 2)}</pre> */}
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-x-4 md:gap-y-4'>
                        {/* <Jobcard/>
                        <Jobcard/>
                        <Jobcard/>
                        <Jobcard/>
                        <Jobcard/>
                        <Jobcard/> */}
                        {Jobs.length<=0?<span>No Jobs Available.</span>:Jobs.map((job)=>{
                            return <Jobcard key={job?._id} job={job}/>
                        })}

                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Job;
