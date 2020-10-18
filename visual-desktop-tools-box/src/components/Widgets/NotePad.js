import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
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

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNewUsername = this.onChangeNewUsername.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitnewUser = this.onSubmitnewUser.bind(this);
    this.onSubmitNote = this.onSubmitNote.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:4000/users')
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

    axios.post('http://localhost:4000/users/add', user)
      .then(res => console.log(res.data));

    window.location = '/Notepad';
  }

  onSubmitNote(e) {
    e.preventDefault();
    if(this.state.username != '[None]') {
      const user = {
        text: this.state.text
      }
      const idIdx = this.state.users.indexOf(this.state.username);
      const id = this.state.ids[idIdx];

      axios.post('http://localhost:4000/users/update/' + id, user)
        .then(res => console.log(res.data));
    }

    window.location = '/Notepad';
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


          <form onSubmit={this.onSubmitNote}>
            <div className="form-group">
              <label>Text:</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextArea1"
                rows="10"
                value={this.state.text}
                onChange={this.onChangeText}
                placeholder="Enter something.">
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
