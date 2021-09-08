import React from 'react'
import { useInView } from 'react-intersection-observer';
import SwipeableViews from 'react-swipeable-views';

const SwipeContainer = ({row}) => {

   const [ref, inView] = useInView({
    threshold: 0.3,
   })
   
   const genRandomID = ()=>{
         const millis = date => date.getTime();
        return millis;
   }

    return (
        <div className={`swipe-container ${inView ? 'in-view':'out-of-view'}`} ref={ref} >
                      {/* Swipeable views cannot take a component as it wraps elements for position before load */}
                        <SwipeableViews key={genRandomID()} enableMouseEvents className='swipe-view' threshold={2}>
                          {row.length > 0  ? (row.map((row,idx)=> {
                              return (
                                 <img src={row.image} key={idx + genRandomID()} alt={row.title} className="title-image"/>
                              )
                          })) : (<div></div>)}
                        </SwipeableViews>
        </div>
    )
}

export default SwipeContainer
