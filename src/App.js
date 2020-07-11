import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import Home from './Home';

const App = () => <BrowserRouter>
<Switch>
  <Route path='/' exact component={Home}></Route>
  <Route component={() => <div>404</div>}></Route>
</Switch>

</BrowserRouter>

export default App;
