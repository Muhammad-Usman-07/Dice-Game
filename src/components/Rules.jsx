import React from 'react';

const Rules = () => {
  return (
    <div className="w-full px-4 py-10 flex justify-center items-center bg-gray-50">
      <div className="max-w-xl w-full border-4 border-blue-400 rounded-2xl bg-white shadow-xl p-6 sm:p-8 md:p-10 flex flex-col gap-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-blue-700">Rules</h1>
        <p className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">How to play</p>
        <ul className="list-decimal list-inside space-y-3 text-gray-700 text-base sm:text-lg md:text-xl font-medium">
          <li>Select a number between 1 and 6</li>
          <li>Click on the dice to roll it</li>
          <li>If you roll the same number as selected, you get +1 point, else -1</li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
