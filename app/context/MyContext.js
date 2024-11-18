'use client'
import { createContext, useContext, useState } from 'react';

export const MyContext = createContext();

export function MyProvider({children}) {
const [mymessage, setMymessage] = useState("");

return (
    <MyContext.Provider value={{ mymessage, setMymessage }}>
        {children}
    </MyContext.Provider>
    )
}

export function useMy() {
    const context = useContext(MyContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context;
}