import React, { useState } from 'react';

const ProfileDialog = ({ show, onClose }) => {
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
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            placeholder="Name"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
          <textarea
            name="bio"
            placeholder="Bio"
            rows="3"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="skills"
            placeholder="Skills (comma separated)"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            className="w-full"
            onChange={handleChange}
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
