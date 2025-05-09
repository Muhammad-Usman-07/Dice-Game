import React from 'react'
import { useState } from 'react'
import StartGame from './components/StartGame.jsx'
import GamePlay from './components/GamePlay.jsx'

const App = () => {
  const [isGamestarted, setisGamestarted] = useState(false)
  const toogle = () => {
    setisGamestarted(!isGamestarted)
  }
  return (
    <div>
      {isGamestarted ? <GamePlay /> : <StartGame toogle={toogle} />}
    </div>    
  )
 
}

export default App
