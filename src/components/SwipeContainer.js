import React, {useContext} from 'react'
import { useInView } from 'react-intersection-observer';
import SwipeableViews from 'react-swipeable-views';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { GlobalContext } from '../GlobalState';

const SwipeContainer = React.memo(({row}) => {

   const [ref, inView] = useInView({
    threshold: 0.3,
   })

   const {genRandomID} = useContext(GlobalContext)
   if(row.length == 0){
       return <div class="loader"></div>
   }
   
    return (
        <div className={`swipe-container ${inView ? 'in-view':'out-of-view'}`} ref={ref} >
                      {/* Swipeable views cannot take a component as it wraps elements for position before load */}
                      {/* Shoes keys error because wrappers are generated */}
                        <SwipeableViews key={()=>genRandomID()} enableMouseEvents className='swipe-view' threshold={2}>
                          {row.length > 0  ? (row.map((row,idx)=> {
                              return (
                                  <LazyLoadImage src={row.image} key={idx + genRandomID()} alt={row.title} className="title-image"/>
                          )
                          })) : (<div></div>)}
                        </SwipeableViews>
        </div>
    )
})

export default SwipeContainer
