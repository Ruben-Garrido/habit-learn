import React from 'react';

export const ProgressSummary = ({ total, completed }) => {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  
  const message =
    percentage === 100
      ? '¡Felicidades! Completaste todos tus hábitos hoy 💪'
      : percentage >= 50
      ? '¡Buen trabajo! Sigue así 🏃‍♂️'
      : 'Puedes mejorar mañana, ¡no te rindas! 🌱';

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h3 className="text-xl font-bold mb-2">Resumen Diario</h3>
      <p>Total de hábitos: <strong>{total}</strong></p>
      <p>Completados hoy: <strong>{completed}</strong></p>
      <p>Progreso: <strong>{percentage}%</strong></p>
      <div className="mt-4 bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="mt-4 italic text-sm text-gray-700">{message}</p>
    </div>
  );
};
