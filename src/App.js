import './App.css';
import Header from './component/header';
import SideCityView from './component/sideCityView';
import Today from './component/today';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <SideCityView/>
          <div>
            <Header/>
            <Today/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
