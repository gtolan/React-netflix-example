import React from 'react'
import useImageListManager from './components/useImageListManager';

export const GlobalContext = React.createContext();
export const GlobalProvider = ({children}) => {
    const {tvShowsList,
            headerTitle,
            appViewArray,
            loadOnScrollArray} = useImageListManager();

    const provider  = {
            tvShowsList,
            headerTitle,
            appViewArray,
            loadOnScrollArray,
    
    }

    return (
        <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
    )
}