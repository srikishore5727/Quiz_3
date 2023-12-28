// ResultComponent.jsx
import React, { Component } from 'react';
import './Component.css';
import { Link } from 'react-router-dom';
import quizQuestions from '../questions.json';

export default class ResultComponent extends Component {
  render() {
    const { score, attemptQuiz } = this.props;

    return (
      <div id='body'>
        <div id="center-div">
          <h1 style={{ color: '#0AB306' }}>Result</h1>
          <div id="result-board">
            <h3>You need practice more!</h3>
            <h1 style={{ color: 'blue' }}>Your score is {Math.round((score / quizQuestions.length) * 100)}</h1>

            <div className="results">
              <p>Total number of questions</p>
              <p>{quizQuestions.length}</p>
            </div>
            <div className="results">
              <p>Number of attempted questions</p>
              <p>{attemptQuiz}</p>
            </div>
            <div className="results">
              <p>Number of correct answers</p>
              <p>{score}</p>
            </div>
            <div className="results">
              <p>Number of wrong answers</p>
              <p>{attemptQuiz - score}</p>
            </div>
          </div>
          <div>
            <Link to="/quiz">
              <button style={{ color: 'blue', padding: '6px', margin: '10px' }}>Play again</button>
            </Link>
            <Link to="/">
              <button style={{ color: 'green', padding: '6px', margin: '10px' }}>Back to home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
