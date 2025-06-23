import React, { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import Loader from './components/Loader'; // <- NOVO
import quizData from './quizData';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false); // <- NOVO
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [canAnswer, setCanAnswer] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    let timer;
    if (started && canAnswer && timeLeft > 0 && current < quizData.length) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && canAnswer) {
      handleAnswer(null);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, started, current, canAnswer]);

  const startQuiz = () => {
    setLoading(true); // Ativa o loader
    setTimeout(() => {
      setStarted(true);
      setCurrent(0);
      setScore(0);
      setFeedback(null);
      setCanAnswer(true);
      setSelectedOption(null);
      setTimeLeft(15);
      setLoading(false); // Desativa o loader
    }, 1000); // 1 segundo de "carregando"
  };

  const nextQuestion = () => {
    setFeedback(null);
    setCanAnswer(true);
    setSelectedOption(null);
    setTimeLeft(15);
    setCurrent((prev) => prev + 1);
  };

  const handleAnswer = (option) => {
    if (!canAnswer) return;

    setSelectedOption(option);

    if (option === quizData[current].correct) {
      setScore((prev) => prev + 1);
      setFeedback('correct');
      setCanAnswer(false);
      setTimeout(() => {
        nextQuestion();
      }, 800);
    } else {
      setFeedback('wrong');
      setCanAnswer(false);
      setTimeout(() => {
        nextQuestion();
      }, 2000);
    }
  };

  const restartQuiz = () => {
    setStarted(false);
    setCurrent(0);
    setScore(0);
    setFeedback(null);
    setCanAnswer(true);
    setSelectedOption(null);
    setTimeLeft(15);
  };

  return (
    <div className="app-container">
      {loading && <Loader />}
      {!loading && !started && <StartScreen onStart={startQuiz} />}
      {!loading && started && current < quizData.length && (
        <>
          <QuizScreen
            questionData={quizData[current]}
            currentQuestion={current + 1}
            totalQuestions={quizData.length}
            onAnswer={handleAnswer}
            canAnswer={canAnswer}
            feedback={feedback}
            selectedOption={selectedOption}
            timeLeft={timeLeft}
          />
          <div style={{ marginTop: 10, fontWeight: 'bold' }}>
            <progress value={current + 1} max={quizData.length}></progress>
            <div>{`Progresso: ${current + 1} de ${quizData.length}`}</div>
            <div>{`Tempo restante: ${timeLeft}s`}</div>
          </div>
          {feedback === 'wrong' && (
            <p style={{ color: 'red', fontWeight: 'bold' }}>
              Resposta errada! Tente novamente.
            </p>
          )}
        </>
      )}
      {!loading && started && current >= quizData.length && (
        <ResultScreen score={score} total={quizData.length} onRestart={restartQuiz} />
      )}
    </div>
  );
}

export default App;
