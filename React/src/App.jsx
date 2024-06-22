import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputHandle = () => {
    let input = document.getElementById('txt')
    let print = input.value
    let para = document.getElementById('parag')
    let outside = para.textContent(print)
     return outside
  }

  return(
 <div>
  <p>Type your name:</p>
  <input type='text' id='txt'></input> 
<button onClick={inputHandle}>Submit</button>
<p id='parag'></p>
 </div>
  )
}

export default App
