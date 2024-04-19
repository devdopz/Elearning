import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import NotificationBox from '../Components/CourseNotification/NotificationBox';
const Notification = () => {
  // State to manage checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="notification">
      <Header />
      <div className='flex flex-row items-center'>
        <h3 className="heading ml-8 mt-3 text-blue-500 text-lg">Notifications</h3>
        {/* Add label for checkbox */}
        <label className="ml-5 mt-3 flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2 text-sm">Mark all as read</span>
        </label>
      </div>

{/* Notification Boxes  */}
      <NotificationBox />
      <NotificationBox />
      <NotificationBox />
      <NotificationBox />
      <NotificationBox />

    </div>
  );
};

export default Notification;
