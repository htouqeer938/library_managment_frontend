import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Dashboard from "./dashboard/Dashboard";
import AddStudent from './components/AddStudentfrm';
import Orders from './dashboard/Orders';

const Routes = () => {
      return (
            <div>
                  <Router>
                        <Switch>
                              <Route exact path={"/"} component={Dashboard} />
                              <Route exact path={"/addstudent"} component={AddStudent} />
                              <Route exact path={"/order"} component={Orders} />

                        </Switch>
                  </Router>
            </div>
      )
}

export default Routes
