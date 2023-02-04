import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({theme: 'dark'});

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark')

    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}