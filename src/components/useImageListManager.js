import api from '../mock-apis/title';
import tvShows from '../mock-apis/tv';
import { useState, useEffect } from 'react';

const useImageListManager = () => {

    const [tvShowsList, setTVShows] = useState([]);
    const [headerTitle, setHeaderTitle] = useState([]);
    const [appViewArray, setAppViewArray] = useState([]);
    const [lazyLoadArray, setLazyLoadArray] = useState([]);


    const divideData = (data) => {
        let parentArray = [];
        let tempArray = [];
 
        data.slice(0,100).map((show,indx)=> {
            console.log(indx,'show,indx', tempArray)
             return (indx % 24 === 0 && indx !== 0) ?
                   (parentArray.push(tempArray), tempArray = []) :
                     (tempArray.push(show))
                     }
        );
        setAppViewArray(parentArray)

    }

    useEffect(() => {

        //TODO divide api into 10 x 25  - lazy load - scroll restart at end

        setTVShows(tvShows.items);
        setHeaderTitle(tvShowsList[tvShowsList.length - 2])
        divideData(tvShowsList)
          
    }, [])



    
    return {tvShowsList, headerTitle, appViewArray, lazyLoadArray}
}

export default useImageListManager;