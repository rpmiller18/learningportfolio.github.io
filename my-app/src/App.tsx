import React from 'react';
import './App.css';

const App = () => {
  const startTriva = async () =>{

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  const nextQuestion = () => {

  }
  return (
  <div className="App">
      <h1> React Quiz</h1>
      <button className="Start" onClick = {startTriva}>
        Start
      </button>
      <p className="score">Score</p>
      <p>Loading Questions...</p>
  </div>
  );
}

export default App;
