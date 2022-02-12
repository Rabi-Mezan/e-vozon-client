import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
