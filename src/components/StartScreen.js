// src/components/StartScreen.js
import React, { useState } from 'react';

function StartScreen({ onStart }) {
  const [name, setName] = useState('');

  const handleStart = () => {
    if (name.trim() === '') {
      alert('Por favor, digite seu nome!');
      return;
    }
    onStart(name);
  };

  return (
    <div>
      <h2>Quiz GC</h2>
      <p>Bem-vindo! Digite seu nome para começar:</p>
      <input
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '6px',
          border: 'none',
          marginBottom: '10px',
          width: '80%',
          maxWidth: '300px',
          textAlign: 'center'
        }}
      />
      <br />
      <button onClick={handleStart}>Começar Quiz</button>
    </div>
  );
}

export default StartScreen;
