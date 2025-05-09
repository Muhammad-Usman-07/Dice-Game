import React from 'react';

const StartGame = ({ toogle }) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="p-4 border-4 border-blue-600 rounded-lg">
          <img
            src="/images/dice.jpg"
            alt="Dice"
            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] object-cover"
          />
        </div>

        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">Dice Game</h1>
          <button
            onClick={toogle}
            type="button"
            className="px-8 py-3 sm:px-10 sm:py-4 bg-blue-600 text-white text-xl sm:text-2xl rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
