import '../styles/ImageList.scss';
import { GlobalContext } from '../GlobalState';
import { useContext } from 'react';
import SwipeContainer from './SwipeContainer';
import { useInView } from 'react-intersection-observer';

  
    
const SwipeSlider = () => {

  // const {addToLoadScrollArray, loadOnScrollArray, appViewArray} = useImageListManager()

    const {addToLoadScrollArray, loadOnScrollArray, appViewArray} = useContext(GlobalContext);
    


    const [infiniteScroll, inView] = useInView({
        threshold: 0.3,
    })

    const rowTitles = ['My List', 'Continue Watching', 'Popular on Netflix', 'Trending Now'];
    const loadedTowTitles = ['Watch it Again','Recently Added', 'Comedies','Thrillers'];
    if(inView){
      //Todo add debounce or delay
        addToLoadScrollArray()
    }

    console.log('SwipeSlider render')
    if(appViewArray.length === 0){
        return <div className='loading'>Loading</div>
    } 

    return (
      <div>
        <div>
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
//,areEqual)



//key={idx + genRandomID()}
export default SwipeSlider;


