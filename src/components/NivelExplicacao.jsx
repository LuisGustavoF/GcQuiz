import React from 'react';

const NivelExplicacao = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-xl shadow-md text-gray-800">
      <h3 className="text-xl font-bold text-center mb-4">📚 Níveis do Quiz - Perguntas Gerais</h3>
      <ul className="space-y-2 text-sm">
        <li><strong>😅 Até 10 acertos:</strong> Ateu</li>
        <li><strong>🍼 Até 20 acertos:</strong> Novo convertido</li>
        <li><strong>🧱 +20 acertos:</strong> Crente em construção</li>
        <li><strong>🙏 +35 acertos:</strong> Crente</li>
        <li><strong>📖 +40 acertos:</strong> Aspirante a teólogo</li>
        <li><strong>📚 +45 acertos:</strong> Teólogo</li>
        <li><strong>🌩️ 50 acertos:</strong> Pronto para o arrebatamento</li>
      </ul>
    </div>
  );
};

export default NivelExplicacao;
