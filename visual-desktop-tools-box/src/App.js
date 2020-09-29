import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  BrowserRouter,
  Route,
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import Calculator from './components/Widgets/Calculator/Calculator';


class App extends Component {
  render(){
  return (
  <Fragment>
     <BrowserRouter>
       <Switch>

          <Route path = "/" exact component = {MainPage}/>






       </Switch>
     </BrowserRouter>
  </Fragment>
  );
}
}

export default App;
