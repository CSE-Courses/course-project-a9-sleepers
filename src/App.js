import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  BrowserRouter,
  Route,
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import Calculator from './components/Calculator/Calculator';


class App extends Component {
  render(){
  return (
  <Fragment>
     <BrowserRouter>
       <Switch>

          <Route path = "/" exact component = {MainPage}/> 

          <Route path = "/Calculator" exact component = {Calculator}/> 
        
      
         

       </Switch>
     </BrowserRouter>
  </Fragment>
  );
}
}

export default App;
