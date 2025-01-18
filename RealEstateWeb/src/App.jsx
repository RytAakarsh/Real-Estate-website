import { useState } from 'react'
import './App.css'
import MainDiv from './Components/MainDiv'
import EstateDisplay from './Components/EstateDisplay'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainDiv></MainDiv>
      <EstateDisplay></EstateDisplay>
    </>
  )
}

export default App
