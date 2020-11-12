import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';
import axios from 'axios';
import { Card, CardDeck, Row, Container } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numArticles:  0,
      names:        [],
      titles:       [],
      descriptions: [],
      imgUrls:      [],
      articleUrls:  [],
      published:    [],
    }
  }

  componentDidMount() {
    axios.get('/api/news')
      .then(response => {
          this.setState({
            numArticles: response.data.totalResults,

            names: response.data.articles.map(name => name.source.name),
            titles: response.data.articles.map(title=>title.title),
            descriptions: response.data.articles.map(desc=>desc.description),
            imgUrls: response.data.articles.map(imgUrl=>imgUrl.urlToImage),
            articleUrls: response.data.articles.map(url=>url.url),
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  renderArticle() {
    return(
      <Card>
      <div class="card-horizontal">
        <Card.Img
        width={320}
        height={180}
        variant="right"
        src="https://image.cnbcfm.com/api/v1/image/106736363-1602180293828-gettyimages-1263061836-daycare0719.jpeg?v=1602180310"
        />
        <Card.Body>
          <a href="https://www.cnbc.com/2020/11/04/coronavirus-live-updates.html"><Card.Title>Coronavirus live updates: Oxford trial chief sees vaccine results this year; Palantir reportedly in talks to help U.K. contact tracing - CNBC</Card.Title></a>
          <span class="badge badge-secondary">CNBC</span>
          <Card.Text>
            The coronavirus has infected more than 47.5 million people globally as of Wednesday, killing at least 1.21 million so far.
          </Card.Text>
        </Card.Body>
      </div>

      <Card.Footer>
        <small className="text-muted">Published at: {"2020-11-04T08:20:22Z"}</small>
      </Card.Footer>
      </Card>
    );
  }

  renderRow() {
    return (
      <CardDeck>
        <Card>
        <div class="card-horizontal">
          <Card.Img
          width={320}
          height={180}
          variant="right"
          src="https://image.cnbcfm.com/api/v1/image/106736363-1602180293828-gettyimages-1263061836-daycare0719.jpeg?v=1602180310"
          />
          <Card.Body>
            <a href="https://www.cnbc.com/2020/11/04/coronavirus-live-updates.html"><Card.Title>Coronavirus live updates: Oxford trial chief sees vaccine results this year; Palantir reportedly in talks to help U.K. contact tracing - CNBC</Card.Title></a>
            <span class="badge badge-secondary">CNBC</span>
            <Card.Text>
              The coronavirus has infected more than 47.5 million people globally as of Wednesday, killing at least 1.21 million so far.
            </Card.Text>
          </Card.Body>
        </div>

        <Card.Footer>
          <small className="text-muted">Published at: {"2020-11-04T08:20:22Z"}</small>
        </Card.Footer>
        </Card>

        <Card>
        <div class="card-horizontal">
          <Card.Img
          width={320}
          height={180}
          variant="right"
          src="https://img.buzzfeed.com/buzzfeed-static/static/2020-11/4/13/enhanced/d6cc2a0c993f/original-3165-1604497789-4.jpg?crop=1250:655;0,12%26downsize=1250:*"
          />
          <Card.Body>
            <a href="https://www.cnbc.com/2020/11/04/coronavirus-live-updates.html">
              <Card.Title>
              Lana Del Rey Adamantly Shut Down A Fan Who Said She "Voted For Trump" In The Presidential Election - BuzzFeed
              </Card.Title>
            </a>
            <span class="badge badge-primary">BuzzFeed</span>

            <Card.Text>
              She also called out another fan for posting a "misleading" video of Lana's election livestream.
            </Card.Text>
          </Card.Body>
        </div>

        <Card.Footer>
          <small className="text-muted">Published at: {"2020-11-04T13:30:00Z"}</small>
        </Card.Footer>
        </Card>
      </CardDeck>
    )
  }

  render() {
    return (
      <div>
        <NavBar/>
          {this.renderArticle()}
      </div>
    );
  }
}
