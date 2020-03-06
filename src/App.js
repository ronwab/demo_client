import React from 'react';
import Nav from './components/Navbar';
import People from './components/People'
import Frequency from './components/Frequency'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
      <Router>
          <Nav/>
          <Switch>
            <Route  exact path= '/' component={People}  />
            <Route  exact path= '/frequency' component={Frequency}  />

          </Switch>
      </Router>
  );
}

export default App;