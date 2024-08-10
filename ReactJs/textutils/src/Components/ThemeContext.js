import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const myStyle = {
        color: isDarkMode ? 'white' : 'black',
        backgroundColor: isDarkMode ? '#042743' : '#EAECEE'
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, myStyle }}>
            {children}
        </ThemeContext.Provider>
    );
};
