import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import AddFriends from './components/addFriends';


import FriendsList from './components/FriendsList';



function App() {
  //build Login component /api/login ???
  //Console error returns Login is not defined


  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/friendslist" component={FriendsList} />
          <PrivateRoute exact path="/friends/add" component={AddFriends} />
          {/* Add other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
