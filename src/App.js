import React from 'react';
import Nav from './components/Navbar';
import People from './components/People'
import Test from './components/Test'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
      <Router>
          <Switch>
              {/*<Test />*/}
              <People/>
            {/*<Route  exact path= '/blah' component={People}  />*/}

          </Switch>
      </Router>

  );
}

export default App;
