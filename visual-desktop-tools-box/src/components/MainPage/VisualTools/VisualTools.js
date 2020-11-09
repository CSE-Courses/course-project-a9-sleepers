import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import {Container,Row,Col,Badge} from 'react-bootstrap';
import SubCheckList from '../images/Sub-Checklist.png';
import SubCalculator from '../images/Sub-Calculator.png';
import SubNotepad from '../images/Sub-Notepad.png';
import SubClock from '../images/Sub-Clock.png';
import SubCalendar from '../images/Sub-Calendar.png';
import SubScheduled from '../images/Sub-Scheduled.png';
import SubTimer from '../images/Sub-Timer.png';
import SubStopwatch from '../images/Sub-Stopwatch.png';
import SubCurrency from '../images/Sub-Currency.png';
import tictac from '../images/tictac.png';
import   './VisualTools.css';




export default function VisualTools (){

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
    <div>
        <h1 class="text-center fontSize1" ><Badge variant="secondary">ToolBox</Badge></h1>
          <hr style={{borderBottom:"3px solid", marginTop:"3em"}}/>
            <Container >
                <Row>
                  <Col sm={5} md = {5}>
                     <Link to ="/ToDoList">
                       <Image src ={SubCheckList} 
                         className={"img-fluid SubCheckList"} 
                         alt="CheckListIcon"/>
                     </Link>
                         <h3 class="text-center fontSize3" >To-Do List</h3>
                         <hr className={"HonzontalLine"}/>  
                   </Col> 

                   <Col sm={2}  md = {2}>
                     <div className={"VeriticalLine"}/>
                   </Col>
                   <Col sm={5}  md = {5 }>
                     <Link to ="/Calculator">
                       <Image src ={SubCalculator} className={" img-fluid SubCalculator"} 
                         alt="CheckListIcon"  /> 
                     </Link>
                        <h3 class="text-center fontSize3">Calculator</h3>
                        <hr className={"HonzontalLine"}/>
                   </Col>
              </Row>
             
               <Row>
                  <Col sm={5} md = {5}>
                    <Link to ="/Notepad">
                      <Image src ={SubNotepad} className={" img-fluid SubNotepad"}  />
                    </Link>
                    <h3 class="text-center fontSize3">Notepad</h3>
                    <hr className={"HonzontalLine"}/>
                  </Col>

                  <Col sm={2} md = {2}>
                    <div className={"VeriticalLine"}/>
                   </Col>

                   <Col sm={5} md = {5}>
                   <div>
                       <Image src ={SubClock} className={" img-fluid SubClock"} onClick={handleShow} />
                       <Modal show={show} centered size="lg" onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Time</Modal.Title>
                          </Modal.Header>
                          <h1>It is currently {new Date().toLocaleTimeString()}.</h1>
                        </Modal>
                     </div>
                     <h3 class="text-center fontSize3">Clock</h3>
                     <hr className={"HonzontalLine"}/>
                    </Col>
              </Row>
    
    
              <Row>
                 <Col sm={5} md = {5}>
                   <Link to ="/Calendar">
                     <Image src ={SubCalendar} className={" img-fluid SubCalendar"}  />
                   </Link>
                   <h3 class="text-center fontSize3">Calendar</h3>
                   <hr className={"HonzontalLine"}/>
                   </Col>

                   <Col sm={2} md = {2}>
                     <div className={"VeriticalLine"}/>
                   </Col>

                   <Col sm={5} md = {5}>
                     <Link to ="/Scheduled">
                       <Image src ={SubScheduled} className={" img-fluid SubScheduled"}  />
                     </Link>
                     <h3 class="text-center fontSize3"> Scheduled</h3>
                     <hr className={"HonzontalLine"}/>
                  </Col>
              </Row>

              <Row>
                  <Col sm={5} md = {5}>
                     <Link to ="/Countdown">
                       <Image src ={SubTimer} className={" img-fluid SubTimer"} />
                     </Link>
                         <h3 class="text-center fontSize3" >Countdown</h3>
                         <hr className={"HonzontalLine"}/>  
                   </Col> 

                   <Col sm={2}  md = {2}>
                     <div className={"VeriticalLine"}/>
                   </Col>
                   <Col sm={5}  md = {5 }>
                     <Link to ="/Stopwatch">
                       <Image src ={SubStopwatch} className={" img-fluid SubStopwatch"} 
                         alt="CheckListIcon"  /> 
                     </Link>
                        <h3 class="text-center fontSize3">Stopwatch</h3>
                        <hr className={"HonzontalLine"}/>
                   </Col>
              </Row>




              {/* spaces will be replace by footer in the future */}
                <br/>
                  <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
          </Container>
      </div>
  );
}