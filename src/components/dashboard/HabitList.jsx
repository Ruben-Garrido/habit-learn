import React from 'react';

const habits = [
  { id: 1, name: 'Leer 15 minutos', category: 'Aprender', completed: false },
  { id: 2, name: 'Hacer 20 flexiones', category: 'Salud', completed: true },
  { id: 3, name: 'Meditar 5 minutos', category: 'Mindfulness', completed: false },
];

export const HabitList = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Hábitos de Hoy</h2>
      <ul className="space-y-4">
        {habits.map(habit => (
          <li key={habit.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked={habit.completed}
                className="w-5 h-5 text-green-500"
              />
              <span className={`${habit.completed ? 'line-through text-gray-400' : ''}`}>
                {habit.name}
              </span>
            </div>
            <span className="text-sm text-white bg-blue-500 px-2 py-1 rounded">
              {habit.category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
