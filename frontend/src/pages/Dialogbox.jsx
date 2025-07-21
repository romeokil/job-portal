import React, { useState ,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setuser } from '../redux/authslice.js';
import { Bounce, ToastContainer, toast } from 'react-toastify';
const ProfileDialog = ({ show, onClose }) => {
  const isDark=useSelector((state)=>state.theme.isDark);
  const user=useSelector((state)=>state.auth.user);
  const dispatch=useDispatch();
  console.log(user);
  const [userdata,setuserdata]=useState('');
  useEffect(() => {
    if (user) {
      setuserdata({
        name: user.name || '',
        email: user.email || '',
        number: user.phonenumber || '',
        bio: user.profile?.bio || '',
        skills: user.profile?.skills || '',
        // resume: user.profile?.resume || ''
        file: user?.profile?.resume || ""
      });
    }
  }, [user, show]);


  if (!show) return null;

  const handleChange = (e) => {
    setuserdata({...userdata,[e.target.name]:e.target.value});
  };

   const handlefileChange= (e) => {
        const file = e.target.files?.[0];
        setuserdata({ ...userdata, file })
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("after submitting the form the data we got!!")
    console.log(userdata);
    const formData=new FormData();
    formData.append("name",userdata.name);
    formData.append("email",userdata.email);
    formData.append("phonenumber",userdata.number);
    formData.append("bio",userdata.bio);
    formData.append("skills",userdata.skills);
    if(userdata.file){
      formData.append("file",userdata.file);
    }
    try{
        const response=await fetch(`http://localhost:8000/api/user/profile/update`,{
          method:'PUT',
          body:formData,
          credentials:'include'
        })
        const data=await response.json();
        console.log(data);
        if(response.ok){
          dispatch(setuser(data.user))
          toast.success(`🦄 ${data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: `${isDark?'dark':'light'}`,
          transition: Bounce,
        });
        }
        else{
          toast.warn(`🦄 ${data.message}` , {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: `${isDark?'dark':'light'}`,
          transition: Bounce,
        })
        }
    }
    catch(error){
      toast.error('🦄 Error while registering the user', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: `${isDark?'dark':'light'}`,
        transition: Bounce,
      })
      console.log("Error while updating the user profile,",error);
    }
    onClose(); // Close the dialog after updating
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className={`${isDark?'bg-slate-900':'bg-white'} p-6 rounded-xl shadow-lg w-[400px] relative`}>
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold"
        >
          &times;
        </button>

        <h2 className={`text-xl font-semibold mb-4 ${isDark?'text-white':'text-black'}`}>Update Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={userdata.name}
            placeholder="Name"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={userdata.email}
            placeholder="Email"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="number"
            value={userdata.number}
            placeholder="Phone Number"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
          <textarea
            name="bio"
            placeholder="Bio"
            rows="3"
            className="w-full p-2 border rounded"
            value={userdata.bio}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="skills"
            value={userdata.skills}
            placeholder="Skills (comma separated)"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
          <input
            type="file"
            name="file"
            accept="application/pdf"
            className="w-full"
            onChange={handlefileChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileDialog;
