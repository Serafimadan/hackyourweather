import './App.css';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import CityInfoList from './components/CityInfoList';
import CityForcast from './components/CityForcast';

// source https://www.codota.com/code/javascript/functions/react-router/match/params
// https://recharts.org/en-US/examples/SimpleAreaChart

function App() {

  return (
    <Router>
      <div className='App'>
        <Switch>
        {/* routes take parameters cityId*/}
          <Route path='/:cityId' component={ CityForcast }>
          </Route>
          <Route path='/'>
            <CityInfoList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
