import './App.css';
import Header from './component/header';
import SideCityView from './component/sideCityView';
import Today from './component/today';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SideCityView/>
        <div>
          <Header/>
          <Today/>
        </div>
      </div>
    </div>
  );
}

export default App;
