import logo from './logo.svg';
import './App.scss';
import SwipeSlider from './components/SwipeSlider';
import { useEffect } from 'react';
// import ImageList from './components/ImageList';
// import SwipeableViews from 'react-swipeable-views';
// import tvShows from './mock-apis/tv';
// import useImageListManager from './components/useImageListManager'
// import './styles/ImageList.scss';
// import ImageList from './ImageList';

const App = () => {
  const array = [1,2,3,4]

  useEffect(() => {
    // var requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
     
    // fetch('https://imdb-api.com/en/API/Title/k_04zo6l68/tt1832382', requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    // return () => {
     
    //}
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <ImageList /> */}
        {array && (
          array.map(item => <SwipeSlider/>)
        )}
        {/* <SwipeSlider /> */}
      
        
      </header>
    </div>
  );
}

export default App;
