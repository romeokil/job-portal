import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faMessage, faAddressBook } from "@fortawesome/free-regular-svg-icons"
import Dialogbox from './Dialogbox.jsx'
import { setallappliedjobs } from '../redux/applicationslice.js'
import AppliedjobsTable from './appliedjobsTable.jsx'
import { useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Profile() {
    const isDark=useSelector((state)=>state.theme.isDark);
    const dispatch=useDispatch();
    const user=useSelector((state)=>state.auth.user);
    const Navigate=useNavigate();
    const [showDialog, setShowDialog] = useState(false);
    useEffect(()=>{
        if(!user){
            Navigate('/');
        }
    },[user,Navigate])

    // ye useEffect hai ki tm kin kin jobs me apply kiye ho wo pata krna.
    useEffect(()=>{
        const getappliedjobs=async()=>{
            try{
                const response=await fetch(`http://localhost:8000/api/application/getappliedjobs`,{
                    method:'GET',
                    credentials:'include'
                })
                if(response.ok){
                    let data=await response.json();
                    dispatch(setallappliedjobs(data.application));
                    // console.log(data.application);
                }
            }
            catch(error){
                console.log("Error while fetching all applied jobs");
            }
        }
        getappliedjobs();
    },[])
    return (
        <div>
            <Navbar />
            <div className={`${isDark?'bg-slate-900':'bg-white'} w-full h-full p-10 mx-auto`}>
                {/* ye pehla dibba hai. */}
                <div className='border border-b-lime-950 p-2'>
                    <div className='flex justify-between items-center'>
                        <div className='w-20'>
                            <img className='w-20 h-10 rounded-full' src={user?.profilePhoto} alt="" />
                        </div>
                        <div>
                            <h3 className={`${isDark?'text-white':'text-black'} p-2`}>{user?.name}</h3>
                            <p className={`text-wrap  ${isDark?'text-white':'text-black'} p-2`}>{user?.profile?.bio}</p>
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
                        <FontAwesomeIcon className={`${isDark?'text-white':'text-black'}`} icon={faMessage} />
                        <p className={`${isDark?'text-white':'text-black'} p-2`}>{user?.email}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FontAwesomeIcon className={`${isDark?'text-white':'text-black'
                        }`} icon={faAddressBook} />
                        <p className={`${isDark?'text-white':'text-black'
                        } p-2`}>{user?.phonenumber}</p>
                    </div>
                    <h2 className={`${isDark?'text-white':'text-black'} p-2`}>Skills</h2>
                    <div className={`${isDark?'text-white':'text-black'} p-2 flex flex-wrap gap-1 font-semibold`}>
                        {user?.profile?.skills.map((skill, index) => (
                            <h5 className={`${isDark?'text-white':'text-black'} p-2 border-1 border-slate-300 shadow-lg ${isDark?'shadow-blue-700/50':'shadow-slate-500/50'} rounded-xl p-1 text-base`} key={index}>
                                {skill}
                            </h5>
                        ))}
                    </div>
                    <div>
                        <h1 className={`${isDark?'text-white':'text-black'} p-2`}>Resume</h1>
                        <a className={`${isDark?'text-white':'text-black'}`} href={user?.profile?.resume} target='_blank'>{user?.profile?.resumename}</a>
                    </div>
                </div>
                {/* ye second dibba hai. */}
                <div className='mt-3'>
                    <h2 className={`${isDark?'text-white':'text-black'} p-2`}>Applied Jobs</h2>
                    <AppliedjobsTable/>
                </div>
            </div>
        </div>
    )
}

export default Profile