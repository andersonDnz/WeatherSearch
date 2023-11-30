
import React, { useState } from 'react';

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`App ${isDarkMode ? 'dark' : ''}`}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { isDarkMode, toggleDarkMode })
            )}
        </div>
    );
};

export default ThemeProvider;
