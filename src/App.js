import logo from './logo.svg';
import './App.scss';
import SwipeSlider from './components/SwipeSlider';
import { useEffect } from 'react';
import ImageList from './components/ImageList';


const App = () => {


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
     <SwipeSlider />
     <ImageList />
      </header>
    </div>
  );
}

export default App;
