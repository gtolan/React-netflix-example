// import api from '../mock-apis/title';
import tvShows from '../mock-apis/tv';
import { useEffect, useReducer } from 'react';
import imageListReducer from './imageListReducer';
import { GlobalContext } from '../GlobalState';

const useImageListManager = () => {

    // const [tvShowsList, setTVShows] = useState([]);
    // const [headerTitle, setHeaderTitle] = useState([]);
    // const [appViewArray, setAppViewArray] = useState([]);
    // const [lazyLoadArray, setLazyLoadArray] = useState([]);

    const [{tvShowsList,
            headerTitle,
            appViewArray,
            loadOnScrollArray}, dispatch] = useReducer(imageListReducer,{
                                             tvShowsList:[],
                                             headerTitle:[],
                                             appViewArray:[],
                                             loadOnScrollArray:[]})

    // const {tvShowsList} = useContext(GlobalContext)

    const splitData = () => {

        console.log('splitData', tvShowsList)
        let parentArray = [];
        let tempArray = [];
        
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
            const randomHeader = tvShows.items[getRandomHeader()];
            dispatch({type:'setHeaderTitle',payload:randomHeader});
            splitData()
        }
        setTimeout(getData,1500)
          
    },[])

   
    const addToLoadScrollArray = () => {
        console.log(loadOnScrollArray.length)
        if(appViewArray.length > loadOnScrollArray.length){
            const arr = [...loadOnScrollArray, appViewArray[loadOnScrollArray.length]];

            dispatch({type: 'addToLoadRows', payload: arr});
        }
        console.log(appViewArray[loadOnScrollArray.length],'loadOnScrollArray Index USE')
    }


    return {tvShowsList, headerTitle, appViewArray, loadOnScrollArray, addToLoadScrollArray}
}

export default useImageListManager;