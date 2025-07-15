import React from 'react';
import './InfoModal.css';

function InfoModal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>🎉 Bem-vindo ao Quiz GC!</h2>
        <p>Mostre seus conhecimentos bíblicos e conquiste o pódio:</p>
        <ul>
          <li>🥉 Mais de 20 pontos: <strong>3º Lugar</strong></li>
          <li>🥈 Mais de 35 pontos: <strong>2º Lugar</strong></li>
          <li>🥇 Mais de 48 pontos: <strong>1º Lugar</strong></li>
        </ul>
        <p>Dica: Leia com atenção, pense rápido e boa sorte! 📖🔥</p>
        <button onClick={onClose}>Entendi! Vamos começar</button>
      </div>
    </div>
  );
}

export default InfoModal;
