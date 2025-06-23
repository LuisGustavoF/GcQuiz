import React from 'react';

function StartScreen({ onStart }) {
  return (
    <div>
      <h1>Quiz Bíblico do GC</h1>
      <p>Teste seu conhecimento sobre a Bíblia!</p>
      <button onClick={onStart}>Iniciar Quiz</button>
    </div>
  );
}

export default StartScreen;
