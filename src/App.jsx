import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'

function App() {

  function handleClick(){
    alert('button click')
  }

  const handleClick2 = () => {
    alert('button 2 click')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h3>React core concept part 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me 2</button>
      <button onClick={() => {alert('button click 3')}}>click me 3</button>
      {/* vejjilla */}
      <button onClick={() => addToFive(5)}>click me 4</button>
    </>
  )
}

export default App
