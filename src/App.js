
import './App.scss';
import SwipeSlider from './components/SwipeSlider';
import Header from './components/Header';
import { GlobalProvider } from './GlobalState';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";



const App = () => {


  return (
 
      <Router>
      <div className="App">
        <Navbar/>
        <Route to='/' exact>
            <GlobalProvider>
              <header className="App-header">
                  <Header />
                  <SwipeSlider/>
              </header>
            </GlobalProvider>
          </Route>
      
      </div>
      </Router>

  );
}

export default App;
