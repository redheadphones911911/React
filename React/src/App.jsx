import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
 <div>
  <p>Type your name:</p>
  <input type='text'></input> 
<button>Submit</button>
 </div>
  )
}

export default App
