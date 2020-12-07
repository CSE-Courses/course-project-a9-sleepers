import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button'
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
import SubStocks from '../images/Sub-Stocks.png';
import SubNews from '../images/Sub-News.png';
import SubWPM from '../images/Sub-WPM.png';
import SubCurrency from '../images/Sub-Currency.png';
import tictac from '../images/tictac.png';
import SubUnitConverter from '../images/Sub-UnitConverter.png';
import SubTimezone from '../images/Sub-Timezone.png';
import DrawingBoard from '../images/drawingboard.png';
import   './VisualTools.css';


import storage from 'local-storage-fallback'
import { Disable } from 'react-disable';
import './VisualTools.css';

function loadSavedList() {
  const savedList = storage.getItem("disableList")
  return savedList ? JSON.parse(savedList) : { disableList: false }
}
function loadSavedCalc() {
  const savedCalc = storage.getItem('disableCalc')
  return savedCalc ? JSON.parse(savedCalc) : { disableCalc: false }
}
function loadSavedPad() {
  const savedPad = storage.getItem('disablePad')
  return savedPad ? JSON.parse(savedPad) : { disablePad: false }
}
function loadSavedClock() {
  const savedClock = storage.getItem('disableClock')
  return savedClock ? JSON.parse(savedClock) : { disableClock: false }
}
function loadSavedCalender() {
  const savedCalender = storage.getItem('disableCalender')
  return savedCalender ? JSON.parse(savedCalender) : { disableCalender: false }
}
function loadSavedSchedule() {
  const savedSchedule = storage.getItem('disableSchedule')
  return savedSchedule ? JSON.parse(savedSchedule) : { disableSchedule: false }
}
function loadSavedCount() {
  const savedCount = storage.getItem('disableCount')
  return savedCount ? JSON.parse(savedCount) : { disableCount: false }
}
function loadSavedWatch() {
  const savedWatch = storage.getItem('disableWatch')
  return savedWatch ? JSON.parse(savedWatch) : { disableWatch: false }
}

function loadSavedStocks() {
  const savedStocks = storage.getItem('disableStocks')
  return savedStocks ? JSON.parse(savedStocks) : { disableStocks: false }
}

function loadSavedNews() {
  const savedNews = storage.getItem('disableNews')
  return savedNews ? JSON.parse(savedNews) : { disableNews: false }
}

function loadSavedUnitConverter() {
  const savedUnitConverter = storage.getItem('disableUnitConverter')
  return savedUnitConverter ? JSON.parse(savedUnitConverter) : { disableUnitConverter: false }
}

function loadSavedTimezone() {
  const savedTimezone = storage.getItem('disableTimezone')
  return savedTimezone ? JSON.parse(savedTimezone) : { disableTimezone: false }
}

function loadSavedWPMTest() {
  const savedWPMTest = storage.getItem('disableWPMTest')
  return savedWPMTest ? JSON.parse(savedWPMTest) : { disableWPMTest: false }
}

function loadSavedDrawingBoard() {
  const savedDrawingBoard = storage.getItem('disableDrawingBoard')
  return savedDrawingBoard ? JSON.parse(savedDrawingBoard) : { disableDrawingBoard: false }
}

export default function VisualTools (){


  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [disableList, setDisableList] = React.useState(loadSavedList);
  const toggleList = () => setDisableList(d => !d);
  useEffect(
    () => {
      storage.setItem("disableList", JSON.stringify(disableList));
    },
    [disableList]
  );

  const [disableCalc, setDisableCalc] = React.useState(loadSavedCalc);
  const toggleCalc = () => setDisableCalc(d => !d);
  useEffect(
    () => {
      storage.setItem("disableCalc", JSON.stringify(disableCalc));
    },
    [disableCalc]
  );

  const [disablePad, setDisablePad] = React.useState(loadSavedPad);
  const togglePad = () => setDisablePad(d => !d);
  useEffect(
    () => {
      storage.setItem("disablePad", JSON.stringify(disablePad));
    },
    [disablePad]
  );

  const [disableClock, setDisableClock] = React.useState(loadSavedClock);
  const toggleClock = () => setDisableClock(d => !d);
  useEffect(
    () => {
      storage.setItem("disableClock", JSON.stringify(disableClock));
    },
    [disableClock]
  );

  const [disableCalender, setDisableCalender] = React.useState(loadSavedCalender);
  const toggleCalender = () => setDisableCalender(d => !d);
  useEffect(
    () => {
      storage.setItem("disableCalender", JSON.stringify(disableCalender));
    },
    [disableCalender]
  );

  const [disableSchedule, setDisableSchedule] = React.useState(loadSavedSchedule);
  const toggleSchedule = () => setDisableSchedule(d => !d);
  useEffect(
    () => {
      storage.setItem("disableSchedule", JSON.stringify(disableSchedule));
    },
    [disableSchedule]
  );

  const [disableCount, setDisableCount] = React.useState(loadSavedCount);
  const toggleCount = () => setDisableCount(d => !d);
  useEffect(
    () => {
      storage.setItem("disableCount", JSON.stringify(disableCount));
    },
    [disableCount]
  );

  const [disableWatch, setDisableWatch] = React.useState(loadSavedWatch);
  const toggleWatch = () => setDisableWatch(d => !d);
  useEffect(
    () => {
      storage.setItem("disableWatch", JSON.stringify(disableWatch));
    },
    [disableWatch]
  );

  const [disableStocks, setDisableStocks] = React.useState(loadSavedStocks);
  const toggleStocks = () => setDisableStocks(d => !d);
  useEffect(
    () => {
      storage.setItem("disableStocks", JSON.stringify(disableStocks));
    },
    [disableStocks]
  );

  const [disableNews, setDisableNews] = React.useState(loadSavedNews);
  const toggleNews = () => setDisableNews(d => !d);
  useEffect(
    () => {
      storage.setItem("disableNews", JSON.stringify(disableNews));
    },
    [disableNews]
  );

  const [disableUnitConverter, setDisableUnitConverter] = React.useState(loadSavedUnitConverter);
  const toggleUnitConverter = () => setDisableUnitConverter(d => !d);
  useEffect(
    () => {
      storage.setItem("disableUnitConverter", JSON.stringify(disableUnitConverter));
    },
    [disableUnitConverter]
  );

  const [disableTimezone, setDisableTimezone] = React.useState(loadSavedTimezone);
  const toggleTimezone = () => setDisableTimezone(d => !d);
  useEffect(
    () => {
      storage.setItem("disableTimezone", JSON.stringify(disableTimezone));
    },
    [disableTimezone]
  );

  const [disableWPMTest, setDisableWPMTest] = React.useState(loadSavedWPMTest);
  const toggleWPMTest = () => setDisableWPMTest(d => !d);
  useEffect(
    () => {
      storage.setItem("disableWPMTest", JSON.stringify(disableWPMTest));
    },
    [disableWPMTest]
  );

  const [disableDrawingBoard, setDisableDrawingBoard] = React.useState(loadSavedDrawingBoard);
  const toggleDrawingBoard = () => setDisableDrawingBoard(d => !d);
  useEffect(
    () => {
        storage.setItem("disableDrawingBoard", JSON.stringify(disableDrawingBoard));
    },
    [disableDrawingBoard]
  );

  return(
    <div>
        <h1 class="text-center fontSize1" ><Badge variant="secondary">ToolBox</Badge></h1>
        <div>
        <Button variant="secondary" className="settingsButton" onClick={handleShow1}>Settings</Button>
                  <Modal show={show1} centered size="lg" onHide={handleClose1}>
                      <Modal.Header closeButton>
                        <Modal.Title>Settings</Modal.Title>
                      </Modal.Header>
                      <button onClick={toggleList}>Toggle To-Do List</button>
                      <button onClick={toggleCalc}>Toggle Calculator</button>
                      <button onClick={togglePad}>Toggle Notepad</button>
                      <button onClick={toggleClock}>Toggle Clock</button>
                      <button onClick={toggleCalender}>Toggle Calender</button>
                      <button onClick={toggleSchedule}>Toggle Schedule</button>
                      <button onClick={toggleCount}>Toggle Countdown</button>
                      <button onClick={toggleWatch}>Toggle Stopwatch</button>
                      <button onClick={toggleStocks}>Toggle Stocks</button>
                      <button onClick={toggleNews}>Toggle News</button>
                      <button onClick={toggleUnitConverter}>Toggle Unit Converter</button>
                      <button onClick={toggleTimezone}>Toggle Timezone</button>
                      <button onClick={toggleWPMTest}>Toggle WPM Test</button>
                      <button onClick={toggleDrawingBoard}>Toggle DrawingBoard</button>
                  </Modal>
                  </div>
          <hr style={{borderBottom:"3px solid", marginTop:"3em"}}/>
            <Container >
                <Row>

                <Col sm={5} md = {5}>
                  <Disable disabled={disableStocks}>
                     <Link to ="/Stocks">
                       <Image src ={SubStocks} className={" img-fluid SubStocks"} />
                     </Link>
                         <h3 class="text-center fontSize3" >Stocks</h3>
                         </Disable>
                         <hr className={"HonzontalLine"}/>
                   </Col>

                   <Col sm={2}  md = {2}>
                     <div className={"VeriticalLine"}/>
                   </Col>
                   <Col sm={5}  md = {5 }>
                   <Disable disabled={disableCalc}>
                     <Link to ="/Calculator">
                       <Image src ={SubCalculator} className={" img-fluid SubCalculator"}
                         alt="CheckListIcon"  />
                     </Link>
                        <h3 class="text-center fontSize3">Calculator</h3>
                    </Disable>
                        <hr className={"HonzontalLine"}/>
                   </Col>
              </Row>

               <Row>
                  <Col sm={5} md = {5}>
                  <Disable disabled={disablePad}>
                    <Link to ="/Notepad">
                      <Image src ={SubNotepad} className={" img-fluid SubNotepad"}  />
                    </Link>
                    <h3 class="text-center fontSize3">Notepad</h3>
                    </Disable>
                    <hr className={"HonzontalLine"}/>
                  </Col>

                  <Col sm={2} md = {2}>
                    <div className={"VeriticalLine"}/>
                   </Col>

                   <Col sm={5} md = {5}>
                   <Disable disabled={disableClock}>
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
                     </Disable>
                     <hr className={"HonzontalLine"}/>
                    </Col>
              </Row>

              <Row>
                 <Col sm={5} md = {5}>
                 <Disable disabled={disableCalender}>
                   <Link to ="/Calendar">
                     <Image src ={SubCalendar} className={" img-fluid SubCalendar"}  />
                   </Link>
                   <h3 class="text-center fontSize3">Calendar</h3>
                   </Disable>
                   <hr className={"HonzontalLine"}/>
                   </Col>

                   <Col sm={2} md = {2}>
                     <div className={"VeriticalLine"}/>
                   </Col>


                   <Col sm={5} md = {5}>
                  <Disable disabled={disableList}>
                     <Link to ="/ToDoList">
                       <Image src ={SubCheckList}
                         className={"img-fluid SubCheckList"}
                         alt="CheckListIcon" />
                     </Link>
                         <h3 class="text-center fontSize3" >To-Do List</h3>
                    </Disable>
                         <hr className={"HonzontalLine"}/>
                   </Col>


              </Row>

              <Row>
                  <Col sm={5} md = {5}>
                  <Disable disabled={disableCount}>
                     <Link to ="/Countdown">
                       <Image src ={SubTimer} className={" img-fluid SubTimer"} />
                     </Link>
                         <h3 class="text-center fontSize3" >Countdown</h3>
                         </Disable>
                         <hr className={"HonzontalLine"}/>
                   </Col>

                   <Col sm={2}  md = {2}>
                     <div className={"VeriticalLine"}/>
                   </Col>
                   <Col sm={5}  md = {5 }>
                   <Disable disabled={disableWatch}>
                     <Link to ="/Stopwatch">
                       <Image src ={SubStopwatch} className={" img-fluid SubStopwatch"}
                         alt="CheckListIcon"  />
                     </Link>
                        <h3 class="text-center fontSize3">Stopwatch</h3>
                        </Disable>
                        <hr className={"HonzontalLine"}/>
                   </Col>
              </Row>
              <Row>

              <Col sm={5} md = {5}>
                   <Disable disabled={disableSchedule}>
                     <Link to ="/Scheduled">
                       <Image src ={SubScheduled} className={" img-fluid SubScheduled"}  />
                     </Link>
                     <h3 class="text-center fontSize3"> Scheduled</h3>
                     </Disable>
                     <hr className={"HonzontalLine"}/>
                  </Col>

                   <Col sm={2}  md = {2}>
                     <div className={"VeriticalLine"}/>
                   </Col>
                   <Col sm={5}  md = {5 }>
                   <Disable disabled={disableNews}>
                     <Link to ="/News">
                       <Image src ={SubNews} className={" img-fluid SubNews"}
                         alt="CheckListIcon"  />
                     </Link>
                        <h3 class="text-center fontSize3">News</h3>
                        </Disable>
                        <hr className={"HonzontalLine"}/>
                   </Col>
              </Row>
              <Row>
                  <Col sm={5} md = {5}>
                  <Disable disabled={disableUnitConverter}>
                     <Link to ="/UnitConverter">
                       <Image src ={SubUnitConverter} className={" img-fluid SubUnitConverter"} />
                     </Link>
                         <h3 class="text-center fontSize3" >Unit Converter</h3>
                         </Disable>
                         <hr className={"HonzontalLine"}/>
                   </Col>

                   <Col sm={2} md = {2}>
                     <div className={"VeriticalLine"}/>
                   </Col>


                   <Col sm={5} md = {5}>
                   <Disable disabled={disableTimezone}>
                     <Link to ="/Timezone">
                       <Image src ={SubTimezone} className={" img-fluid SubTimezone"} />
                     </Link>
                         <h3 class="text-center fontSize3" >Timezone</h3>
                         </Disable>
                         <hr className={"HonzontalLine"}/>
                   </Col>
              </Row>

              <Row>
              <Col sm={5}  md = {5 }>
              <Disable disabled={disableWPMTest}>
                     <Link to ="/WPMTest">
                       <Image src ={SubWPM} className={" img-fluid SubWPM"}
                         alt="CheckListIcon"  />
                     </Link>
                        <h3 class="text-center fontSize3">WPM Test</h3>
                        </Disable>
                        <hr className={"HonzontalLine"}/>
                   </Col>


                   <Col sm={2}  md = {2}>
                     <div className={"VeriticalLine"}/>
                   </Col>

                   <Col sm={5} md = {5}>
                   <Disable disabled={disableDrawingBoard}>
                     <Link to ="/DrawingBoard">
                       <Image src ={DrawingBoard} className={" img-fluid SubTimer"} />
                     </Link>
                         <h3 class="text-center fontSize3" >DrawingBoard</h3>
                    </Disable>
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
