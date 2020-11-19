import React, { Component, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { Button, ToggleButtonGroup, ToggleButton, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

export default class NotePad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      text: '',
      newUser: '',
      users: [],
      texts: [],
      ids:[]
    }

    this.colors = [
      {name: 'white',       value: '#FFFFFF'},
      {name: 'mint',        value: '#98ff98'},
      {name: 'watermelon',  value: '#fc6c85'},
      {name: 'banana',      value: '#ffe65f'}
    ];

    this.color = this.colors[0].value;

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNewUsername = this.onChangeNewUsername.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitnewUser = this.onSubmitnewUser.bind(this);
    this.onSubmitNote = this.onSubmitNote.bind(this);
  }

  componentDidMount() {
    axios.get('/users')
      .then(response => {
        if(response.data.length > 0){
          this.setState({
            users: response.data.map(user=>user.username),
            texts: response.data.map(text=>text.text),
            ids: response.data.map(id=>id._id),
            username: response.data[0].username,
            text: response.data[0].text
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // When user changes via. user drop-down, the notepad text also changes.
  onChangeUsername(e) {
    const textIdx = this.state.users.indexOf(e.target.value);
    this.setState({
      username: e.target.value,
      text: this.state.texts[textIdx]
    });
  }

  // When a new user changes its value via the input menu
  onChangeNewUsername(e) {
    this.setState({
      newUser: e.target.value
    });
  }

  onChangeText(e) {
    this.setState({
      text: e.target.value
    });
  }

  onSubmitnewUser(e){
    e.preventDefault();

    const user = { username: this.state.newUser }

    axios.post('/users/add', user)
      .then(res => console.log(res.data));

    window.location = '/Notepad';
  }

  onSubmitNote(e) {
    e.preventDefault();
    if(this.state.username !== '[None]') {
      const user = {
        text: this.state.text
      }
      const idIdx = this.state.users.indexOf(this.state.username);
      const id = this.state.ids[idIdx];

      axios.post('/users/update/' + id, user)
        .then(res => console.log(res.data));
    }

    window.location = '/Notepad';
  }

  renderColorOptions() {
    const [value, setValue] = useState([1, 3]);

    /*
     * The second argument that will be passed to
     * `handleChange` from `ToggleButtonGroup`
     * is the SyntheticEvent object, but we are
     * not using it in this example so we will omit it.
     */
    const handleChange = (val) => setValue(val);

    return (
      <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton value={1}>Option 1</ToggleButton>
        <ToggleButton value={2}>Option 2</ToggleButton>
        <ToggleButton value={3}>Option 3</ToggleButton>
      </ToggleButtonGroup>
    );
  }

  render() {
    return (
      <div>
        <NavBar/>

        <div class="card card-body">
          <form onSubmit={this.onSubmitnewUser}>
            <div class="form-group">
              <label>New User?</label>
              <input type="text" className="form-control" value={this.state.newUser} onChange={this.onChangeNewUsername} placeholder="Enter a username"></input>
            </div>
            <button type="submit" class="btn btn-secondary">Create User</button>
          </form>
        </div>

        <div class="card card-body">
          <h3>Notepad</h3>
          <div className="form-group">
            <label>User: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
            </select>
          </div>

          {this.renderColorOptions()}

          <form onSubmit={this.onSubmitNote}>
            <div className="form-group">
              <label>Text:</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextArea1"
                rows="10"
                value={this.state.text}
                onChange={this.onChangeText}
                placeholder="Enter something."
                style={{
                  backgroundColor: this.color
                }}>
              </textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Save" className="btn btn-success" />
            </div>
          </form>
        </div>

      </div>
    );
  }
}
