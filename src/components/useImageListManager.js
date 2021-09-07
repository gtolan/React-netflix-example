import api from '../mock-apis/title';
import tvShows from '../mock-apis/tv';
import { useState, useEffect } from 'react';

const useImageListManager = () => {

    const [tvShowsList, setTVShows] = useState([]);

    useEffect(() => {
        setTVShows(tvShows.items)
    }, [tvShowsList])



    
    return {tvShowsList,setTVShows}
}

export default useImageListManager;