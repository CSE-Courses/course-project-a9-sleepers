import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./ToDoList.css"
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../../NavBar/NavBar';
import Pdf from 'react-to-pdf';

export default function ToDoList() {
    const[toDoList, handleToDoList] = useState([]);
    const[input, setInput] = useState('');
    const [backgroundColor, setBackgroundColor] = useState(['#FFFFFF']);

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(input);
        setInput('');
    };

    //adding task operation
    const addToDo = (text) => {
        if(text !== ''){
            const updatedToDoList = [...toDoList, {text}];
            handleToDoList(updatedToDoList);
        }
    };

    //delete task operation
    const deleteToDo = (toDo) => {
        const filteredList = toDoList.filter(currentElement => (
             currentElement !== toDo));
             handleToDoList(filteredList);
    };

    //cursor defaults to the form
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //change colors

    const addBackgroundColor = (index,color) =>{
        console.log(index);
        console.log(color);    
     
    let colors = [...backgroundColor];
        colors[index] = color;
        setBackgroundColor(colors);

        //    console.log("index 0= " + backgroundColor[0]);
        //    console.log("index 1= " + backgroundColor[1]);
        //    console.log("index 2= " + backgroundColor[2]);
        //    console.log("index 3= " + backgroundColor[3]);
    }
    const [currentIndex, setCurrentIndex] = useState();

    const editColorHandler = (props) =>{
        setCurrentIndex(props);
    }
    
   const combineHandler = (props) =>{
        handleShow();
        editColorHandler(props);
    }
    const ref = React.createRef();

    return (
        <div>
            <NavBar/>
                <Pdf targetRef={ref} filename="to_do_list.pdf">
                    {({ toPdf }) => <Button className="downloadButton" variant="outline-dark" size="lg" onClick={toPdf}>Convert to PDF</Button>}
                </Pdf>

                <Container className="Interface">
                        <h1 className="title">To-Do List</h1>
                    <header>
                        <form id="todo-form" onSubmit={handleSubmit}>
                            <input value={input} onChange={textHandler => setInput(textHandler.target.value)} type="text" placeholder="Enter Task" ref={inputRef}/>
                            <Button type="submit" variant="dark">Add</Button>
                        </form>
                    </header>
                        
                    <Container ref={ref}>
                    {
                        toDoList.map((toDo, index) => (
                            <div key={index}>
                                <span className="task" style={{ background: backgroundColor[index] }}>{toDo.text}</span>
                                <Button onClick={() => deleteToDo(toDo)} variant="danger" size="sm">Delete</Button>
                                <Button onClick={() => combineHandler(index)}  variant="info" size="sm">Change Status</Button>
                                <Modal show={show} animation={false} centered size="lg" onHide={handleClose}>
                                <Modal.Header closeButton>
                                        <Modal.Title>Assign Priority Status</Modal.Title>
                                        <Modal.Body>
                                            <Container>
                                                <Row>   
                                                    <Col>
                                                        <Button onClick={() => addBackgroundColor(currentIndex,"#FF3232")} variant="danger" size="md">High</Button>
                                                    </Col>
                                                    <Col>
                                                        <Button onClick={() => addBackgroundColor(currentIndex,"#FFFF00")} variant="warning" size="md">Medium</Button>
                                                    </Col>
                                                    <Col>
                                                        <Button onClick={() => addBackgroundColor(currentIndex,"#00E572")} variant="success" size="md">Low</Button>
                                                    </Col>
                                                    <Col>
                                                        <Button onClick={() => addBackgroundColor(currentIndex,"#FDFDFD")} variant="secondary" size="md">Neutral</Button>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Modal.Body>
                                        </Modal.Header>        
                                </Modal>
                            </div>
                        ))
                    }
                    </Container>
                </Container>
        </div>
    );
}