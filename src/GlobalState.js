import React from 'react'
import useImageListManager from './components/useImageListManager';

export const GlobalContext = React.createContext();
export const GlobalProvider = ({children}) => {
    const {tvShowsList,
            headerTitle,
            appViewArray,
            loadOnScrollArray,
            genRandomID,
            addLoad} = useImageListManager();

    const provider  = {
            tvShowsList,
            headerTitle,
            appViewArray,
            loadOnScrollArray,
            addLoad,
            genRandomID
    }

    return (
        <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
    )
}