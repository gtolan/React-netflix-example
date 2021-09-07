
import { useState, useEffect } from 'react';
import '../styles/ImageList.scss';

const ImageList = () => {

    // const [items, setItems] = useState([]);
    const [tvShowsList, setTVShows] = useState([]);

    
    if(tvShowsList.length === 0){
        return <div className='loading'>Loading</div>
    }
    

    return (
        // <div className="image-list">
        <>

            {/* {tvShowsList.length > 0  ? (tvShowsList.map(show => {
            return (<div className='title-item' data-swipeable="true">
                    <img src={show.image} alt={show.title} className="title-image" />
            </div>)
            })) : (<div></div>)} */}
        {/* </div> */}
        </>
    )
}

export default ImageList;
