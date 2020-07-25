import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './navigation/NavBar'
import Home from './Home'
import MyTasks from './MyTasks'

class App extends React.Component {

	render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/my-tasks" exact component={MyTasks} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
