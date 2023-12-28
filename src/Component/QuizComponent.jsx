// QuizComponent.jsx
import React, { Component } from 'react';
import '../Component/Component.css';
import quizQuestions from '../questions.json';
import { Link } from 'react-router-dom';

export default class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
      preBtnDisabled: true,
      nextBtnDisabled: false,
    };
  }

  handlePrevious = () => {
    const { currentQuestion } = this.state;
    this.setState({
      currentQuestion: Math.max(currentQuestion - 1, 1),
      nextBtnDisabled: false,
    });
  };

  handleNext = () => {
    const { currentQuestion } = this.state;
    const { updateAttemptQuiz } = this.props;

    this.setState({
      currentQuestion: Math.min(currentQuestion + 1, quizQuestions.length),
      preBtnDisabled: false,
    }, () => updateAttemptQuiz());
  };

  handleQuit = () => {
    if (window.confirm('Are you sure you want to quit?')) {
      this.setState({
        currentQuestion: 1,
      });
    }
  };

  handleAnswer = (clickedOption) => {
    const { currentQuestion } = this.state;
    const { updateScore } = this.props;
    const correctAnswer = quizQuestions[currentQuestion - 1].answer;

    if (clickedOption === correctAnswer) {
      alert('Correct Answer');
      updateScore();
    } else {
      alert('Wrong Answer');
    }

    this.handleNext();
  };

  render() {
    const { currentQuestion, preBtnDisabled, nextBtnDisabled } = this.state;
    const currentQuestionData = quizQuestions[currentQuestion - 1];

    return (
      <div id="body">
        <div id="subContainer">
          <h1 id='quesHead'>Question</h1>
          <p id="noQues">{`${currentQuestion} of ${quizQuestions.length}`}</p>
          <h3 id='ques'>{currentQuestionData.question}</h3>
          <div id="answer-box">
            {['optionA', 'optionB', 'optionC', 'optionD'].map((option, index) => (
              <button key={index} onClick={() => this.handleAnswer(currentQuestionData[option])}>
                {currentQuestionData[option]}
              </button>
            ))}
          </div>
          <div id="option-box">
            <button
              style={{ backgroundColor: '#3E7DAA', cursor: preBtnDisabled ? 'not-allowed' : 'pointer' }}
              onClick={this.handlePrevious}
              id="preBtn"
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: 'green', cursor: nextBtnDisabled ? 'not-allowed' : 'pointer' }}
              onClick={this.handleNext}
            >
              Next
            </button>
            <button style={{ backgroundColor: 'red' }} onClick={this.handleQuit}>
              Quit
            </button>
            <button style={{ border: '2px solid red'}}>
              <Link to="/result" style={{textDecoration:'none'}}>Finish</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
