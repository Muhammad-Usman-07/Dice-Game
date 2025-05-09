import React, { useState } from 'react';

const RoleDice = ({ currentDice, roleDice }) => {
  

  

  return (
    <div onClick={roleDice} className='flex flex-col justify-center items-center mt-10'>
      <div className='w-[200px] h-[200px] flex cursor-pointer'>
        <img src={`/images/dicepic/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} />
      </div>
      <p className='font-bold mt-4 text-2xl'>Click to start game</p>
    </div>
  );
};

export default RoleDice;
