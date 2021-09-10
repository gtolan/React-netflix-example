import tvShows from '../mock-apis/tv';
import { useEffect, useReducer, useCallback } from 'react';
import imageListReducer from './imageListReducer';

const useImageListManager = () => {

    const addToLoadScrollArray = (onScreen, offScreen) => {
        if(onScreen.length > offScreen.length){
            const addRows = [...offScreen, onScreen[offScreen.length]];
            dispatch({type: 'addToLoadRows', payload: addRows});
        }
    }

    const useDataMilliesForID = useCallback(
        () => {
           const millis = new Date().getTime();
            return millis;
        }  
    );

    const [{tvShowsList,
            headerTitle,
            appViewArray,
            loadOnScrollArray,
            addLoad,
            genRandomID}, dispatch] = useReducer(imageListReducer,{
                                             tvShowsList:[],
                                             headerTitle:[],
                                             appViewArray:[],
                                             loadOnScrollArray:[],
                                             addLoad:addToLoadScrollArray,
                                             genRandomID:useDataMilliesForID
                                             })

    const splitData = () => {

        let parentArray =[], tempArray = [];
        
        tvShows.items.slice(0,100).map((show,indx)=> {
             return (indx % 24 === 0 && indx !== 0) ?
                   (parentArray.push(tempArray), tempArray = []) :
                     (tempArray.push(show))
                     }
        );
        dispatch({type:'appViewArray', payload: parentArray})
    }

    const getRandomHeader = () => {
            return Math.floor(Math.random() * 99);
    }

    useEffect(() => {
        const getData = () => {
            dispatch({type: 'setTvShowList', payload: tvShows.items}); 
            dispatch({type:'setHeaderTitle',payload:tvShows.items[getRandomHeader()]});
            splitData()
        }
        setTimeout(getData,1500)
          
    },[]);





    return {tvShowsList, headerTitle, appViewArray, loadOnScrollArray, addLoad, genRandomID}
}

export default useImageListManager;