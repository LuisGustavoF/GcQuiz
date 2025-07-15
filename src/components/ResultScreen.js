// Atualiza o ResultScreen para gerar PDF com tempo total e média
import React from 'react';
import jsPDF from 'jspdf';

export default function ResultScreen({ playerName, score, total, onRestart, quizData, quizType, startDate, answerTimes }) {
  const totalTime = answerTimes.reduce((acc, cur) => acc + cur, 0);
  const averageTime = answerTimes.length > 0 ? totalTime / answerTimes.length : 0;

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
  }

  const handleGeneratePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Relatório do Quiz', 105, 20, null, null, 'center');

    doc.setFontSize(12);
    doc.text(`Nome: ${playerName}`, 20, 40);
    doc.text(`Data: ${startDate}`, 20, 50);
    doc.text(`Tipo de Quiz: ${quizType === 'geral' ? 'Geral' : 'Culto'}`, 20, 60);
    doc.text(`Pontuação: ${score}/${total}`, 20, 70);
    doc.text(`Tempo total: ${formatTime(totalTime)}`, 20, 80);
    doc.text(`Tempo médio por pergunta: ${formatTime(averageTime)}`, 20, 90);

    let y = 110;
    quizData.forEach((q, idx) => {
      doc.text(`Q${idx + 1}: ${q.question}`, 20, y);
      doc.text(`- Resposta correta: ${q.correct}`, 25, y + 7);
      doc.text(`- Sua resposta: ${q.selectedAnswer || 'Nenhuma'}`, 25, y + 14);
      y += 25;
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save(`quiz_${playerName}.pdf`);
  };

  return (
    <div>
      <h2>Resultado do Quiz</h2>
      <p>Parabéns, {playerName}!</p>
      <p>Você acertou {score} de {total} perguntas.</p>
      <p>Tempo total do quiz: {formatTime(totalTime)}</p>
      <p>Média por pergunta: {formatTime(averageTime)}</p>
      <button onClick={handleGeneratePDF}>Gerar PDF</button>
      <button onClick={onRestart}>Tentar de novo</button>
    </div>
  );
}
