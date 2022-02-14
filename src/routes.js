import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Dashboard from "./components/Dashboard";
import Students from './components/Students/Students';
import IssueBooks from './components/IssueBooks/IssueBook';
// import Books from './components/Books/Book';

const Routes = () => {
      return (
            <div>
                  <Router>
                        <Switch>
                              <Route exact path={"/"} component={Dashboard} />
                              <Route exact path={"/students"} component={Students} />
                              <Route exact path={"/books"} component={IssueBooks} />
                              {/* <Route exact path={"/cdd"} /> */}
                        </Switch>
                  </Router>
            </div>
      )
}

export default Routes
