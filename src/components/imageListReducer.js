


const imageListReducer = (state, action) => {
    


    switch(action.type){
        case 'setHeaderTitle' :{
            console.log(action.payload,'setHeaderTitle')
            return {...state,headerTitle:action.payload}
        }
        case 'setTvShowList': {
            console.log(action.payload,'setTvShowList')
            return {...state,tvShowsList:action.payload}
        }
        case 'appViewArray' :{
            return {...state,appViewArray:action.payload}
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

