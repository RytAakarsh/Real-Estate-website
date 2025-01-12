import { useState } from 'react'

import './App.css'
import MainDiv from './Components/MainDiv'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainDiv></MainDiv>
    </>
  )
}

export default App
