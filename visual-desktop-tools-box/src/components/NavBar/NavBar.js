import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './NavBar.css';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
import axios from 'axios'
import weather from 'weather-js'

weather.find({degreeType: 'F',search: ''}, function(err, result) {
  if(err) console.log(err);
 
  //console.log(JSON.stringify(result, null, 2));
  console.log(result[0].current.feelslike)
  const temp = result[0].current.feelslike
});

export default function NavBar (){

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    return(
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Navbar.Brand as={NavLink} to= '/' className={"px-3"}>
           <h4 className={"fontSize4"}>Home</h4>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title= "Tools" className={"px-3 h3"} id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to= '/ToDoList'> 
                   <h3 className={"fontSize3"}>To-Do List</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Calculator'>
                  < h3 className={"fontSize3"}>Calculator</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Countdown'>
                  < h3 className={"fontSize3"}>Countdown</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Stopwatch'>
                  < h3 className={"fontSize3"}>Stopwatch</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Notepad'>
                  <h3 className={"fontSize3"}>Notepad</h3>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <h3 className={"fontSize3"} onClick={handleShow}>Clock</h3>
                    <Modal show={show} centered size="lg" onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Time</Modal.Title>
                      </Modal.Header>
                    <h1>It is currently {new Date().toLocaleTimeString()}.</h1>
                  </Modal>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/Calendar'>
                  <h3 className={"fontSize3"}>Calendar</h3>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to= '/Scheduled'>
                  <h3 className={"fontSize3"}>Scheduled</h3>
                </NavDropdown.Item>
               </NavDropdown>   
              </Nav>
      
              <Nav>
              <Navbar.Text>
                "$temp"
              </Navbar.Text>
               <Nav.Link  as={NavLink} to= '/Login' className={"px-3"}>
                 <h4 className={"fontSize4"}>Login / Sign Up</h4>
               </Nav.Link>
              <Nav.Link as={NavLink} to= '/AboutUs' className={"px-3"} >
                 <h4 className={"fontSize4"}>About us</h4>
              </Nav.Link>
              </Nav>
           </Navbar.Collapse>
         </Navbar>


    );
  
}