import React, { Component, useState } from 'react';
import NavBar from '../../NavBar/NavBar';
import axios from 'axios';
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

    this.state = {
      charts: {
        msft: state,
        goog: state,
        aapl: state,
        ibm: state,
        fb: state
      }
    }

    this.parseIntradData = this.parseIntradData.bind(this);
  }

  // TODO: find a way to clean this mess...
  componentDidMount() {
    axios.get('http://localhost:4000/api/stocks/intrad/msft')
      .then(response => {
        if(response.data) {
          this.setState(prevState => ({
            charts: {
              msft: this.parseIntradData(response.data),
              goog: prevState.charts.goog,
              aapl: prevState.charts.aapl,
              ibm: prevState.charts.ibm,
              fb: prevState.charts.fb
            }
          }))
        }
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('http://localhost:4000/api/stocks/intrad/goog')
      .then(response => {
        if(response.data) {
          this.setState(prevState => ({
            charts: {
              msft: prevState.charts.msft,
              goog: this.parseIntradData(response.data),
              aapl: prevState.charts.aapl,
              ibm: prevState.charts.ibm,
              fb: prevState.charts.fb
            }
          }))
        }
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('http://localhost:4000/api/stocks/intrad/aapl')
      .then(response => {
        if(response.data) {
          this.setState(prevState => ({
            charts: {
              msft: prevState.charts.msft,
              goog: prevState.charts.goog,
              aapl: this.parseIntradData(response.data),
              ibm: prevState.charts.ibm,
              fb: prevState.charts.fb
            }
          }))
        }
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('http://localhost:4000/api/stocks/intrad/ibm')
      .then(response => {
        if(response.data) {
          this.setState(prevState => ({
            charts: {
              msft: prevState.charts.msft,
              goog: prevState.charts.goog,
              aapl: prevState.charts.aapl,
              ibm: this.parseIntradData(response.data),
              fb: prevState.charts.fb
            }
          }))
        }
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('http://localhost:4000/api/stocks/intrad/fb')
      .then(response => {
        if(response.data) {
          this.setState(prevState => ({
            charts: {
              msft: prevState.charts.msft,
              goog: prevState.charts.goog,
              aapl: prevState.charts.aapl,
              ibm: prevState.charts.ibm,
              fb: this.parseIntradData(response.data)
            }
          }))
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  // Takes 'Time Series' object from API and parses data object for graph
  parseIntradData(obj) {
    return ({
      labels: Object.keys(obj['Time Series (1min)'])
                .map(time=>time.slice(-8)).reverse(), // Get times
      datasets: [
        {
          label: 'Price (USD)',
          fill: false,
          lineTension: 0,
          backgroundColor: 'rgba(0,0,0,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: Object.values(obj['Time Series (1min)'])
                  .map(time=>time['1. open']).reverse() // Get cooresponding open values
        }
      ]
    })
  }

  renderLineChart(name, data, variant="dark") {
    return (
      <div>
        <Accordion defaultActiveKey="0">

          <Card.Title>
          <Accordion.Toggle as={Button} variant={variant} size="lg" eventKey="0" block>
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
          {this.renderLineChart("Microsoft", this.state.charts.msft, "success")}

          {this.renderLineChart("Google", this.state.charts.goog, "warning")}

          {this.renderLineChart("Apple", this.state.charts.aapl, "secondary")}

          {this.renderLineChart("IBM", this.state.charts.ibm)}

          {this.renderLineChart("Facebook", this.state.charts.fb, "primary")}
        </Card.Body>

        <Card.Header>Crypto</Card.Header>

        <Card.Body>
            <Accordion defaultActiveKey="0">
              <Card.Title>
              <Accordion.Toggle as={Button} variant="dark" size="lg" eventKey="0" block>
                BTC
              </Accordion.Toggle>
              </Card.Title>

              <Accordion.Collapse eventKey="0">
                <Card>
                  <Card.Body> Current Exchange Rate: <b>$0.00</b> *</Card.Body>
                  <Card.Body> Bid Price: <b>$0.00</b> *</Card.Body>
                  <Card.Body> Ask Price: <b>$0.00</b> *</Card.Body>
                  <Card.Footer>
                    *As of: <b>YYYY-MM-DD | HH:MM:SS UTC</b>
                  </Card.Footer>
                </Card>
              </Accordion.Collapse>
            </Accordion>
        </Card.Body>

      </div>
    );
  }
}
