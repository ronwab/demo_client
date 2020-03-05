import React from 'react';
import Nav from './components/Navbar';
import People from './components/People'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
      <Router>
          <Switch>
              <Nav />
            <Route  exact path= '/blah' component={People}  />

          </Switch>
      </Router>

  );
}

export default App;
