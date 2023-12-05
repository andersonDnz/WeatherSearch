
import React, { FC, ReactElement, ReactNode, useState } from 'react';


interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: FC <ThemeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className='bg-slate-600'>
            <div className={`App ${isDarkMode ? 'dark' : ''}`}>
                {React.Children.map(children, (child) =>
                    React.cloneElement(child as ReactElement, { isDarkMode, toggleDarkMode })
                )}
            </div>
        </div>
    );
};

export default ThemeProvider;
