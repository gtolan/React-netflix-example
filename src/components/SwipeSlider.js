import '../styles/ImageList.scss';
import { GlobalContext } from '../GlobalState';
import React, { useContext } from 'react';
import SwipeContainer from './SwipeContainer';
import { useInView } from 'react-intersection-observer';
import useImageListManager from './useImageListManager';

  
   // React.memo( 
const SwipeSlider =() => {

    // const { addToLoadScrollArray } = useImageListManager()
    const { appViewArray, loadOnScrollArray, addLoad, genRandomID} = useContext(GlobalContext);
    const rowTitles = ['My List', 'Continue Watching', 'Popular on Netflix', 'Trending Now'];
    const loadedTowTitles = ['Watch it Again','Recently Added', 'Comedies','Thrillers'];

    const [infiniteScroll, inView] = useInView({
        threshold: 0.3,
    })

    const debounce = (func, wait, immediate) => {
      let timeout;
      return function() {
        let context = this, args = arguments;
        let later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    if(inView){
        var myEfficientFn = debounce(function() {
          // All the taxing stuff you do
          addLoad(appViewArray,loadOnScrollArray)
          console.log('eff')
        }, 500);
        myEfficientFn()
        console.log('eff- vieqw')
    }

    if(appViewArray.length === 0){
        return <div className='loading'>Loading</div>
    } 

    return (
      <div>
        <div className="app-view-rows"> 
            {appViewArray.length > 0 ? (appViewArray.map((row, id)=> {
                    return (
                      <div key={`${() => genRandomID()}-${id}`}>
                        <h5 className="row-title">{rowTitles[id]}</h5>
                        <SwipeContainer row={row}/>
                      </div>)
                    })) 
                    : (<div></div>)
                    }
        </div>
        <div className="lazy-load-rows">
            {loadOnScrollArray.length > 0 ? (loadOnScrollArray.map((row,id) => {
                    return (
                      <div key={`${() => genRandomID()}-${id}`}>
                        <h5 className="row-title">{loadedTowTitles[id]}</h5>
                        <SwipeContainer row={row}/>
                      </div>)
                          })) 
                          : (<div></div>)
                          }
        </div>  
        <div>
        {appViewArray.length > 0 ? 
            (<div className={"infinite-scroll-sentinel" + ` swipe-container ` + inView ? 'in-view':'out-of-view'} ref={infiniteScroll}>
                             'Sentinel'
            </div>  ) 
            : (<div></div>)}
          </div>
      </div>
    );
}
//)

export default SwipeSlider;


