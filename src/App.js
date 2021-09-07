
import './App.scss';
import SwipeSlider from './components/SwipeSlider';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route
  // Switch,
  // useLocation
} from "react-router-dom";
import useImageListManager from './components/useImageListManager';

const App = () => {
  const array = [1,2,3,4];

  const {appViewArray, lazyLoadArray} = useImageListManager()
  console.log(appViewArray, 'appViewArray')
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
    <Router>
    <div className="App">
      <Navbar/>
      <Route to='/' exact>
      <header className="App-header">
        <Header />

    {/* //TODO spread arrays to groups of 25 / pick random profile 
    //update state on scroll sentinel */}


          {appViewArray.map(item => <SwipeSlider list={item}/>)
          }
       </header>
        </Route>
     
    </div>
    </Router>
  );
}

export default App;
