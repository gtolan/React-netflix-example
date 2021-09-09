import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';


const TestContext = () => {

    const {loadOnScrollArray} = useContext(GlobalContext)
    console.log('text content render')
    return (
        <div>
            {loadOnScrollArray.length > 0 ? (
                <div>NOT LOADING {loadOnScrollArray}</div>
            ) : (<div>LOADING</div>)}
        </div>
    )
}

export default TestContext
