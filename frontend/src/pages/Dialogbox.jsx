import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProfileDialog = ({ show, onClose }) => {
  const user=useSelector((state)=>state.auth.user);
  console.log(user);
  const [userdata,setuserdata]=useState({
    name:user?.name,
    email:user?.email,
    number:user?.phonenumber,
    bio:user?.profile?.bio,
    skills:user?.profile?.skills,
    resume:user?.profile?.resume
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    bio: '',
    skills: '',
    resume: null,
  });

  if (!show) return null;

  const handleChange = (e) => {
    setuserdata({...userdata,[e.target.name]:e.target.value})
  };

  const handlefileChange=(e)=>{
    const file=e.target.file?.[0];
    setuserdata({...userdata,file})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userdata);
    onClose(); // Close the dialog after updating
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
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
            value={userdata.file?.[0]}
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
