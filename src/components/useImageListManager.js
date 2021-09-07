import api from '../mock-apis/title';
import tvShows from '../mock-apis/tv';
import { useState, useEffect } from 'react';

const useImageListManager = () => {

    const [tvShowsList, setTVShows] = useState([]);
    const [headerTitle, setheaderTitle] = useState([]);

    useEffect(() => {
        setTVShows(tvShows.items)
        const lastTitle = tvShowsList[tvShowsList.length - 2];
        console.log(lastTitle,'lastTitle', tvShows.items)
        setheaderTitle(lastTitle)
    }, [tvShowsList])



    
    return {tvShowsList, headerTitle}
}

export default useImageListManager;