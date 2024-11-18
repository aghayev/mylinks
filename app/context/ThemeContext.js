'use client'
import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext()

export function ThemeProvider({children}) {
const [theme, setTheme] = useState('light'); // Shared state

const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
};

return (
    <ThemeContext.Provider value={{theme: 'light', toggleTheme }}>
        {children}
    </ThemeContext.Provider>
)
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context;
}