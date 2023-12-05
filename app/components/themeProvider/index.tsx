
import React, { FC, HTMLAttributes, ReactElement, ReactNode, useState } from 'react';


interface ThemeProviderProps {
    children: ReactNode;
};

interface DivWithThemeProps extends HTMLAttributes<HTMLDivElement> {
    isDarkMode?: boolean;
    toggleDarkMode?: () => void;
};

const DivWithTheme: FC<DivWithThemeProps> = ({ isDarkMode, toggleDarkMode, ...rest }) => (
    <div {...rest} />

);

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <DivWithTheme className='bg-slate-600'>
            {React.Children.map(children, (child) =>
                React.cloneElement(child as ReactElement)
            )}
        </DivWithTheme>
    );
};

export default ThemeProvider;
