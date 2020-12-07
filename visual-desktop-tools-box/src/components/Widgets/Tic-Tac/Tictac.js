import React from 'react';
import '../App.css';
import Game from './components/Game';
import NavBar from '../../NavBar/NavBar';

function Tictac() {
  return (
    <div>
      <NavBar />
      <Game />
      </div>
  );
}

export default Tictac;
