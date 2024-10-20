import {createContext, useContext, useState} from 'react';

const AppContext = createContext({ isDarkTheme: false, toggleDarkTheme: () => {} });

export const AppProvider = ({children}: {children: any}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        const classes = document.getElementById('app-root')?.classList;
        if (classes) classes.toggle('dark-mode');
    }

    return <AppContext.Provider value={{isDarkTheme, toggleDarkTheme }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext);



