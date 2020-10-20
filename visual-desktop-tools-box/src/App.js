import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  BrowserRouter,
  Route,
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import Calculator from './components/Widgets/Calculator/Calculator';
import Countdown from './components/Widgets/Countdown';
import Stopwatch from './components/Widgets/Stopwatch';
import ToDoList from './components/Widgets/ToDoList/ToDoList';


class App extends Component {
  render(){
  return (
  <Fragment>
     <BrowserRouter>
       <Switch>

          <Route path = "/" exact component = {MainPage}/> 

          <Route path = "/Calculator" exact component = {Calculator}/> 
        
          <Route path = "/Countdown" exact component = {Countdown}/>

          <Route path = "/Stopwatch" exact component = {Stopwatch}/>

          <Route path = "/ToDoList" exact component = {ToDoList}/>
         

       </Switch>
     </BrowserRouter>
  </Fragment>
  );
}
}

export default App;
