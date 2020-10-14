import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./ToDoList.css"
import { Container } from 'react-bootstrap';
import NavBar from '../../NavBar/NavBar';

export default function ToDoList() {
    const[toDoList, handleToDoList] = useState([]);
    const[input, setInput] = useState('');

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

    return (
        <div>
            <NavBar/>
                <Container className="Interface">
                    <h1 className="title">To-Do List</h1>
                    <header>
                        <form id="todo-form" onSubmit={handleSubmit}>
                            <input value={input} onChange={textHandler => setInput(textHandler.target.value)} type="text" placeholder="Enter Task" ref={inputRef}/>
                            <Button type="submit" variant="info">Add</Button>
                        </form>
                        </header>
                    <Container>
                    {
                        toDoList.map((toDo, index) => (
                            <div key={index}>
                                <span className="task">{toDo.text}</span>
                                <Button onClick={() => deleteToDo(toDo)} variant="danger" size="sm">Delete</Button>
                            </div>
                        ))
                    }
                    </Container>
                </Container>
        </div>
    );
}