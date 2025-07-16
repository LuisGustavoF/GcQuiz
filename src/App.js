import React, { useState, useEffect } from 'react';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import quizDataRaw from './quizData';
import quizCultos from './quizCultos';
import './App.css';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function App() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [canAnswer, setCanAnswer] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [playerName, setPlayerName] = useState('');
  const [showModal, setShowModal] = useState(true);
  const [showRanking, setShowRanking] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [answerTimes, setAnswerTimes] = useState([]);

  const [quizType, setQuizType] = useState('geral');
  const [selectedCulto, setSelectedCulto] = useState('');

  const maxTimePerQuestion = 15;

  useEffect(() => {
    setShowModal(true);
    setStarted(false);
    setCurrent(0);
    setScore(0);
    setFeedback(null);
    setCanAnswer(true);
    setSelectedOption(null);
    setTimeLeft(maxTimePerQuestion);
    setQuizData([]);
    setStartDate('');
    setAnswerTimes([]);
  }, [quizType, selectedCulto]);

  useEffect(() => {
    let timer;
    if (started && canAnswer && timeLeft > 0 && current < quizData.length) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && canAnswer) {
      handleAnswer(null);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, started, current, canAnswer, quizData]);

  const startQuiz = () => {
    if (playerName.trim() === '') {
      alert('Por favor, digite seu nome!');
      return;
    }
    if (quizType === 'culto' && !selectedCulto) {
      alert('Por favor, selecione um culto!');
      return;
    }

    let data = [];
    if (quizType === 'geral') {
      data = [...quizDataRaw];
    } else if (quizType === 'culto' && selectedCulto && quizCultos[selectedCulto]) {
      data = [...quizCultos[selectedCulto].perguntas];
    }

    data = shuffleArray(data);

    const preparedData = data.map(q => ({
      ...q,
      options: shuffleArray(q.options),
      selectedAnswer: null,
    }));

    setQuizData(preparedData);
    setCurrent(0);
    setScore(0);
    setFeedback(null);
    setCanAnswer(true);
    setSelectedOption(null);
    setTimeLeft(maxTimePerQuestion);
    setShowModal(false);
    setShowRanking(false);
    setStarted(true);
    setStartDate(new Date().toLocaleString());
    setAnswerTimes([]);
  };

  const nextQuestion = () => {
    setFeedback(null);
    setCanAnswer(true);
    setSelectedOption(null);
    setTimeLeft(maxTimePerQuestion);
    setCurrent(prev => prev + 1);
  };

  const handleAnswer = (option) => {
    if (!canAnswer) return;

    setSelectedOption(option);
    const timeUsed = maxTimePerQuestion - timeLeft;
    setAnswerTimes(prevTimes => [...prevTimes, timeUsed]);

    setQuizData(prevQuizData => {
      const newQuizData = [...prevQuizData];
      newQuizData[current] = {
        ...newQuizData[current],
        selectedAnswer: option,
      };
      return newQuizData;
    });

    if (option === quizData[current].correct) {
      setScore(prev => prev + 1);
      setFeedback('correct');
      setCanAnswer(false);
      setTimeout(() => nextQuestion(), 800);
    } else {
      setFeedback('wrong');
      setCanAnswer(false);
      setTimeout(() => nextQuestion(), 2000);
    }
  };

  const restartQuiz = () => {
    setStarted(false);
    setCurrent(0);
    setScore(0);
    setFeedback(null);
    setCanAnswer(true);
    setSelectedOption(null);
    setTimeLeft(maxTimePerQuestion);
    setShowModal(true);
    setShowRanking(false);
    setSelectedCulto('');
    setQuizType('geral');
    setStartDate('');
    setQuizData([]);
    setAnswerTimes([]);
  };

  return (
    <div className="app-container">
      {showModal && !showRanking && (
        <div className="modal">
          {quizType === 'geral' ? (
            <h2>Bem-vindo ao Quiz GC!</h2>
          ) : selectedCulto && quizCultos[selectedCulto] ? (
            <>
              <h2>
                Perguntas do dia <strong>{formatDate(quizCultos[selectedCulto].data)}</strong> sobre{' '}
                <strong>{quizCultos[selectedCulto].nome}</strong>
              </h2>
              <p style={{ fontStyle: 'italic', marginBottom: 15 }}>
                Tema: <strong>{quizCultos[selectedCulto].tema}</strong>
              </p>
            </>
          ) : (
            <h2>Bem-vindo ao Quiz do Culto!</h2>
          )}

          <div style={{ marginBottom: 20 }}>
            <button
              onClick={() => {
                setQuizType('geral');
                setSelectedCulto('');
              }}
              style={{ marginRight: 10 }}
            >
              Perguntas Gerais
            </button>
            <button onClick={() => setQuizType('culto')}>Perguntas do Culto</button>
          </div>

          {quizType === 'geral' && (
            <div className="bg-white rounded-lg p-4 shadow text-sm text-gray-800 mb-4">
              <h3 className="font-bold text-center text-lg mb-2">📚 Níveis do Quiz - Perguntas Gerais</h3>
              <ul className="space-y-1" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li><strong>😅 Até 10 acertos:</strong> Ateu</li>
                <li><strong>🍼 Até 20 acertos:</strong> Novo convertido</li>
                <li><strong>🧱 +20 acertos:</strong> Crente em construção</li>
                <li><strong>🙏 +35 acertos:</strong> Crente</li>
                <li><strong>📖 +40 acertos:</strong> Aspirante a teólogo</li>
                <li><strong>📚 +45 acertos:</strong> Teólogo</li>
                <li><strong>🌩️ 50 acertos:</strong> Pronto para o arrebatamento</li>
              </ul>
            </div>
          )}

          {quizType === 'culto' && (
            <>
              <label htmlFor="selectCulto" style={{ display: 'block', marginBottom: 6, fontWeight: 'bold' }}>
                Selecione o culto:
              </label>
              <select
                id="selectCulto"
                value={selectedCulto}
                onChange={(e) => setSelectedCulto(e.target.value)}
                style={{ marginBottom: 20, padding: '6px 10px', fontSize: 16 }}
              >
                <option value="" disabled>-- Escolha um culto --</option>
                {Object.entries(quizCultos).map(([key, culto]) => (
                  <option key={key} value={key}>
                    {culto.nome} - {formatDate(culto.data)}
                  </option>
                ))}
              </select>
              {selectedCulto && (
                <div className="bg-white rounded-lg p-4 shadow text-sm text-gray-800 mb-4">
                  <h3 className="font-bold text-center text-lg mb-2">📖 Perguntas do Culto</h3>
                  <p>
                    Perguntas do culto <strong>{quizCultos[selectedCulto].nome}</strong> realizado em{' '}
                    <strong>{formatDate(quizCultos[selectedCulto].data)}</strong>.
                  </p>
                  <p className="mt-2 italic text-gray-600">⚠️ Teste sua atenção na pregação!</p>
                </div>
              )}
            </>
          )}

          <input
            type="text"
            placeholder="Digite seu nome"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            style={{ padding: 8, fontSize: 16, width: '100%', marginBottom: 10 }}
          />
          <button
            onClick={startQuiz}
            disabled={quizType === 'culto' && !selectedCulto}
            style={{
              padding: '10px 20px',
              fontSize: 16,
              cursor: quizType === 'culto' && !selectedCulto ? 'not-allowed' : 'pointer',
              opacity: quizType === 'culto' && !selectedCulto ? 0.5 : 1,
            }}
          >
            Iniciar Quiz
          </button>
        </div>
      )}

      {showModal && showRanking && (
        <div className="modal">
          <Ranking />
          <button onClick={() => setShowRanking(false)}>Voltar</button>
        </div>
      )}

      {started && current < quizData.length && (
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
            <p style={{ color: 'red', fontWeight: 'bold' }}>Resposta errada! Tente novamente.</p>
          )}
        </>
      )}

      {started && current >= quizData.length && (
        <ResultScreen
          playerName={playerName}
          score={score}
          total={quizData.length}
          onRestart={restartQuiz}
          quizData={quizData}
          quizType={quizType}
          startDate={startDate}
          answerTimes={answerTimes}
        />
      )}
    </div>
  );
}

export default App;
