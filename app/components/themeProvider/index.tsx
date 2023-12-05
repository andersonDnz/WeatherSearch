
import React, { useState } from 'react';

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className='bg-slate-600'>
            <div className={`App ${isDarkMode ? 'dark' : ''}`}>
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, { isDarkMode, toggleDarkMode })
                )}
            </div>
        </div>
    );
};

export default ThemeProvider;
