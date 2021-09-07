import logo from './logo.svg';
import './App.scss';
import SwipeSlider from './components/SwipeSlider';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     <SwipeSlider />
      </header>
    </div>
  );
}

export default App;
