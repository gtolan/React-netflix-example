import React, { useContext } from 'react';
import '../styles/ImageList.scss';
import { GlobalContext } from '../GlobalState';
import SwipeContainer from './SwipeContainer';
import { useInView } from 'react-intersection-observer';
import useImageListManager from './useImageListManager';
  
    
const SwipeSlider = () => {
  const {loadOnScrollArray} = useContext(GlobalContext)
  const {addToLoadScrollArray, appViewArray} = useImageListManager()

  const [infiniteScroll, inView] = useInView({
      threshold: 0.3,
  })
 
  if(inView){
      console.log('its in view')
      addToLoadScrollArray()
  }

  console.log('SwipeSlider render')
    if(appViewArray.length === 0){
        return <div className='loading'>Loading</div>
    } 

    return (
      <div>
        <div>
          {/* Swipeable views cannot take a component as it wraps elements for position before load */}
            {appViewArray.length > 0 ? (appViewArray.map((row)=> {
                    return (<SwipeContainer row={row}/>)
                    })) 
                    : (<div></div>)
                    }
        </div>
        <div className="lazy-load-rows">
            {loadOnScrollArray.length > 0 ? (loadOnScrollArray.map((row) => {
                    return (<SwipeContainer row={row}/>)
                          })) 
                          : (<div></div>)
                          }
        </div>  
        {appViewArray.length > 0 ? 
        (<div className={"infinite-scroll-sentinel" + ` swipe-container ${inView ? 'in-view':'out-of-view'}`}ref={infiniteScroll}>
                          {inView.toString}
                          {/* addLazyLoad */}
        </div>  ) : (<div></div>)}

      </div>
    );
}
//,areEqual)



//key={idx + genRandomID()}
export default SwipeSlider;


