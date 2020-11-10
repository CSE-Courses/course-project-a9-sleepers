import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../../NavBar/NavBar';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./WPMTest.css"

export default function WPMTest() {

    const [baconQuote, setBaconQuote] = useState([])

    useEffect(() => {
        const url = 'https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=json';
        fetch(url)
        .then(response => response.json())
        .then(data => setBaconQuote(data))

    }, [])

    

    return (
        <div>
            <NavBar />
            <Container className="display">
                <h4 className="quote">{baconQuote}</h4>
                <textarea type="text" className="userInput" />
            </Container>
        </div>
    );
}