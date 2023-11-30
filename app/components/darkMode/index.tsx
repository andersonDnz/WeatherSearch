import { FiSun, FiMoon } from "react-icons/fi";


import React, { useState } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
    
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <FiSun/> : <FiMoon/>}
      </button>
      
    </div>
  );
};

export default DarkMode;
