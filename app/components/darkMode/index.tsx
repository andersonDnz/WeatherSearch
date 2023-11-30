import { FiSun, FiMoon } from "react-icons/fi";



import React from 'react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <div
            className={`dark-mode-toggle cursor-pointer p-2 transition-transform duration-slow transform ${isDarkMode ? 'translate-x-full' : 'translate-x-1/2'
                }`}
            onClick={toggleDarkMode}
        >

            {isDarkMode ? (<FiMoon />) : (<FiSun />)}
        </div>
    );
};

export default DarkModeToggle;

