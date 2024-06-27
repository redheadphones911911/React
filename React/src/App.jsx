import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [value , setValue] = useState("");
    return(
        <div className='container'>
            <input type='text'/>
            <div className='wrapper'></div>
            <div>
            <input type='button' value={7} />
            <input type='button' value={8} />
            <input type='button' value={9}/>
            <input type='button' value={DEL} />
            <input type='button' value={AC} />
            </div>
        </div>
    )
}

export default App