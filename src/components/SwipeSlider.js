import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import tvShows from '../mock-apis/tv';
import useImageListManager from './useImageListManager'
import '../styles/ImageList.scss';
import ImageList from './ImageList';
import { useInView } from 'react-intersection-observer'

    


const SwipeSlider = () => {
    

   const {tvShowsList} = useImageListManager()
   const [ref, inView] = useInView({
    threshold: 0.6,
  })

    if(tvShowsList.length === 0){
        return <div className='loading'>Loading</div>
    }

    return (
      <div className="swipe-container" ref={ref}>
        {inView.toString()}
          <SwipeableViews enableMouseEvents className='swipe-view' threshold='2'>

                {tvShowsList.length > 0  ? (tvShowsList.map(show => {
                  return (
                          <img src={show.image} alt={show.title} className="title-image"/>
                  )
                  })) 
                  : (<div></div>)}

          </SwipeableViews>
      </div>
    );
}

export default SwipeSlider;



      // <SwipeableViews
      //   enableMouseEvents
      //   action={actions => setSwipeableActions(actions)}
      //   resistance
      //   animateHeight
      //   index={tabIndex}
      //   onChangeIndex={index => handleChange(index)}
      // >

        {/* <ImageList /> */}
        {/* {items.map((item, index) => (
          <div className={classes[`slide${index}`]}>
            <img className={classes.image} src={item} />
          </div>
        ))} */}
      // </SwipeableViews>
