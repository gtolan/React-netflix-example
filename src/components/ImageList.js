import api from '../mock-apis/title';
import tvShows from '../mock-apis/tv';
import { useState, useEffect } from 'react';


const ImageList = () => {

    const [items, setItems] = useState([]);
    const [tvShowsList, setTVShows] = useState([]);
    
    useEffect(() => {
        setItems(api)
        setTVShows(tvShows)
    }, [])


    if(items.length == 0){
        return <div className='loading'>Loading</div>
    }
    

    return (
        <div>
            {items.length > 0 && (items.map(item => {
            return (<div className="title-image">
                    <img src={item.image} alt={item.text} />
            </div>
            )
            }))}
            {tvShowsList.length > 0 && (tvShowsList.map(show => {
            return (<div className="title-image">
                    <img src={show.image} alt={show.text} />
            </div>)
            }))}
        </div>
    )
}

export default ImageList
