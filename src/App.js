import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Admin from './Admin';
import User from './User';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/user" component={User} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

