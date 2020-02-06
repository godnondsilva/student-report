import React from 'react';

import { Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './App.css';

import Form from './components/form/form.component';
// import Navbar from './components/navbar/navbar.component';
import LoadReports from './components/load-reports/load-reports.component';
import SignIn from './components/signin/signin.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reports: [],
      isUserLoggedIn: true
    }
  }


  render() {
    let { isUserLoggedIn } = this.state;
    return (
      <div className="App">
        <Nav>
          <NavItem>
              <NavLink href="/">Home</NavLink>
          </NavItem>
          { isUserLoggedIn === true ?
            <NavItem>
                <NavLink href="/reports">Reports</NavLink>
            </NavItem>
            : <div></div>
          }
          <NavItem>
              <NavLink href="/user">User</NavLink>
          </NavItem>
          </Nav>
        <Switch>
          <Route exact path='/' component={() => <Form /> } />
            <Route path='/reports' component={() => <LoadReports reports={this.state.reports} /> } />
            <Route path='/user' component={() => <SignIn  /> }  />
          </Switch>
      </div>
    );
  }
}

export default App;
