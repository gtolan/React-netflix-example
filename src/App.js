
import './App.scss';
import SwipeSlider from './components/SwipeSlider';
import Header from './components/Header';
// import { useContext } from 'react';
// import { GlobalContext } from './GlobalState';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


const App = () => {

  // const {appViewArray} = useContext(GlobalContext);
  // const {loadOnScrollArray} = useContext(GlobalContext);

  return (
 
      <Router>
      <div className="App">
        <Navbar/>
        <Route to='/' exact>
        
        <header className="App-header">
          <Header />

      {/* //TODO spread arrays to groups of 25 / pick random profile 
      //update state on scroll sentinel */}
            <SwipeSlider/>

            {/* {appViewArray.map((item,idx) => <SwipeSlider idx={idx} list={item}/>)
            } */}
        </header>
          </Route>
      
      </div>
      </Router>

  );
}

export default App;
