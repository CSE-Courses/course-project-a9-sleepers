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


class App extends Component {

  state = {
    showMessage: false
  };
  onButtonClickHandler = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  render(){
  return (

    <div className="App">
    {this.state.showMessage && <p>Hi</p>}
    <button onClick={this.onButtonClickHandler}>Enter</button>
    </div>

  // <Fragment>
  //    <BrowserRouter>
  //      <Switch>

  //         <Route path = "/" exact component = {MainPage}/> 

  //         <Route path = "/Calculator" exact component = {Calculator}/> 
        
  //         <Route path = "/Timer" exact component = {Countdown}/>

  //         <Route path = "/Stopwatch" exact component = {Stopwatch}/>
         

  //      </Switch>
  //    </BrowserRouter>
  // </Fragment>
  );
}
}

export default App;
