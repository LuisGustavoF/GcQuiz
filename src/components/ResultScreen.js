import React from 'react';

function ResultScreen({ score, total, onRestart }) {
  return (
    <div>
      <h2>Resultado</h2>
      <p>Você acertou {score} de {total} perguntas.</p>
      <button onClick={onRestart}>Reiniciar Quiz</button>
    </div>
  );
}

export default ResultScreen;
