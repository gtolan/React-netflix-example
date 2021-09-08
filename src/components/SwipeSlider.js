import React, { useContext } from 'react';
import SwipeableViews from 'react-swipeable-views';
import useImageListManager from './useImageListManager';
import '../styles/ImageList.scss';
import { useInView } from 'react-intersection-observer';
import { GlobalContext } from '../GlobalState';

    
const SwipeSlider = ({list,idx,lazyloadArr}) => {
    
   const { appViewArray } = useContext(GlobalContext);
   const { loadOnScrollArray } = useContext(GlobalContext);
   console.log(appViewArray, 'appViewAr inSS')
  //  const { tvShowsList } = useImageListManager()
   const [ref, inView] = useInView({
    threshold: 0.3,
   })
   const [ref2, inView2] = useInView({
    threshold: 0.3,
   })
   const genRandomID = ()=>{
     const formatYmd = date => date.getTime();
    return formatYmd;
   }


   console.log('SwipeSlider render')
    if(appViewArray.length === 0){
        return <div className='loading'>Loading</div>
    } 

    return (
      <div>
      <div className={`swipe-container ${inView2 ? 'in-view':'out-of-view'}`} ref={ref2}>
        {inView.toString()}
        {/* Swipeable views cannot take a component as it wraps elements for position before load */}
          {appViewArray.length > 0 ? (appViewArray.map((row, idx )=> {
                  return (
                        <SwipeableViews key={idx + genRandomID()} ref={ref} enableMouseEvents className='swipe-view' threshold={2}>
                          {row.length > 0  ? (row.map((row,idx)=> {
                              return (
                                 <img src={row.image} key={idx + genRandomID()} alt={row.title} className="title-image"/>
                              )
                          })) : (<div></div>)}
                        </SwipeableViews>
                  )
                  })) 
                  : (<div></div>)
                  }
      </div>
      <div className={`swipe-container ${inView ? 'in-view':'out-of-view'}`} ref={ref} >
            {loadOnScrollArray.length > 0 ? (loadOnScrollArray.map((row, idx) => {
                  return (
                        <SwipeableViews key={idx + genRandomID()}  enableMouseEvents className='swipe-view' threshold={2}>
                          {row.length > 0  ? (row.map((row, idx )=> {
                              return (
                                 <img src={row.image} key={idx + genRandomID()}  alt={row.title} className="title-image"/>
                              )
                          })) : (<div></div>)}
                        </SwipeableViews>
                  )
                  })) 
                  : (<div></div>)
                  }
          </div>
          </div>
    );
}
//,areEqual)



//key={idx + genRandomID()}
export default SwipeSlider;


