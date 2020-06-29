import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Car from './components/Car';
import Home from './components/Home';
import Login from './components/Login';
import Search from './components/Search';
import AddCar from './components/AddCar';
import Profile from './components/Profile';
import EditPrice from './components/EditPrice';
import EditPassword from './components/EditPassword';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/add' component={AddCar} />
        <Route path='/cars/:id' component={Car} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/edit-price' component={EditPrice} />
        <Route exact path='/edit-password' component={EditPassword} />
      </Router>
    </Provider>
  );
}

export default App;
