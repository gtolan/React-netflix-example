import '../styles/ImageList.scss';
import { GlobalContext } from '../GlobalState';
import React, { useContext } from 'react';
import SwipeContainer from './SwipeContainer';
import { useInView } from 'react-intersection-observer';
import useImageListManager from './useImageListManager';

  
   // React.memo( 
const SwipeSlider =() => {

    const { addToLoadScrollArray } = useImageListManager()
    const {loadOnScrollArray, appViewArray } = useContext(GlobalContext);
    const rowTitles = ['My List', 'Continue Watching', 'Popular on Netflix', 'Trending Now'];
    const loadedTowTitles = ['Watch it Again','Recently Added', 'Comedies','Thrillers'];
    
    const [infiniteScroll, inView] = useInView({
        threshold: 0.3,
    })


    if(inView){
      //Todo add debounce or delay
        addToLoadScrollArray()
    }

    if(appViewArray.length === 0){
        return <div className='loading'>Loading</div>
    } 

    return (
      <div>
        <div className="app-view-rows"> 
            {appViewArray.length > 0 ? (appViewArray.map((row, id)=> {
                    return (
                    <div>
                      <h5 className="row-title">{rowTitles[id]}</h5>
                      <SwipeContainer row={row}/></div>)
                    })) 
                    : (<div></div>)
                    }
        </div>
        <div className="lazy-load-rows">
            {loadOnScrollArray.length > 0 ? (loadOnScrollArray.map((row,id) => {
                    return (<div>
                      <h5 className="row-title">{loadedTowTitles[id]}</h5>
                      <SwipeContainer row={row}/></div>)
                          })) 
                          : (<div></div>)
                          }
        </div>  

        {appViewArray.length > 0 ? 
            (<div className={"infinite-scroll-sentinel" + ` swipe-container ${inView ? 'in-view':'out-of-view'}`}ref={infiniteScroll}>
                              {inView.toString}
            </div>  ) : (<div></div>)}

      </div>
    );
}
//)

export default SwipeSlider;


