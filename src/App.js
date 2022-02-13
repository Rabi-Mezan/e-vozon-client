import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import AuthProvider from './AuthProvider/AuthProvider';
import Navbar from './Navbar/Navbar';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            {/* <Route path="/">
              <Home></Home>
            </Route> */}
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/about">
              <About></About>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
