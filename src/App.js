import React from 'react';
import {HashRouter , Redirect , route , Switch} from 'react-router-dom';
import './App.css';

import MainLayout from './Layout/MainLayout';
class App extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" name="Home" Component={MainLayout}/>
        </Switch>
      </HashRouter>
    )
  }
}



export default App;
