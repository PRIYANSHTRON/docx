import React from 'react'
import BackGround from './components/BackGround'
import ForeGround from './components/ForeGround'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800 text-white'>
      <BackGround />
      <ForeGround/>
    </div>
  )
}

export default App