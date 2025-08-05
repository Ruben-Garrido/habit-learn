import React, { useState } from 'react';

export const DailyLesson = () => {
  const [completed, setCompleted] = useState(false);

  const lesson = {
    title: "Descubre el poder de la constancia",
    content:
      "Pequeñas acciones repetidas consistentemente tienen un impacto enorme a largo plazo. Hoy, enfócate en avanzar solo un paso más.",
  };

  const handleComplete = () => {
    setCompleted(true);
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-6 ">
      <h3 className="text-xl font-bold mb-2">Lección del Día</h3>
      {completed ? (
        <p className="text-green-600 font-semibold">✅ ¡Lección completada!</p>
      ) : (
        <>
          <h4 className="text-lg font-semibold mb-2">{lesson.title}</h4>
          <p className="mb-4">{lesson.content}</p>
          <button
            onClick={handleComplete}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Marcar como leída
          </button>
        </>
      )}
    </div>
  );
};
