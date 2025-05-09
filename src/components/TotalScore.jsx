import React from 'react'

const TotalScore = ({ score }) => {
  return (

    <div className='main'>
      <div className=' w-[200px] h-[200px] flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-extrabold '>{score}</h1>
        <p className='text-2xl font-bold'>Total Score</p>

      </div>
    </div>
  )
}

export default TotalScore
