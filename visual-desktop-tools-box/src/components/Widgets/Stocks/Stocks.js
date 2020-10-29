import React, { Component, useState } from 'react';
import NavBar from '../../NavBar/NavBar';
// import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Card, Button, Transition, Accordion } from 'react-bootstrap';

const state = {
  labels: ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
          '13:00', '13:30', '14:00', '14:30', '15:00', '15:30','16:00'],
  datasets: [
    {
      label: 'Price (USD)',
      fill: false,
      lineTension: 0,
      backgroundColor: 'rgba(0,0,0,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  ]
}

export default class Stocks extends Component {
  constructor(props) {
    super(props);
  }

  renderLineChart(name, data) {
    return (
      <div>
        <Accordion defaultActiveKey="0">

          <Card.Title>
          <Accordion.Toggle as={Button} variant="dark" size="lg" eventKey="0" block>
            {name}
          </Accordion.Toggle>
          </Card.Title>

          <Accordion.Collapse eventKey="0">
          <Card.Body>
          <div>
            <Line
              data={data}
              options={{
                title:{
                  display:true,
                  text:'Amount (USD)',
                  fontSize:18
                },
                legend:{
                  display:false,
                  position:'right'
                },
                responsive: true
              }}
            />
          </div>
          </Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </div>
    );
  }

  render() {
    return (
      <div>
        <NavBar/>

        <Card.Header>Stocks</Card.Header>

        <Card.Body>
          {this.renderLineChart("Microsoft", state)}

          {this.renderLineChart("Google", state)}

          {this.renderLineChart("Apple", state)}

          {this.renderLineChart("Facebook", state)}

          {this.renderLineChart("IBM", state)}
        </Card.Body>

        <Card.Header>Crypto</Card.Header>

        <Card.Body>
            <h3 class="card-title">BTC</h3>
        </Card.Body>

      </div>
    );
  }
}
