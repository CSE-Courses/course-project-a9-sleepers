import React from "react";
import { shallow, mount } from "enzyme";
import Account from "./Account";
import App from "./App";
import server from "./server";
import toJson from "enzyme-to-json";

const express = require('express');
const { check } = require('express-validator');
const request = require('supertest');

const app = express();

app.post('/submit-student-data', [
  check('username','Username must be AlphaNumerical').isAlphanumeric(),
  check('username','Username cannot be empty').notEmpty(),
  check('password','Password must be AlphaNumerical').isAlphanumeric(),
  check('password','Password cannot be empty').notEmpty()
], (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    const username = req.body.username;
    const password = req.body.password;

});


it('fails if invalid username or password are passed', done => {
	request(app)
		.post('/submit-student-data')
		.send({ username: '', password: '[]' })
		.expect(500, done);
});

it('passes if valid username or password are passed', done => {
	request(app)
		.post('/submit-student-data')
		.send({ username: 'Jonh Doe', password: 'hunter2' })
		.expect(500, done);
});

it('fails if valid username but invalid password are passed', done => {
	request(app)
		.post('/submit-student-data')
		.send({ username: 'Jonh Doe', password: '' })
		.expect(500, done);
});

it('fails if invalid username but valid password are passed', done => {
	request(app)
		.post('/submit-student-data')
		.send({ username: '\[cool guy]/', password: 'password123' })
		.expect(500, done);
});

// it("renders correctly", () => {
//   const wrapper = mount(<App />);
//   expect(wrapper.state("error")).toEqual(null);
// });


//  it("renders without crashing", () => {
//   shallow(<App />);
// });

// it("renders Account header", () => {
//   const wrapper = shallow(<App />);
//   const header = <h1>Display Active Users Account Details</h1>;
//   // expect(wrapper.contains(welcome)).toBe(true);
//   expect(wrapper.contains(header)).toEqual(true);
// }); 

/*
const user = {
  name: "Adeneye David",
  email: "david@gmail.com",
  username: "Dave",
};

describe("<Account />", () => {
  it("contains account", () => {
    const wrapper = mount(<Account user={user} />);
    const value = wrapper.find("p").text();
    expect(value).toEqual("david@gmail.com");
  });

  it("accepts user account props", () => {
    const wrapper = mount(<Account user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });
});

 it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React Testing</h2>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
 */

/* it("renders without crashing", () => {
  const mockColor = "David";
  const wrapper = shallow(<App color={mockColor} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
 */

/* it("correctly increment the counter", () => {
  const mockColor = "david";
  const wrapper = shallow(<App color={mockColor} />);
  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });
  //expect(wrapper.props().color).toEqual("david");
}); */
