import logo from './logo.svg';
import './App.scss';
import SwipeSlider from './components/SwipeSlider';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route
  // Switch,
  // useLocation
} from "react-router-dom";

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
    <Router>
    <div className="App">
      <Navbar/>
      <Route to='/' exact>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        
        {/* <ImageList /> */}
          {/* <div className="title-wrapper" > */}
          {array && (
            array.map(item => <SwipeSlider/>)
          )}
        {/* </div> */}
        {/* <SwipeSlider /> */}
       </header>
        </Route>
     
    </div>
    </Router>
  );
}

export default App;
