import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function UserProfilePage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [headline, setHeadline] = useState('');
  const [language, setLanguage] = useState('');
  const [website, setWebsite] = useState('');
  const [github, setGithub] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [avatar, setAvatar] = useState(null); // Handle image upload separately

  const handleSave = () => {
    // Logic to save user details
    console.log('User details saved!');
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-gray-100 rounded-lg">
        <NavLink to='/latest' className='bg-gray-800 p-2 rounded-md text-white'><button>Back</button></NavLink>
      <div className="flex justify-center">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <label htmlFor="avatar" className="cursor-pointer">
            <img src={avatar ? URL.createObjectURL(avatar) : '/default-avatar.png'} alt="User Avatar" className="w-full  h-full object-cover" />
            <input type="file" id="avatar" className="hidden" onChange={handleAvatarChange} />
          </label>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap">
        <div className="w-full md:w-1/2">
          <label htmlFor="firstName" className="block text-gray-700">First Name</label>
          <input type="text" id="firstName" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 p-2 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
          <input type="text" id="lastName" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 p-2  focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="headline" className="block text-gray-700">Headline</label>
        <input type="text" id="headline" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 p-2 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={headline} onChange={(e) => setHeadline(e.target.value)} />
        <label htmlFor="headline" className="block text-gray-700">Personal Website Link</label>
        <input type="text" id="headline" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 p-2 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={headline} onChange={(e) => setHeadline(e.target.value)} />
        <label htmlFor="headline" className="block text-gray-700">Linkdin Profile URL</label>
        <input type="text" id="headline" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 p-2 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={headline} onChange={(e) => setHeadline(e.target.value)} />
        <label htmlFor="headline" className="block text-gray-700">Instagram Profile URL</label>
        <input type="text" id="headline" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 p-2 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={headline} onChange={(e) => setHeadline(e.target.value)} />
      </div>
      {/* Add other input fields */}
      <div className="mt-8 flex justify-center">
        <button className="py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default UserProfilePage;
