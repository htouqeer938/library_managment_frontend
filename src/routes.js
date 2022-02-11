import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Dashboard from "./components/Dashboard";
import Students from './components/Students';
import Books from './components/Book';

const Routes = () => {
      return (
            <div>
                  <Router>
                        <Switch>
                              <Route exact path={"/"} component={Dashboard} />
                              <Route exact path={"/students"} component={Students} />
                              <Route exact path={"/books"} component={Books} />
                        </Switch>
                  </Router>
            </div>
      )
}

export default Routes
