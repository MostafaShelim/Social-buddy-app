import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import UserDetails from './components/UserDetails/UserDetails';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <MainPage></MainPage>
          </Route>
          <Route path='/user/:userId'>
            <UserDetails></UserDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
