


const imageListReducer = (state, action) => {
    


    switch(action.type){
        case 'setHeaderTitle' :{
            return state.headerTitle.hasOwnProperty('image') == false ? 
            {...state,headerTitle:action.payload} :
            {...state}
        }
        case 'setTvShowList': {
            return state.tvShowsList.length == 0 ? 
            {...state,tvShowsList:action.payload} :
            {...state}
        }
        case 'appViewArray' :{
            return {...state,appViewArray:action.payload}
        }
        case 'addToLoadRows':{
            return {...state,loadOnScrollArray: action.payload}
        }
        default: {
            return state;
        }

    }
}

export default imageListReducer;

    //fetchImages - live

    // var requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
     
    // fetch('https://imdb-api.com/en/API/Title/k_04zo6l68/tt1832382', requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    // return () => {
     
    // }

