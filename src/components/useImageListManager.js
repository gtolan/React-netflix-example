import tvShows from '../mock-apis/tv';
import { useEffect, useReducer } from 'react';
import imageListReducer from './imageListReducer';

const useImageListManager = () => {
    console.log('useImageListManager render')
    const [{tvShowsList,
            headerTitle,
            appViewArray,
            loadOnScrollArray}, dispatch] = useReducer(imageListReducer,{
                                             tvShowsList:[],
                                             headerTitle:[],
                                             appViewArray:[],
                                             loadOnScrollArray:[]})

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



    const addToLoadScrollArray = () => {
        if(appViewArray.length > loadOnScrollArray.length){
            const arr = [...loadOnScrollArray, appViewArray[loadOnScrollArray.length]];
            dispatch({type: 'addToLoadRows', payload: arr});
        }
    }

    return {tvShowsList, headerTitle, appViewArray, loadOnScrollArray, addToLoadScrollArray}
}

export default useImageListManager;