
import './App.scss';
import SwipeSlider from './components/SwipeSlider';
import Header from './components/Header';
import { GlobalProvider } from './GlobalState';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import TestContext from './components/TestContext';


const App = () => {



  return (
 
      <Router>
      <div className="App">
        <Navbar/>
        <Route to='/' exact>
            <GlobalProvider>
              <header className="App-header">
                  <Header />
                  <TestContext />
                  <SwipeSlider/>
              </header>
            </GlobalProvider>
          </Route>
      
      </div>
      </Router>

  );
}

export default App;
