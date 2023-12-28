// App.jsx
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './Component/HomeComponent';
import QuizComponent from './Component/QuizComponent';
import ResultComponent from './Component/ResultComponent';
import quizQuestions from './questions.json';

class App extends Component {
  state = {
    score: 0,
    attemptQuiz: 0,
    questions: quizQuestions,
  };

  handleScoreUpdate = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };

  handleAttemptQuizUpdate = () => {
    this.setState((prevState) => ({
      attemptQuiz: prevState.attemptQuiz + 1,
    }));
  };

  render() {
    const { score, attemptQuiz, questions } = this.state;

    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route
            path="/quiz"
            element={<QuizComponent score={score} questions={questions} updateScore={this.handleScoreUpdate} updateAttemptQuiz={this.handleAttemptQuizUpdate} />}
          />
          <Route path="/result" element={<ResultComponent score={score} attemptQuiz={attemptQuiz} />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
