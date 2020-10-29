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

          <h1 class="card-header">Stocks</h1>

          <div class="card-body">

            <h3 class="card-title">Microsoft</h3>

            <h3 class="card-title">Google</h3>

            <h3 class="card-title">Apple</h3>

            <h3 class="card-title">Facebook</h3>

            <h3 class="card-title">IBM</h3>

          </div>

          <h1 class="card-header">Crypto.</h1>
          <div class="card-body">
            <h3 class="card-title">BTC</h3>
          </div>

      </div>
    );
  }
}
