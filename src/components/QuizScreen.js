import React from 'react';

export default function QuizScreen({
  questionData,
  currentQuestion,
  totalQuestions,
  onAnswer,
  canAnswer,
  feedback,
  selectedOption,
  timeLeft
}) {
  return (
    <div>
      <h2>{`Pergunta ${currentQuestion} de ${totalQuestions}`}</h2>
      <p>{questionData.question}</p>
      <div>
        {questionData.options.map((opt, idx) => {
          let className = '';
          if (selectedOption) {
            if (opt === questionData.correct) {
              className = 'correct';
            } else if (opt === selectedOption && feedback === 'wrong') {
              className = 'wrong';
            }
          }

          return (
            <button
              key={idx}
              className={className}
              disabled={!canAnswer}
              onClick={() => onAnswer(opt)}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
