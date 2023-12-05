import { FiSun, FiMoon } from "react-icons/fi";



import React from 'react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <div className="bg-white w-20 rounded-full">

        <div
            className={`flex items-center justify-center text-white w-10 h-10 rounded-full bg-blue-500  dark-mode-toggle cursor-pointer p-2 transition-transform duration-slow transform ${isDarkMode ? 'translate-x-full' : 'translate-x-1/3'
                }`}
            onClick={toggleDarkMode}
        >

            {isDarkMode ? (<FiMoon />) : (<FiSun />)}
        </div>
        </div>


    );
};

export default DarkModeToggle;

