import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollableTabsButtonAuto from './components/tab-component/WeekOneComponent';
import WeekTwo from './components/tab-component/WeekTwoComponent';
import { SignUpComponent } from './components/signup-component/SignUpComponent';
import { store } from './Store';
import LoginComponent from './components/login-component/LoginContainer'
import { HomeComponent } from './components/home-component/HomeComponent';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/WeekOne' component={ScrollableTabsButtonAuto} />
            <Route path='/WeekTwo' component={WeekTwo} />
            <Route path='/signup' component={SignUpComponent} />
            <Route path='/home' component={HomeComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/' component={LoginComponent} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;