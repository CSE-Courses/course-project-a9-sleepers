import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select';
import './NavBar.css';


const componentOptions = [
  { value: '/', label: 'Home' },
  { value: '/ToDoList', label: 'To-Do List' },
  { value: '/Calculator', label: 'Calculator' },
  { value: '/Notepad', label: 'Notepad' },
  { value: '/Calendar', label: 'Calendar' },
  { value: '/Countdown', label: 'Countdown' },
  { value: '/Stopwatch', label: 'Stopwatch' },
  { value: '/Stocks', label: 'Stocks' },
  { value: '/News', label: 'News' },
];

export default function NavBar (){

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedCompOption, setSelectedCompOption] = useState('');

  const selectStyles = {
    menuPortal: base => ({ ...base, zIndex: 9999 }),
    menu: provided => ({ ...provided, zIndex: "9999 !important" })
  };

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
                <NavDropdown.Item as={NavLink} to= '/Stocks'>
                  <h3 className={"fontSize3"}>Stocks</h3>
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to= '/News'>
                  <h3 className={"fontSize3"}>News</h3>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to= '/Scheduled'>
                  <h3 className={"fontSize3"}>Scheduled</h3>
                </NavDropdown.Item>
               </NavDropdown>
               <div className="searchbar">
                
              <Select
                styles={selectStyles}
                menuPlacement="auto"
                menuPosition="absolute"
                defaultValue={selectedCompOption}
                onChange={setSelectedCompOption}
                options={componentOptions}/>
              </div>

              <Link className="search" to={selectedCompOption.value}>Search</Link>
              </Nav>
              

              <Nav>
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
