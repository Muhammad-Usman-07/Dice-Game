import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import { useState } from 'react'
import Rules from './Rules'

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRule, setShowRule] = useState(false)

  const GenerateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const resetscore = () => {
    setScore(0);
  }

  const roleDice = () => {
    if(!selectedNumber){
      setError("Please select a number first");
      return;

    } 
    setError("");
    const randomNumber = GenerateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if(selectedNumber === randomNumber) {
      setScore(score + 1);
    }
    else {
      setScore(score - 1);
    }
    setSelectedNumber(undefined);
  };
  return (
    <main>
      <div className='flex flex-row justify-between   bg-gray-100'>
        <TotalScore score={score} />
        <NumberSelector selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber} 
          error={error}/>

      </div>
      <RoleDice currentDice={currentDice}
        roleDice={roleDice} />
        <div className="bt flex flex-col justify-center items-center mt-10 gap-5">
        <button
          onClick={resetscore}
          type="button"
          className="px-10 py-2  bg-white border-2 text-black text-2xl rounded-xl hover:bg-blue-700 transition duration-900 "
        >
          Reset
        </button>
        <button
          type="button"
          className="px-10 py-2 bg-black text-white text-2xl rounded-xl hover:bg-blue-700 transition duration-900"
          onClick={() => setShowRule(prev => !prev)}
        >
          {showRule ? "Hide Rules" : "Show Rules"}
        </button>
        {showRule && <Rules />}
        </div>
    </main>
  )
}

export default GamePlay
