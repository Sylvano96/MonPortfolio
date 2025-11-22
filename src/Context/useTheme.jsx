import { createContext, useContext, useState } from "react";


export const ThemeContext = createContext({
    theme : null,
    toggleTheme : () => {}
})

export function ThemeProvider({children}){

    const [theme, SetTheme] = useState(localStorage.getItem('bg') == null ? getThemeColor() : localStorage.getItem('bg'))

    const toggleTheme = () => {
        SetTheme(theme === 'dark' ? 'light' : 'dark')
        localStorage.setItem('bg', theme === 'dark' ? 'light' : 'dark')
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}

function getThemeColor(){
    return window.matchMedia && window.matchMedia('(prefers-color-scheme : dark)').matches? 'dark' : 'light'
}


export const useTheme = () => useContext(ThemeContext);