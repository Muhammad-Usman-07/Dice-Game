import React from 'react';

const NumberSelector = ({ error, selectedNumber, setSelectedNumber }) => {
  const arrNumbers = [1, 2, 3, 4, 5, 6];

  return (
    <div className='mt-10 sm:mt-8 mr-3 sm:mr-4 px-4 sm:px-6 md:px-1 w-full max-w-md'>
      <p className='text-red-600 text-sm sm:text-base'>{error}</p>
      
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start mt-3">
        {arrNumbers.map((value, i) => (
          <div
            key={i}
            onClick={() => setSelectedNumber(value)}
            className={`border-2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex justify-center items-center cursor-pointer rounded-md 
            ${selectedNumber === value ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            {value}
          </div>
        ))}
      </div>

      <p className='text-lg sm:text-xl font-bold mt-4 text-center sm:text-left'>
        Selected Number
      </p>
    </div>
  );
};

export default NumberSelector;
