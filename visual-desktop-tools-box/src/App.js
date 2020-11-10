import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Provider} from 'react-redux';
// import store from './redux/stores/store';
// import { loadUser } from './redux/actions/authAction';
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
import LoginPage from './components/LoginPage/LoginPage';
import Cat from './components/Widgets/Cat/Quote';
import NotePad from './components/Widgets/NotePad';
import Radio from './components/Widgets/Radio/Radio';
import CalendarWidget from './components/Widgets/Calendar-Custom/Calendar';
import Stocks from './components/Widgets/Stocks/Stocks';
import News from './components/Widgets/News/News';
import Currency from './components/Widgets/Currency/Currency'
import Tictac from './components/Widgets/Tic-Tac/Tictac'
import WPMTest from './components/Widgets/WPMTest/WPMTest'
import UnitConverter from './components/Widgets/UnitConverter/UnitConverter';
import Timezone from './components/Widgets/Timezone/Timezone';

class App extends Component {

    // componentDidMount(){
    //     store.dispatch(loadUser());
    // }

  render(){
  return (

  <Fragment>
    {/* <Provider store = {store}> */}
     <BrowserRouter>
       <Switch>

          <Route path = "/" exact component = {MainPage}/>

          <Route path = "/Calculator" exact component = {Calculator}/>

          <Route path = "/Countdown" exact component = {Countdown}/>

          <Route path = "/Stopwatch" exact component = {Stopwatch}/>

          <Route path = "/ToDoList" exact component = {ToDoList}/>

          <Route path = "/Login" exact component = {LoginPage}/>

          <Route path = "/Notepad" exact component = {NotePad}/>

          <Route path = "/Cat" exact component = {Cat}/>

          <Route path = "/Radio" exact component = {Radio}/>

          <Route path = "/Calendar" exact component = {CalendarWidget}/>

          <Route path = "/Stocks" exact component = {Stocks}/>

          <Route path = "/UnitConverter" exact component = {UnitConverter}/>

          <Route path = "/Timezone" exact component = {Timezone}/>

          <Route path ="/News" exact component = {News}/>

          <Route path = "/Currency" exact component = {Currency}/>

          <Route path = "/Tictac" exact component = {Tictac}/>

          <Route path = "/WPMTest" exact component = {WPMTest}/>

       </Switch>
     </BrowserRouter>
     {/* </Provider> */}
  </Fragment>
  );
}
}

export default App;
