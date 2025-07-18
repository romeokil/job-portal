import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Jobcard from "../components/Jobcard.jsx";
import { setselectFilters } from "../redux/jobSlice.js";
import { useDispatch, useSelector } from "react-redux";
function Job() {
    const isDark=useSelector((state)=>state.theme.isDark);
    const dispatch = useDispatch();
    const allappliedjobs=useSelector(state=>state.application.appliedjobs);
    console.log("allappliedjobs seciton",allappliedjobs);
    const filterdata = [
        {
            filtertype: "Location",
            array: ["Goa", "Hyderabad", "Bangalore", "Pune", "Mumbai"]
        },
        {
            filtertype: "Title",
            array: ["Frontend Developer", "Backend Developer", "Full Stack Developer"]
        },
        {
            filtertype: "Salary",
            array: ["0-5 LPA", "6-10 LPA", "10 or more LPA"]
        }
    ];
    const [selectedFilters, setSelectedFilters] = useState({
        Location: [],
        Title: [],
        Salary: []
    });
    useEffect(() => {
        dispatch(setselectFilters(selectedFilters));
        console.log(selectedFilters);
    }, [selectedFilters])
    const handleCheckboxChange = (filterType, value) => {
        setSelectedFilters((prevState) => {
            const currentArray = prevState[filterType] || [];
            const updatedArray = currentArray.includes(value)
                ? currentArray.filter(item => item !== value)
                : [...currentArray, value];

            return {
                ...prevState,
                [filterType]: updatedArray
            };
        });
    };

    return (
        <div>
            <Navbar />
            <div className={`${isDark?'bg-slate-900':'bg-white'} w-full mx-auto flex`}>
                {/* Sidebar with Filters */}
                <div className={`${isDark?'text-white':'text-black'} w-2/5 sm:w-1/5 p-2 border-r border-gray-300`}>
                    <h1 className="text-xl font-semibold mb-4">Filter Jobs</h1>
                    {filterdata.map((item) => (
                        <div key={item.filtertype} className="mb-4">
                            <h2 className={`${isDark?'text-white':'text-black'} text-lg font-medium`}>{item.filtertype}</h2>
                            <div className="flex flex-col mt-2">
                                {item.array.map((element) => (
                                    <label key={element} className={`${isDark?'text-white':'text-black'} flex items-center space-x-2`}>
                                        <input
                                            type="checkbox"
                                            value={element}
                                            checked={selectedFilters[item.filtertype]?.includes(element) || false}
                                            onChange={() => handleCheckboxChange(item.filtertype, element)}
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <span className={`${isDark?'text-white':'text-black'}`}>{element}</span>
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
                        {/* {Jobs.length <= 0 ? <span>No Jobs Available.</span> : Jobs.map((job) => {
                            return <Jobcard key={job?._id} job={job} />
                        })} */}
                        <Jobcard/>

                    </div>
                </div>
            </div>
    );
}

export default Job;
