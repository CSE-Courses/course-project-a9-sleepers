import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';
import axios from 'axios';


export default class Stocks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar/>
        <h6> Hello Stocks </h6>
      </div>
    );
  }
}
